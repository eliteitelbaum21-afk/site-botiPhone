import { ArrowLeft, Bot, Headphones, Mail } from "lucide-react";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";

const agents = [
  { name: "שלוחה 101 — מכירות", status: "פנוי", color: "bg-green-400" },
  { name: "שלוחה 102 — שירות", status: "בשיחה", color: "bg-yellow-400" },
  { name: "שלוחה AI — סינון", status: "פעיל", color: "bg-brand-accent" },
  { name: "תור כללי", status: "3 ממתינים", color: "bg-blue-400" },
];

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-44 lg:pb-28 overflow-hidden bg-grid">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-gray-300">
                מרכזייה עסקית עם שכבת AI מובנית
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight">
              תקשורת חכמה לעסק:{" "}
              <span className="text-gradient">המרכזייה היציבה שגדלה יחד איתכם</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed">
              כל התקשורת העסקית במקום אחד: מרכזייה, נציגים, לקוחות, קמפיינים וסוכני AI.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex justify-center">
              <CtaButton variant="primary" className="w-full sm:w-auto" intent="contact" source="hero">
                דברו עם מומחה
                <ArrowLeft className="w-5 h-5" />
              </CtaButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.35} y={48}>
          <div className="mt-20 relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent z-10 pointer-events-none" />
            <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-brand-primary/20 bg-brand-card relative">
              <div className="h-8 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 opacity-90">
                <div className="col-span-1 md:col-span-2 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-28 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col justify-center">
                      <div className="text-gray-400 text-sm mb-1 flex items-center gap-2">
                        <Headphones className="w-4 h-4 text-brand-primary" /> נציגים פעילים
                      </div>
                      <div className="text-3xl font-bold text-white">12 / 18</div>
                    </div>
                    <div className="h-28 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col justify-center">
                      <div className="text-gray-400 text-sm mb-1 flex items-center gap-2">
                        <Mail className="w-4 h-4 text-brand-accent" /> סיכומים שנשלחו היום
                      </div>
                      <div className="text-3xl font-bold text-brand-accent">186</div>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/5 border border-white/5 p-4">
                    <div className="text-gray-400 text-sm mb-3 flex items-center gap-2">
                      <Bot className="w-4 h-4 text-brand-secondary" /> ניתוח AI — שיחה אחרונה
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      הלקוח חזר בנושא החשבונית מאתמול. זוהתה אי-שביעות רצון קלה —
                      הומלץ לנציג לפתוח בתיקון ולבדוק זיכוי. סיכום נשלח למייל המנהל.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-full rounded-xl bg-white/5 border border-white/5 p-4">
                    <div className="text-gray-400 text-sm mb-4">סטטוס שלוחות ונציגים</div>
                    {agents.map((agent, i) => (
                      <div key={i} className="mb-4 last:mb-0 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${agent.color}`} />
                          <span className="text-xs text-gray-300 truncate">{agent.name}</span>
                        </div>
                        <span className="text-xs text-gray-500 flex-shrink-0">{agent.status}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
