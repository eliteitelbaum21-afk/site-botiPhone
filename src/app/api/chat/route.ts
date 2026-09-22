import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { site } from "@/lib/site";
import { processLead, type LeadIntent } from "@/lib/leads";

export const dynamic = "force-dynamic";

const SYSTEM_PROMPT = `אתה נציג שירות לקוחות אדיב ומקצועי של BotiPhone — חברה ישראלית המספקת פתרונות תקשורת עסקיים מבוססי AI.

## השירותים שאנחנו מציעים:

### 1. בוט טלפוני חכם (Inbound)
- עונה לשיחות נכנסות 24/6
- מבין שפה טבעית ודיבור חופשי בעברית
- קובע פגישות, מספק מידע, מנתב לנציג כשצריך

### 2. קמפיין שיחות אוטומטי (Outbound) — זה המחירון באתר
- מחייג לאלפי לידים במקביל
- בוט AI מסנן ומעביר לידים חמים לנציג
- מחיר קבוע (לא חודשי), לפי חבילות:
  • Launch: 1,000 ₪ — 1,000 דקות, עד 3,000 מספרים
  • Growth: 2,300 ₪ — 3,000 דקות, עד 10,000 מספרים
  • Business Pro: 3,300 ₪ — 5,000 דקות, עד 18,000 מספרים
  • Enterprise: 5,500 ₪ — 10,000 דקות, עד 40,000 מספרים
- הקמה חד-פעמית: 2,000 ₪

### 3. מרכזייה בענן
- שלוחות, IVR, הקלטות, ניתוב חכם
- מחיר מותאם — לא כלול במחירון הקמפיינים

## פרטי קשר
- טלפון: ${site.phone}
- אימייל: ${site.email}
- WhatsApp: ${site.phoneIntl}

## הנחיות
- ענה בעברית, קצר וברור (2–4 משפטים)
- אם שואלים על מחיר מענה נכנס או מרכזיה — הסבר שזה הצעת מחיר מותאמת
- אם המשתמש רוצה הדגמה / שיחזרו אליו — בקש שם מלא ומספר טלפון, ואז השתמש בכלי capture_lead
- אל תמציא מחירים שלא ברשימה`;

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 20;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function getOpenAI(): OpenAI | null {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;
  return new OpenAI({ apiKey });
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "יותר מדי הודעות. נסו שוב בעוד מספר דקות." },
      { status: 429 }
    );
  }

  const openai = getOpenAI();
  if (!openai) {
    return NextResponse.json(
      {
        error:
          "הצ'אט אינו זמין כרגע. השאירו פרטים בטופס צור קשר או התקשרו אלינו: " +
          site.phone,
      },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "בקשה לא תקינה" }, { status: 400 });
  }

  const messages = (body as { messages?: ChatMessage[] }).messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "הודעות חסרות" }, { status: 400 });
  }

  const sanitized = messages
    .filter((m) => m?.role === "user" || m?.role === "assistant")
    .slice(-20)
    .map((m) => ({
      role: m.role as "user" | "assistant",
      content: String(m.content ?? "").slice(0, 2000),
    }));

  try {
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL ?? "gpt-4o-mini",
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...sanitized],
      tools: [
        {
          type: "function",
          function: {
            name: "capture_lead",
            description:
              "שמור ליד כשהמשתמש נתן שם מלא ומספר טלפון ורוצה הדגמה / שיחזרו אליו",
            parameters: {
              type: "object",
              properties: {
                name: { type: "string", description: "שם מלא" },
                phone: { type: "string", description: "מספר טלפון" },
                intent: {
                  type: "string",
                  enum: ["demo", "contact", "plan"],
                  description: "demo=הדגמה, contact=יצירת קשר, plan=בחר חבילה",
                },
                plan: { type: "string", description: "שם חבילה אם רלוונטי" },
                note: { type: "string", description: "הערות מהשיחה" },
              },
              required: ["name", "phone", "intent"],
            },
          },
        },
      ],
      tool_choice: "auto",
      max_tokens: 500,
      temperature: 0.7,
    });

    const choice = completion.choices[0];
    const toolCall = choice?.message?.tool_calls?.[0];

    if (
      toolCall &&
      toolCall.type === "function" &&
      toolCall.function.name === "capture_lead"
    ) {
      let args: {
        name?: string;
        phone?: string;
        intent?: LeadIntent;
        plan?: string;
        note?: string;
      } = {};
      try {
        args = JSON.parse(toolCall.function.arguments);
      } catch {
        /* ignore */
      }

      const name = args.name?.trim();
      const phone = args.phone?.trim();

      if (name && phone) {
        await processLead({
          name,
          phone,
          intent: args.intent ?? "chat",
          plan: args.plan?.trim(),
          note: args.note?.trim(),
          source: "chat-widget",
          page: "chat",
          ip,
        });

        return NextResponse.json({
          reply: `תודה ${name}! קיבלנו את הפרטים שלך (${phone}). נציג יחזור אליך בהקדם.`,
          leadCaptured: true,
        });
      }
    }

    const reply =
      choice?.message?.content?.trim() ||
      "אני כאן לעזור! שאלו על הבוט, הקמפיינים או המרכזיה.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat API error:", err);
    return NextResponse.json(
      { error: "שגיאה זמנית. נסו שוב או התקשרו: " + site.phone },
      { status: 500 }
    );
  }
}
