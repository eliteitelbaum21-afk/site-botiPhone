import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Check,
  Cloud,
  Headphones,
  Mic,
  Network,
  PhoneForwarded,
  Plug,
  ShieldCheck,
  Smartphone,
  X,
} from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import { PbxVisual } from "@/components/home/ShowcaseVisuals";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "מרכזיה בענן לעסק — מרכזייה וירטואלית חכמה עם AI",
  description:
    "מרכזיה בענן מתקדמת לעסק: שלוחות, תורים, הקלטות, IVR חכם ושלוחות AI — בלי חומרה ובלי טכנאים. מרכזייה וירטואלית שעולה לאוויר תוך ימים. הדגמה חינם.",
  alternates: { canonical: "/cloud-pbx" },
  openGraph: {
    title: "מרכזיה בענן לעסק | BotiPhone",
    description:
      "מרכזייה וירטואלית מלאה בענן: שלוחות, תורים, הקלטות, דוחות ושלוחות AI חכמות.",
    url: absoluteUrl("/cloud-pbx"),
  },
};

const features = [
  {
    icon: <Network className="w-7 h-7 text-brand-primary" />,
    title: "שלוחות ועצי ניתוב",
    description:
      "עצי שלוחות גמישים ללא הגבלה: תפריטים, ניתובים לפי שעות פעילות, שלוחות אישיות וקבוצות צלצול.",
  },
  {
    icon: <Headphones className="w-7 h-7 text-brand-secondary" />,
    title: "ניהול מוקד ותורים",
    description:
      "תורי המתנה חכמים, ניהול נציגים, מוזיקת המתנה והודעות מותאמות — כל מה שמוקד מקצועי צריך.",
  },
  {
    icon: <Mic className="w-7 h-7 text-brand-accent" />,
    title: "הקלטות ותמלול",
    description:
      "כל שיחה מוקלטת ומתומללת אוטומטית. חיפוש בטקסט השיחה, האזנה מהדפדפן ושמירה מאובטחת בענן.",
  },
  {
    icon: <BarChart3 className="w-7 h-7 text-pink-500" />,
    title: "דוחות וסטטיסטיקות",
    description:
      "דשבורד חי: כמות שיחות, זמני המתנה, ביצועי נציגים והתפלגויות לפי שעות — קבלת החלטות מבוססת נתונים.",
  },
  {
    icon: <Plug className="w-7 h-7 text-green-400" />,
    title: "API פתוח ו-CRM Pop-up",
    description:
      "פרטי הלקוח קופצים לנציג עם תחילת השיחה. משיכת נתונים ועדכון מערכות חיצוניות בכל שלב בשיחה.",
  },
  {
    icon: <Smartphone className="w-7 h-7 text-yellow-400" />,
    title: "עבודה מכל מקום",
    description:
      "שלוחה בנייד, במחשב או בטלפון IP — הנציגים עובדים מהמשרד או מהבית עם אותו מספר עסקי.",
  },
];

const comparison = [
  { feature: "התקנה וחומרה", old: "טכנאי, ארון תקשורת וכבלים", cloud: "עולה לאוויר תוך ימים, בלי חומרה" },
  { feature: "עלות", old: "השקעה ראשונית גבוהה + תחזוקה", cloud: "מנוי חודשי קבוע וצפוי" },
  { feature: "גמישות", old: "כל שינוי דורש טכנאי", cloud: "שינויים בלחיצת כפתור מהדפדפן" },
  { feature: "עבודה מרחוק", old: "מוגבלת למשרד", cloud: "מכל מקום — נייד, מחשב או טלפון IP" },
  { feature: "בינה מלאכותית", old: "לא קיימת", cloud: "שלוחות AI, תמלול ובקרת איכות" },
  { feature: "התרחבות", old: "מוגבלת בקווים פיזיים", cloud: "מתרחבת לפי הצורך, ללא הגבלה" },
];

