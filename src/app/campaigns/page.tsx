import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BarChart3,
  Database,
  Flame,
  Gauge,
  ListChecks,
  PhoneOutgoing,
  Repeat,
  Target,
  Users,
} from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import { CampaignsVisual } from "@/components/home/ShowcaseVisuals";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "קמפיין שיחות אוטומטי — חיוג AI לאלפי לידים ביום",
  description:
    "קמפיין שיחות אוטומטי מבוסס AI: המערכת מחייגת לאלפי לידים במקביל, מנהלת שיחת סינון טבעית בעברית ומעבירה לנציג רק לידים חמים.",
  alternates: { canonical: "/campaigns" },
  openGraph: {
    title: "קמפיין שיחות אוטומטי | BotiPhone",
    description:
      "חיוג אוטומטי לאלפי לידים, טיוב לידים עם AI והעברה חמה לנציגים — מוקד מכירות שלא ישן.",
    url: absoluteUrl("/campaigns"),
  },
};

const useCases = [
  {
    icon: <Flame className="w-7 h-7 text-orange-400" />,
    title: "טיפול מיידי בלידים חדשים",
    description:
      "ליד שמשאיר פרטים בפייסבוק או בדף נחיתה מקבל שיחה תוך שניות — בשיא העניין שלו. מהירות התגובה מכפילה את אחוזי הסגירה.",
  },
  {
    icon: <Repeat className="w-7 h-7 text-brand-accent" />,
    title: "החייאת לידים ישנים",
    description:
      "אלפי לידים שנרדמו במערכת? הבוט עובר על כולם, מזהה מי עדיין רלוונטי ומחזיר למכירות רק את החמים.",
  },
  {
    icon: <Users className="w-7 h-7 text-brand-secondary" />,
    title: "שימור וחידוש לקוחות",
    description:
      "תזכורות חידוש, הצעות שדרוג ושיחות שימור ללקוחות קיימים — באופן אוטומטי ובקול אנושי ונעים.",
  },
  {
    icon: <ListChecks className="w-7 h-7 text-green-400" />,
    title: "סקרים ואישורי הגעה",
    description:
      "סקרי שביעות רצון, אישורי פגישות ותיאומי משלוחים — הבוט שואל, מתעד ומעדכן את המערכת בתשובות.",
  },
];

const engineFeatures = [
  {
    icon: <Gauge className="w-6 h-6 text-brand-primary" />,
    title: "ניהול ערוצים חכם",
    description:
      "המערכת מנהלת את קצב החיוג מול ספקי הטלפוניה, מנצלת כל ערוץ פנוי ושומרת על מגבלות הספק — בלי שיחות שנופלות.",
  },
  {
    icon: <Target className="w-6 h-6 text-brand-accent" />,
    title: "תסריט סינון מותאם",
    description:
      "שאלות מותאמות לקהל וליעד הקמפיין: זכאות, תקציב, עניין. כל תשובה נשמרת ומשפיעה על ניתוב השיחה.",
  },
  {
    icon: <Database className="w-6 h-6 text-brand-secondary" />,
    title: "עדכון CRM אוטומטי",
    description:
      "כל שיחה מתועדת: סטטוס, תמלול, הקלטה והנתונים שנאספו — נשמרים ישירות במערכת שלכם דרך ה-API.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-pink-500" />,
    title: "דוחות בזמן אמת",
    description:
      "כמה חויגו, כמה ענו, כמה התעניינו וכמה הועברו לנציג — הכל בדשבורד חי עם עץ סטטיסטיקות מפורט.",
  },
];

