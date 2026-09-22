import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { processLead, type LeadIntent } from "@/lib/leads";

const leadSchema = z.object({
  name: z.string().trim().min(2, "שם קצר מדי").max(100),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-() ]{7,20}$/, "מספר טלפון לא תקין"),
  email: z.string().trim().email("אימייל לא תקין").or(z.literal("")).optional(),
  message: z.string().trim().max(2000).optional(),
  website: z.string().optional(),
  intent: z.enum(["demo", "contact", "plan", "chat"]).optional(),
  plan: z.string().trim().max(50).optional(),
  planName: z.string().trim().max(100).optional(),
  planPrice: z.coerce.number().positive().optional(),
  page: z.string().trim().max(200).optional(),
  source: z.string().trim().max(50).optional(),
});

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
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

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "יותר מדי בקשות. נסו שוב בעוד מספר דקות." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "בקשה לא תקינה" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "נתונים לא תקינים";
    return NextResponse.json({ error: firstError }, { status: 400 });
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { website: _website, ...lead } = parsed.data;

  await processLead({
    ...lead,
    intent: (lead.intent ?? "contact") as LeadIntent,
    ip,
  });

  return NextResponse.json({ ok: true });
}
