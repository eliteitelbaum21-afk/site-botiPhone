import type { Metadata } from "next";
import { Check, Sparkles } from "lucide-react";
import CtaButton from "@/components/CtaButton";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "מחירון — קמפיין שיחות יוצאות עם בוט AI",
  description:
    "מחירון הקמפיינים היוצאים של BotiPhone: בוט AI שמחייג ללידים שלכם, מחיר קבוע החל מ-1,000 ₪. הקמה חד-פעמית 2,000 ₪. בחרו את החבילה שמתאימה לעסק שלכם.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "מחירון קמפיינים יוצאים | BotiPhone",
    description:
      "חבילות קמפיין שיחות אוטומטי עם בוט AI — מחיר קבוע החל מ-1,000 ₪.",
    url: absoluteUrl("/pricing"),
  },
};

interface Plan {
  name: string;
  nameHe: string;
  price: number;
  minutes: string;
  contacts: string;
  highlight?: boolean;
  description: string;
}

const plans: Plan[] = [
  {
    name: "Launch",
    nameHe: "חבילת התחלה",
    price: 1000,
    minutes: "1,000 דקות",
    contacts: "עד 3,000 מספרים",
    description: "לעסקים שרוצים להריץ קמפיין יוצא ראשון עם בוט AI.",
  },
  {
    name: "Growth",
    nameHe: "חבילת צמיחה",
    price: 2300,
    minutes: "3,000 דקות",
    contacts: "עד 10,000 מספרים",
    highlight: true,
    description: "לעסקים צומחים שמריצים קמפיינים שוטפים על מאגרי לידים.",
  },
  {
    name: "Business Pro",
    nameHe: "חבילה עסקית",
    price: 3300,
    minutes: "5,000 דקות",
    contacts: "עד 18,000 מספרים",
    description: "למוקדי מכירות פעילים עם נפח חיוג גבוה וצוות נציגים.",
  },
  {
    name: "Enterprise",
    nameHe: "חבילה ארגונית",
    price: 5500,
    minutes: "10,000 דקות",
    contacts: "עד 40,000 מספרים",
    description: "לארגונים גדולים שמריצים קמפיינים בקנה מידה רחב.",
  },
];

const allPlansInclude = [
  "בוט AI שמנהל את שיחות הקמפיין בעברית טבעית",
  "חיוג אוטומטי המוני וניהול ערוצים חכם",
  "תסריט סינון מותאם + הקלטות מקצועיות",
  "העברה חמה של לידים חמים לנציג",
  "דוחות ועץ סטטיסטיקות בזמן אמת",
  "עדכון CRM דרך API פתוח",
];

