import type { Metadata } from "next";
import { Database, Plug, Workflow } from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: `אוטומציה וחיבור למערכות | ${site.name}`,
  description:
    "הפכו את המרכזייה לממשק קולי. המערכת שולפת נתונים, בודקת סטטוס הזמנות ומעדכנת פרטים במערכות החיצוניות שלכם תוך כדי השיחה.",
  alternates: { canonical: "/api-integrations" },
  openGraph: {
    title: `אוטומציה וחיבור למערכות | ${site.name}`,
    description:
      "API ואינטגרציות שהופכים את המרכזייה לממשק קולי מול מערכות העסק.",
    url: absoluteUrl("/api-integrations"),
  },
};

const highlights = [
  {
    icon: <Plug className="w-7 h-7 text-brand-accent" />,
    title: "חיבור למערכות קיימות",
    description:
      "התחברו ל-CRM, ERP, חנות אונליין ומערכות פנימיות דרך API פתוח ואינטגרציות מוכנות.",
  },
  {
    icon: <Database className="w-7 h-7 text-brand-primary" />,
    title: "שליפת נתונים תוך כדי שיחה",
    description:
      "בדיקת סטטוס הזמנות, יתרות ומלאי בזמן אמת — בלי להעביר את הלקוח בין מערכות.",
  },
  {
    icon: <Workflow className="w-7 h-7 text-brand-secondary" />,
    title: "עדכון אוטומטי",
    description:
      "פרטים שנאספים בשיחה מתעדכנים ישירות במערכות החיצוניות שלכם.",
  },
];

export default function ApiIntegrationsPage() {
  return (
    <>
      <ServiceHero
        badge="API ואינטגרציות"
        title={
          <>
            אוטומציה וחיבור{" "}
            <span className="text-gradient">למערכות העסק</span>
          </>
        }
        description="הפכו את המרכזייה לממשק קולי. המערכת שולפת נתונים, בודקת סטטוס הזמנות ומעדכנת פרטים במערכות החיצוניות שלכם תוך כדי השיחה."
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