const faq = [
  {
    question: "מה זה קמפיין שיחות אוטומטי?",
    answer:
      "קמפיין שיחות אוטומטי הוא מערכת שמחייגת באופן יזום לרשימת אנשי קשר — לידים, לקוחות או נמענים — ומנהלת איתם שיחה קולית מבוססת AI. הבוט מציג את ההצעה, שואל שאלות סינון, מתעד תשובות ומעביר לנציג אנושי רק שיחות עם פוטנציאל אמיתי.",
  },
  {
    question: "כמה שיחות אפשר להוציא ביום?",
    answer:
      "אלפי שיחות ביום, בהתאם לחבילה ולכמות הערוצים. המערכת מנהלת את קצב החיוג אוטומטית כך שלכל שיחה שנענית יש בוט פנוי לטפל בה — בלי ניתוקים ובלי שיחות אבודות.",
  },
  {
    question: "האם זה חוקי להוציא שיחות אוטומטיות בישראל?",
    answer:
      "שיווק טלפוני מחויב לעמוד בהוראות החוק, כולל חוק הספאם וחוק הגנת הפרטיות. המערכת תומכת בניהול רשימות הסרה (Do Not Call), הגבלת שעות חיוג ותיעוד הסכמות — ואנחנו מלווים אתכם בהגדרת קמפיין שעומד בדרישות.",
  },
  {
    question: "מה קורה כשליד מתעניין?",
    answer:
      "השיחה מועברת מיד לנציג פנוי (העברה חמה) יחד עם כל המידע שנאסף, או שנקבעת פגישה ביומן. אתם מגדירים את הקריטריונים — הבוט מבצע.",
  },
  {
    question: "איך מודדים הצלחה של קמפיין?",
    answer:
      "לכל קמפיין יש עץ סטטיסטיקות מלא: כמות חיוגים, אחוז מענה, התפלגות תשובות בכל שלב בשיחה, לידים חמים והמרות. הדוחות מתעדכנים בזמן אמת וניתנים לייצוא.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "קמפיין שיחות אוטומטי",
  serviceType: "Automated Outbound Call Campaigns",
  provider: { "@type": "Organization", name: site.name, url: site.url },
  areaServed: "IL",
  description:
    "קמפיין שיחות יוצאות מבוסס AI: חיוג אוטומטי לאלפי לידים, שיחת סינון טבעית בעברית והעברה חמה של לידים חמים לנציגים.",
  url: absoluteUrl("/campaigns"),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "דף הבית", item: site.url },
    { "@type": "ListItem", position: 2, name: "קמפיין שיחות אוטומטי", item: absoluteUrl("/campaigns") },
  ],
};

export default function CampaignsPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        badge="קמפיינים יוצאים · Outbound AI"
        title={
          <>
            קמפיין שיחות אוטומטי: <br className="hidden md:block" />
            <span className="text-gradient">מוקד מכירות שלא ישן</span>
          </>
        }
        description="המערכת מחייגת לאלפי לידים במקביל, מנהלת שיחת סינון טבעית בעברית, מתעדת כל תשובה — ומעבירה לנציגי המכירות שלכם רק לקוחות שמוכנים לקנות."
        visual={<CampaignsVisual />}
      />

      {/* Numbers */}
      <section className="py-20 bg-brand-deep border-y border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "5,000+", label: "שיחות ביום" },
              { value: "< 60 שנ'", label: "מהליד לשיחה ראשונה" },
              { value: "x3", label: "יותר פגישות לנציג" },
              { value: "100%", label: "מהשיחות מתועדות" },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="glass-panel rounded-2xl p-6">
                  <div className="text-3xl md:text-4xl font-black text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">למה משתמשים בקמפיינים?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-brand-primary/30 transition-colors h-full flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{useCase.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{useCase.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engine */}
      <section className="py-24 bg-brand-deep border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                מנוע חיוג מקצועי מתחת למכסה
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                לא עוד חייגן פשוט — תשתית טלפוניה מבוזרת שמנהלת ספקים, ערוצים וקצב חיוג
                בצורה חכמה.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {engineFeatures.map((feature, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="flex gap-4 glass-panel p-6 rounded-2xl h-full">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="text-center mt-12">
              <Link
                href="/blog/automated-call-campaigns"
                className="inline-flex items-center gap-2 text-brand-accent hover:text-white transition-colors font-bold"
              >
                <PhoneOutgoing className="w-5 h-5" />
                למדריך המלא: קמפיין שיחות אוטומטי
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection items={faq} title="שאלות נפוצות על קמפיינים אוטומטיים" />
      <CtaSection
        title="יש לכם רשימת לידים שמחכה?"
        subtitle="תנו לבוט לעבור עליה. השאירו פרטים ונראה לכם כמה לידים חמים מסתתרים אצלכם במערכת."
      />
    </>
  );
}