const faq = [
  {
    question: "מה זה מרכזיה בענן?",
    answer:
      "מרכזיה בענן (מרכזייה וירטואלית) היא מערכת טלפוניה עסקית מלאה שפועלת על שרתים בענן במקום על חומרה במשרד. כל היכולות של מרכזייה פיזית — שלוחות, ניתובים, תורים והקלטות — זמינות מכל מקום דרך האינטרנט, בתוספת יכולות AI מתקדמות.",
  },
  {
    question: "במה מרכזיה בענן של BotiPhone שונה ממרכזיות אחרות?",
    answer:
      "מעבר ליכולות המרכזייה הסטנדרטיות, BotiPhone משלבת בינה מלאכותית בכל שכבה: שלוחות AI שמבינות דיבור חופשי במקום תפריטי הקשה, תמלול וניתוח אוטומטי של כל שיחה, בקרת איכות לנציגים וקמפיינים יוצאים אוטומטיים — הכל במערכת אחת.",
  },
  {
    question: "האם אפשר לשמור על המספרים הקיימים של העסק?",
    answer:
      "כן. מבצעים ניוד של המספרים הקיימים שלכם (כולל מספרי בזק) אל המרכזייה בענן, כך שהלקוחות ממשיכים להתקשר לאותו מספר — בלי שינוי ובלי השבתה.",
  },
  {
    question: "מה צריך כדי להתחיל לעבוד עם מרכזייה וירטואלית?",
    answer:
      "רק חיבור אינטרנט. הנציגים יכולים לענות מאפליקציה בנייד, מהמחשב או מטלפון IP שולחני. אין צורך בהתקנות, בארון תקשורת או בטכנאים.",
  },
  {
    question: "האם השיחות מוקלטות ומאובטחות?",
    answer:
      "כל שיחה מוקלטת ומתומללת אוטומטית ונשמרת בענן מאובטח. הגישה להקלטות מנוהלת בהרשאות, וניתן לחפש בתוכן השיחות לפי מילות מפתח.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "מרכזיה בענן לעסק",
  serviceType: "Cloud PBX / מרכזייה וירטואלית",
  provider: { "@type": "Organization", name: site.name, url: site.url },
  areaServed: "IL",
  description:
    "מרכזיה בענן מלאה לעסק: שלוחות, תורים, הקלטות, דוחות, API פתוח ושלוחות AI חכמות — ללא חומרה וללא טכנאים.",
  url: absoluteUrl("/cloud-pbx"),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "דף הבית", item: site.url },
    { "@type": "ListItem", position: 2, name: "מרכזיה בענן", item: absoluteUrl("/cloud-pbx") },
  ],
};

export default function CloudPbxPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        badge="מרכזיה בענן · Cloud PBX"
        title={
          <>
            מרכזיה בענן לעסק: <br className="hidden md:block" />
            <span className="text-gradient">כל התקשורת במקום אחד</span>
          </>
        }
        description="מרכזייה וירטואלית מתקדמת שמשלבת את כל מה שעסק צריך: שלוחות ותורים, הקלטות ותמלול, דוחות בזמן אמת, API פתוח — ושכבת AI שאף מרכזייה ישנה לא מציעה."
        visual={<PbxVisual />}
      />

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                כל היכולות של מרכזייה לעסק — ועוד
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <Reveal key={idx} delay={idx * 0.06}>
                <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-brand-primary/30 transition-colors h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-5">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-24 bg-brand-deep border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                מרכזייה פיזית ישנה מול מרכזיה בענן
              </h2>
              <p className="text-gray-400 text-lg">
                למה אלפי עסקים בישראל עוברים למרכזייה וירטואלית?
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-right bg-brand-card">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-4 md:p-5 text-gray-400 font-medium text-sm md:text-base"></th>
                    <th className="p-4 md:p-5 text-gray-400 font-bold text-sm md:text-base">
                      מרכזייה פיזית
                    </th>
                    <th className="p-4 md:p-5 font-bold text-sm md:text-base">
                      <span className="text-gradient">מרכזיה בענן BotiPhone</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, idx) => (
                    <tr key={idx} className="border-b border-white/5 last:border-0">
                      <td className="p-4 md:p-5 font-bold text-white text-sm md:text-base">
                        {row.feature}
                      </td>
                      <td className="p-4 md:p-5 text-gray-500 text-sm md:text-base">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                          {row.old}
                        </div>
                      </td>
                      <td className="p-4 md:p-5 text-gray-300 text-sm md:text-base">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                          {row.cloud}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AI layer */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="flex items-start gap-4">
                <Cloud className="w-10 h-10 text-brand-accent flex-shrink-0" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    המרכזייה היחידה עם שכבת AI מלאה
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    במקום תפריט &quot;הקש 1&quot; — שלוחת AI שמבינה את הלקוח ומנתבת אותו
                    נכון. במקום האזנה ידנית לשיחות — בקרת איכות אוטומטית שמדרגת כל שיחה.
                    ובאותה מערכת:{" "}
                    <Link href="/voice-bot" className="text-brand-accent hover:underline">
                      בוט טלפוני חכם
                    </Link>{" "}
                    למענה נכנס ו
                    <Link href="/campaigns" className="text-brand-accent hover:underline">
                      קמפיין שיחות אוטומטי
                    </Link>{" "}
                    ללידים יוצאים.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { icon: <PhoneForwarded className="w-5 h-5" />, label: "שלוחות AI במקום תפריטים" },
                      { icon: <ShieldCheck className="w-5 h-5" />, label: "בקרת איכות אוטומטית" },
                      { icon: <BarChart3 className="w-5 h-5" />, label: "תובנות מכל שיחה" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3 text-sm text-gray-300"
                      >
                        <span className="text-brand-accent">{item.icon}</span>
                        {item.label}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/blog/cloud-pbx-guide"
                    className="inline-flex items-center gap-2 text-brand-accent hover:text-white transition-colors font-medium mt-8"
                  >
                    למדריך המלא: מרכזיה בענן לעסק <ArrowLeft className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection items={faq} title="שאלות נפוצות על מרכזיה בענן" />
      <CtaSection
        title="מוכנים לשדרג את המרכזייה?"
        subtitle="ניוד מספרים מלא, הקמה תוך ימים וליווי אישי. השאירו פרטים ונבנה לכם הצעה מותאמת."
      />
    </>
  );
}