const faq = [
  {
    question: "האם המחירון כולל גם מענה נכנס ומרכזיה בענן?",
    answer:
      "לא — המחירון בעמוד זה מתייחס לשירות הקמפיינים היוצאים עם בוט AI. לבוט מענה נכנס ולמרכזיה בענן אנחנו בונים הצעת מחיר מותאמת לפי צורכי העסק — השאירו פרטים ונחזור אליכם עם הצעה.",
  },
  {
    question: "מה כוללת ההקמה החד-פעמית?",
    answer:
      "ההקמה (2,000 ₪) כוללת בניית תסריט הקמפיין המלא יחד אתכם, הקלטת ההודעות, הגדרת שאלות הסינון והניתובים, חיבור המספרים וליווי עד שהקמפיין באוויר ועובד.",
  },
  {
    question: "מה קורה אם אני חורג מחבילת הדקות?",
    answer:
      "ניתן לרכוש חבילת דקות נוספת בכל שלב. המערכת מתריעה מראש כשמתקרבים לתקרה, כך שלא תהיו מופתעים.",
  },
  {
    question: "האם המחיר חד-פעמי לגמרי?",
    answer:
      "כן — כל חבילה היא תשלום קבוע וחד-פעמי עבור נפח הדקות שבחרתם. אין מנוי חודשי. כשמסיימים את הדקות, רוכשים חבילה נוספת לפי צורך.",
  },
  {
    question: "אפשר לשדרג לחבילה גדולה יותר?",
    answer:
      "כן, בכל שלב אפשר לעבור לחבילה גדולה יותר. ניתן גם לרכוש כמה חבילות במקביל אם מריצים מספר קמפיינים.",
  },
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "BotiPhone — קמפיין שיחות יוצאות עם בוט AI",
  description:
    "קמפיין שיחות אוטומטי מבוסס AI: חיוג המוני ללידים, שיחת סינון טבעית בעברית והעברה חמה לנציגים.",
  brand: { "@type": "Brand", name: site.name },
  offers: plans.map((plan) => ({
    "@type": "Offer",
    name: `${plan.name} (${plan.nameHe})`,
    price: plan.price,
    priceCurrency: "ILS",
    url: absoluteUrl("/pricing"),
    availability: "https://schema.org/InStock",
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "דף הבית", item: site.url },
    { "@type": "ListItem", position: 2, name: "מחירון", item: absoluteUrl("/pricing") },
  ],
};

export default function PricingPage() {
  return (
    <>
      <JsonLd data={productJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <section className="relative pt-32 pb-16 lg:pt-44 overflow-hidden bg-grid">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-primary/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Reveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
              מחירון <span className="text-gradient">קמפיינים יוצאים עם בוט AI</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              החבילות שלמטה הן מחיר קבוע וחד-פעמי — בוט AI שמחייג ללידים שלכם, מסנן
              ומעביר לנציג. אין מנוי חודשי: קונים נפח דקות, משתמשים, וכשגומרים קונים
              עוד. לבוט מענה נכנס ולמרכזיה בענן — הצעת מחיר מותאמת.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              הקמה חד-פעמית: 2,000 ₪ — כולל בניית תסריט הקמפיין, הקלטות וליווי מלא
            </p>
          </Reveal>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, idx) => (
              <Reveal key={plan.name} delay={idx * 0.08}>
                <div
                  className={`relative rounded-3xl p-8 h-full flex flex-col border transition-transform hover:-translate-y-2 duration-300 ${
                    plan.highlight
                      ? "bg-gradient-to-b from-brand-primary/20 to-brand-card border-brand-primary/50 shadow-xl shadow-brand-primary/20"
                      : "glass-panel border-white/5"
                  }`}
                >
                  {plan.highlight && (
                    <span className="absolute -top-3.5 right-1/2 translate-x-1/2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                      הכי פופולרי
                    </span>
                  )}
                  <div className="mb-6">
                    <h2 className="text-2xl font-black text-white mb-1">{plan.name}</h2>
                    <p className="text-sm text-gray-500">{plan.nameHe}</p>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white">
                        {plan.price.toLocaleString()}
                      </span>
                      <span className="text-xl text-gray-400">₪</span>
                    </div>
                    <span className="text-xs text-brand-accent font-medium">מחיר קבוע · לא חודשי</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2 text-gray-300">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {plan.minutes}
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {plan.contacts}
                    </li>
                  </ul>
                  <p className="text-sm text-gray-500 leading-relaxed mb-8 flex-1">
                    {plan.description}
                  </p>
                  <CtaButton
                    variant={plan.highlight ? "primary" : "secondary"}
                    className="w-full !text-base !px-6 !py-3"
                    intent="plan"
                    plan={plan.name}
                    planName={plan.nameHe}
                    planPrice={plan.price}
                    source="pricing"
                  >
                    בחרו בחבילה
                  </CtaButton>
                </div>
              </Reveal>
            ))}
          </div>

          {/* All plans include */}
          <Reveal delay={0.2}>
            <div className="mt-16 glass-panel rounded-3xl p-8 md:p-10 border border-white/10">
              <h2 className="text-2xl font-bold mb-6 text-center">כל המסלולים כוללים</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {allPlansInclude.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection items={faq} title="שאלות נפוצות על המחירון" />
      <CtaSection
        title="לא בטוחים איזה מסלול מתאים?"
        subtitle="השאירו פרטים ונבנה יחד אתכם חבילה מותאמת לנפח החיוג של העסק — וגם הצעה לבוט מענה נכנס ומרכזיה בענן."
      />
    </>
  );
}
