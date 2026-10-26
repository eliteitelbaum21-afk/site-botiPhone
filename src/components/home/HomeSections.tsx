import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Bot,
  CalendarClock,
  ContactRound,
  Headphones,
  ListTree,
  Megaphone,
  Mic,
  PhoneCall,
  Plug,
  ShieldBan,
  Smartphone,
  Sparkles,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import UseCaseCard from "@/components/UseCaseCard";
import { useCases } from "@/lib/examples";

/* ───────────── 1. The phone system basics ───────────── */

const basics = [
  { icon: <ListTree className="w-6 h-6" />, title: "תפריט קולי", text: "\"לשירות הקש 1\", פתיחים ושלוחות", href: "/ivr" },
  { icon: <Headphones className="w-6 h-6" />, title: "נציגים ותור", text: "חיוג לצוות, תור המתנה ומוזיקה", href: "/call-center" },
  { icon: <Mic className="w-6 h-6" />, title: "הקלטת שיחות", text: "הקלטה, תמלול וסיכום לכל שיחה", href: "/call-recording" },
  { icon: <CalendarClock className="w-6 h-6" />, title: "שעות פעילות", text: "הודעה אחרת בערב, בשבת ובחג", href: "/ivr" },
  { icon: <Smartphone className="w-6 h-6" />, title: "עונים מכל מקום", text: "מהמשרד, מהנייד או מהדפדפן", href: "/cloud-pbx" },
  { icon: <BarChart3 className="w-6 h-6" />, title: "דוחות שיחות", text: "מי ענה, מתי עמוס, ייצוא לאקסל", href: "/call-center" },
  { icon: <ShieldBan className="w-6 h-6" />, title: "חסימת מספרים", text: "רשימה שחורה ומסלול VIP", href: "/ivr" },
  { icon: <PhoneCall className="w-6 h-6" />, title: "אותו מספר", text: "ניוד המספר הקיים של העסק", href: "/pbx-migration" },
];

