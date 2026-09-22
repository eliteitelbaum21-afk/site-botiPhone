import { ArrowLeft, Bot, Zap } from "lucide-react";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";

const campaigns = [
  { name: "לידים פייסבוק", progress: 85, color: "bg-blue-500" },
  { name: "לקוחות עבר", progress: 45, color: "bg-purple-500" },
  { name: "תיאום פגישות", progress: 92, color: "bg-green-500" },
  { name: "סקר שביעות רצון", progress: 30, color: "bg-yellow-500" },
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
                הדור הבא של שירות הלקוחות והמכירות
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
              ניהול מלא של התקשורת הטלפונית בארגון מממשק אחד פשוט. קבלו שליטה עצמאית
              בשלוחות, תפריטי ניתוב ותורי המתנה, ללא צורך בהתערבות טכנית, ושלבו יכולות
              CRM ו-AI בקצב שלכם.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CtaButton variant="primary" className="w-full sm:w-auto" intent="demo" source="hero">
                התחילו עכשיו
                <ArrowLeft className="w-5 h-5" />
              </CtaButton>
              <CtaButton variant="secondary" className="w-full sm:w-auto" intent="demo" source="hero-demo">
                לתיאום הדגמה
              </CtaButton>
            </div>
          </Reveal>
        </div>

        {/* Dashboard mockup */}
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
                  <div className="h-40 rounded-xl bg-white/5 border border-white/5 flex items-end p-4 gap-2 relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-sm text-gray-400">
                      שיחות יוצאות (קמפיינים)
                    </div>
                    {[40, 70, 45, 90, 65, 85, 100, 55].map((h, i) => (
                      <div
                        key={i}
                        className="w-full bg-brand-primary/50 rounded-t-sm hover:bg-brand-primary transition-colors"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-24 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col justify-center">
                      <div className="text-gray-400 text-sm mb-1 flex items-center gap-2">
                        <Bot className="w-4 h-4 text-brand-accent" /> שיחות בוט פעילות
                      </div>
                      <div className="text-3xl font-bold text-white">1,248</div>
                    </div>
                    <div className="h-24 rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col justify-center">
                      <div className="text-gray-400 text-sm mb-1 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400" /> לידים חמים שאותרו
                      </div>
                      <div className="text-3xl font-bold text-brand-accent">342</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-full rounded-xl bg-white/5 border border-white/5 p-4">
                    <div className="text-gray-400 text-sm mb-4">סטטוס קמפיינים</div>
                    {campaigns.map((camp, i) => (
                      <div key={i} className="mb-4">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-300">{camp.name}</span>
                          <span className="text-gray-500">{camp.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div
                            className={`h-full ${camp.color} rounded-full`}
                            style={{ width: `${camp.progress}%` }}
                          />
                        </div>
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
