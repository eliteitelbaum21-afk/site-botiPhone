import type { Metadata } from "next";
import { ContactRound, History, Target } from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `CRM ומנוע נתונים משותף | ${site.name}`,
  description:
    "כרטיס לקוח שקופץ בזמן אמת עם תחילת השיחה. תיעוד אוטומטי של היסטוריית התקשורת ומעקב מדויק אחר לידים ומקורות פרסום.",
  alternates: { canonical: "/crm" },
  openGraph: {
    title: `CRM ומנוע נתונים משותף | ${site.name}`,
    description:
      "כרטיס לקוח שקופץ בזמן אמת עם תחילת השיחה, תיעוד אוטומטי ומעקב לידים.",
    url: absoluteUrl("/crm"),
  },
};

const highlights = [
  {
    icon: <ContactRound className="w-7 h-7 text-brand-secondary" />,
    title: "CRM Pop-up בזמן אמת",
    description:
      "עם תחילת השיחה מופיע כרטיס הלקוח לנציג — שם, היסטוריה והקשר מלא.",
  },
  {
    icon: <History className="w-7 h-7 text-brand-primary" />,
    title: "תיעוד אוטומטי",
    description:
      "כל שיחה, הודעה ופעולה נשמרות אוטומטית בהיסטוריית התקשורת של הלקוח.",
  },
  {
    icon: <Target className="w-7 h-7 text-brand-accent" />,
    title: "מעקב לידים ומקורות",
    description:
      "עקבו אחרי לידים ומקורות פרסום בדיוק — מהקליק הראשון ועד הסגירה.",
  },
];

export default function CrmPage() {
  return (
    <>
      <ServiceHero
        badge="CRM מובנה"
        title={
          <>
            CRM ומנוע נתונים{" "}
            <span className="text-gradient">משותף</span>
          </>
        }
        description="כרטיס לקוח שקופץ בזמן אמת עם תחילת השיחה. תיעוד אוטומטי של היסטוריית התקשורת ומעקב מדויק אחר לידים ומקורות פרסום."
      />

      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <div className="glass-panel p-8 rounded-2xl border border-white/5 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-white">{item.title}</h2>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