export function PbxBasics() {
  return (
    <section className="py-24 relative" id="pbx">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mb-14">
            <p className="text-brand-accent font-semibold mb-3">המרכזייה</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">כל מה שמרכזייה לעסק צריכה לעשות. בלי הפתעות.</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              לפני כל החידושים, מרכזייה צריכה לענות, לנתב ולא לאבד שיחות. זה הבסיס, והוא עובד מהיום הראשון.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {basics.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.04}>
              <Link
                href={b.href}
                className="group glass-panel rounded-2xl p-5 md:p-6 h-full flex flex-col hover:border-brand-primary/40 hover:-translate-y-0.5 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-primary/15 text-brand-accent flex items-center justify-center mb-4">{b.icon}</div>
                <h3 className="font-bold text-white text-lg mb-1">{b.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{b.text}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── 2. Two kinds of customers ───────────── */

export function TwoPaths() {
  return (
    <section className="py-24 bg-brand-deep border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">מתחילים מאיפה שנוח לכם</h2>
          <p className="text-center text-gray-400 text-lg mb-14">אותה מערכת, שתי דרכים לעבוד איתה. אפשר לעבור מאחת לשנייה בכל רגע.</p>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-3xl p-8 md:p-10 h-full bg-brand-card border border-white/10">
              <div className="text-sm font-semibold text-gray-300 mb-2">מרכזייה פשוטה</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">טלפון לעסק שפשוט עובד</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                לעסק שרוצה מרכזייה אמינה בלי להסתבך: מספר, פתיח, שלוחות ונציגים, הקלטות ודוחות. ממשק נקי, בלי מסכים מיותרים.
              </p>
              <ul className="space-y-2 text-gray-200 mb-8">
                {["תפריט קולי ושלוחות", "חיוג לנציגים ותור המתנה", "הקלטות ודוחות שיחות", "ליווי בהקמה וסרטוני הדרכה"].map((x) => (
                  <li key={x} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gray-300" />{x}</li>
                ))}
              </ul>
              <Link href="/cloud-pbx" className="inline-flex items-center gap-2 font-semibold text-white hover:text-brand-accent transition-colors">
                למרכזיה בענן <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative rounded-3xl p-8 md:p-10 h-full overflow-hidden border border-brand-primary/40 bg-gradient-to-br from-brand-primary/15 via-brand-card to-brand-card">
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-primary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="text-sm font-semibold text-brand-accent mb-2 flex items-center gap-2"><Sparkles className="w-4 h-4" /> מרכזייה חכמה</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">כל מה שבפשוטה, ועוד AI</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  לעסק שרוצה שהטלפון יעבוד בשבילו: בוט קולי שעונה ומסנן, סיכום AI לכל שיחה, קמפיינים יוצאים וחיבור למערכות שלכם.
                </p>
                <ul className="space-y-2 text-gray-200 mb-8">
                  {["בוט קולי שמבין עברית חופשית", "סיכום AI ובקרת איכות לנציגים", "קמפיין שיחות אוטומטי", "CRM ו-API פתוח"].map((x) => (
                    <li key={x} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-primary" />{x}</li>
                  ))}
                </ul>
                <Link href="/voice-bot" className="inline-flex items-center gap-2 font-semibold text-brand-accent hover:text-white transition-colors">
                  להכיר את הבוט הקולי <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────── 3. Moving from an old PBX ───────────── */

export function MigrationBanner() {
  const steps = ["ממפים מה יש לכם היום", "מקימים את המרכזייה בענן במקביל", "מניידים את המספר. זהו."];
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-l from-brand-card to-brand-deep p-8 md:p-12 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">עדיין עם מרכזייה ישנה במשרד?</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                מרכזייה של בזק, קופסה בארון או ספק אחר: עוברים לענן ושומרים על אותו מספר, בלי השבתה.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6 border-r-2 border-brand-primary pr-4">
                משרד התקשורת מקדם סגירה הדרגתית של רשת הנחושת עד 2030. זה הזמן לעבור.{" "}
                <Link href="/blog/copper-switch-off" className="text-brand-accent underline underline-offset-4 hover:text-white transition-colors">
                  מה זה אומר למרכזייה שלכם
                </Link>
              </p>
              <Link
                href="/pbx-migration"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-brand-navy font-bold hover:bg-brand-ivory transition-colors"
              >
                איך עובר המעבר <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
            <ol className="grid sm:grid-cols-3 gap-4">
              {steps.map((s, i) => (
                <li key={s} className="rounded-2xl bg-white/5 border border-white/10 p-5">
                  <div className="w-9 h-9 rounded-full bg-brand-primary text-brand-navy font-black flex items-center justify-center mb-3">{i + 1}</div>
                  <p className="text-gray-200 font-medium leading-snug">{s}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ───────────── 4. The innovation layer ───────────── */

const smart = [
  {
    icon: <Bot className="w-7 h-7" />,
    title: "בוט קולי שעונה לבד",
    text: "במקום \"הקש 1\", המתקשר אומר מה הוא צריך. הבוט מבין עברית, עונה על שאלות, קובע פגישות ומעביר לנציג כשצריך.",
    href: "/voice-bot",
  },
  {
    icon: <Sparkles className="w-7 h-7" />,
    title: "AI שמסכם כל שיחה",
    text: "תמלול, סיכום ונקודות לשיפור לנציג, אוטומטית אחרי כל שיחה. בקרת איכות בלי להאזין להקלטות.",
    href: "/call-recording",
  },
  {
    icon: <Megaphone className="w-7 h-7" />,
    title: "קמפיין שיחות יוצא",
    text: "המערכת מחייגת לרשימה, הבוט מסנן, ורק מי שמעוניין עובר לנציג. מתאים ללידים, סקרים ותזכורות.",
    href: "/campaigns",
  },
  {
    icon: <ContactRound className="w-7 h-7" />,
    title: "CRM מובנה",
    text: "כרטיס הלקוח קופץ לנציג כשהטלפון מצלצל, עם כל השיחות הקודמות שלו.",
    href: "/crm",
  },
  {
    icon: <Plug className="w-7 h-7" />,
    title: "חיבור למערכות שלכם",
    text: "המרכזייה שולפת ומעדכנת נתונים בשרת שלכם תוך כדי השיחה: סטטוס הזמנה, יתרה, תור.",
    href: "/api-integrations",
  },
];

export function InnovationSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-deep via-[#0c2244] to-brand-dark pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <p className="text-brand-accent font-semibold mb-3 flex items-center justify-center gap-2"><Sparkles className="w-4 h-4" /> החדשנות כבר בפנים</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">השכבה החכמה</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              לא צריך להחליף מערכת כדי להתקדם. מפעילים את היכולות החכמות על אותה מרכזייה, מתי שמתאים לכם.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-5">
          {smart.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
              <Link
                href={s.href}
                className="group block h-full rounded-2xl p-7 border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-brand-primary/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-accent to-brand-primary text-brand-navy flex items-center justify-center mb-5">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{s.text}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-accent">
                  למידע נוסף <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── 5. Examples preview ───────────── */

export function ExamplesPreview() {
  const picks = useCases.filter((u) => ["clinic", "office", "service"].includes(u.id));
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <p className="text-brand-accent font-semibold mb-2">דוגמאות</p>
              <h2 className="text-3xl md:text-4xl font-bold">ככה זה נשמע אצל עסקים כמו שלכם</h2>
            </div>
            <Link href="/examples" className="inline-flex items-center gap-2 text-brand-accent hover:text-white transition-colors font-medium">
              לכל הדוגמאות <ArrowLeft className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {picks.map((u) => (
            <Reveal key={u.id}>
              <UseCaseCard useCase={u} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
