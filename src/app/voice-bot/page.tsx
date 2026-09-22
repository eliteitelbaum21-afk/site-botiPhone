import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  BrainCircuit,
  CalendarCheck,
  Clock,
  Filter,
  Headphones,
  Languages,
  MessageSquareText,
  Network,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import ServiceHero from "@/components/ServiceHero";
import { VoiceBotVisual } from "@/components/home/ShowcaseVisuals";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "בוט טלפוני חכם לעסק — מענה קולי AI שעונה 24/6",
  description:
    "בוט טלפוני מבוסס בינה מלאכותית שעונה לכל שיחה נכנסת, מבין דיבור חופשי בעברית, קובע פגישות ומנתב שיחות. הסוף לתפריטי הקש 1.",
  alternates: { canonical: "/voice-bot" },
  openGraph: {
    title: "בוט טלפוני חכם לעסק | BotiPhone",
    description:
      "מענה קולי AI שעונה לכל שיחה 24/6, מבין עברית חופשית, קובע פגישות ומסנן פניות.",
    url: absoluteUrl("/voice-bot"),
  },
};

const capabilities = [
  {
    icon: <Languages className="w-7 h-7 text-brand-accent" />,
    title: "הבנת עברית חופשית",
    description:
      "הלקוח מדבר בשפה שלו — הבוט מבין. זיהוי דיבור מתקדם + מודל AI שמחלץ את הכוונה מכל משפט, גם כשהוא מנוסח אחרת מהצפוי.",
  },
  {
    icon: <CalendarCheck className="w-7 h-7 text-brand-primary" />,
    title: "קביעת פגישות אוטומטית",
    description:
      "הבוט בודק זמינות ביומן, מציע מועדים פנויים, קובע את הפגישה ושולח אישור — בלי מעורבות של נציג.",
  },
  {
    icon: <Filter className="w-7 h-7 text-brand-secondary" />,
    title: "סינון ואיסוף פרטים",
    description:
      "שאלות סינון חכמות שמזהות במה מדובר, אוספות את הפרטים הרלוונטיים ופותחות קריאת שירות או ליד במערכת.",
  },
  {
    icon: <Network className="w-7 h-7 text-pink-500" />,
    title: "ניתוב חכם לנציג",
    description:
      "שיחות מורכבות מנותבות לנציג הנכון עם כל ההקשר: מי הלקוח, מה הוא ביקש ומה הבוט כבר בירר.",
  },
  {
    icon: <Clock className="w-7 h-7 text-yellow-400" />,
    title: "זמינות 24/6",
    description:
      "גם בלילה וגם הרבה אחרי שעות הפעילות — אף שיחה לא הולכת לאיבוד. הבוט עונה מיד, בלי תור ובלי המתנה.",
  },
  {
    icon: <Workflow className="w-7 h-7 text-green-400" />,
    title: "עצי שיחה גמישים",
    description:
      "כל תרחיש אפשרי: מסלולי שיחה מרובי שלבים, תנאים לפי מילות מפתח, חילוץ נתונים עם AI והפעלת פעולות אוטומטיות.",
  },
];

const flowSteps = [
  {
    title: "הלקוח מתקשר",
    description: "השיחה נענית מיד — אין תפריט, אין המתנה.",
  },
  {
    title: "הבוט מנהל שיחה",
    description: "שואל, מקשיב, מבין דיבור חופשי ומחלץ את הכוונה עם AI.",
  },
  {
    title: "מתבצעת פעולה",
    description: "קביעת פגישה, פתיחת קריאה, עדכון CRM או מענה לשאלה.",
  },
  {
    title: "העברה לנציג בעת הצורך",
    description: "שיחות מורכבות עוברות לנציג עם כל ההקשר והפרטים.",
  },
];

const faq = [
  {
    question: "האם הבוט באמת מבין עברית חופשית?",
    answer:
      "כן. הבוט משלב זיהוי דיבור (STT) עם מודל בינה מלאכותית שמחלץ את כוונת הלקוח מכל ניסוח. קודם נבדקות מילות מפתח (מהיר וזול), ואם אין התאמה — ה-AI מנתח את המשפט ומחליט לאן להמשיך. כך מתקבלת שיחה טבעית באמת.",
  },
  {
    question: "מה קורה כשהבוט לא יודע לענות?",
    answer:
      "הבוט מזהה מצבים שבהם נדרש נציג אנושי ומעביר את השיחה בצורה חמה — כולל כל המידע שנאסף עד כה. הנציג מקבל את ההקשר המלא ולא מתחיל את השיחה מאפס.",
  },
  {
    question: "האם אפשר להתאים את קול הבוט ואת התסריט לעסק שלי?",
    answer:
      "בהחלט. בונים יחד אתכם את עץ השיחה המלא: פתיחה, שאלות, ניתובים וסיומים. ההקלטות מותאמות למיתוג של העסק, וניתן לעדכן את התסריט בכל שלב.",
  },
  {
    question: "כמה שיחות הבוט יכול לקבל במקביל?",
    answer:
      "המערכת רצה בענן ומתרחבת לפי הצורך — עשרות ומאות שיחות במקביל ללא זמני המתנה. אתם משלמים לפי חבילת הדקות שלכם, לא לפי כמות קווים.",
  },
  {
    question: "האם הבוט יודע לעבוד עם המערכות הקיימות שלי?",
    answer:
      "כן. דרך ה-API הפתוח הבוט מושך נתונים ומעדכן כל מערכת חיצונית — CRM, יומנים, מערכות הזמנות ועוד — בכל שלב בשיחה.",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "בוט טלפוני חכם",
  serviceType: "AI Voice Bot / מענה קולי חכם",
  provider: { "@type": "Organization", name: site.name, url: site.url },
  areaServed: "IL",
  description:
    "בוט טלפוני מבוסס AI שעונה לשיחות נכנסות 24/6, מבין דיבור חופשי בעברית, קובע פגישות ומנתב שיחות לנציגים.",
  url: absoluteUrl("/voice-bot"),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "דף הבית", item: site.url },
    { "@type": "ListItem", position: 2, name: "בוט טלפוני חכם", item: absoluteUrl("/voice-bot") },
  ],
};

export default function VoiceBotPage() {
  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero
        badge="בוט טלפוני חכם · Inbound AI"
        title={
          <>
            בוט טלפוני שעונה, מבין <br className="hidden md:block" />
            <span className="text-gradient">וסוגר עניינים בשבילכם</span>
          </>
        }
        description="מענה קולי מבוסס בינה מלאכותית שעונה לכל שיחה נכנסת 24/6: מבין דיבור חופשי בעברית, עונה על שאלות, קובע פגישות, אוסף פרטים ומעביר לנציג רק כשבאמת צריך."
        visual={<VoiceBotVisual />}
      />

      {/* Pain section */}
      <section className="py-20 bg-brand-deep border-y border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              כמה שיחות העסק שלכם מפסיד כל יום?
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              לקוח שלא נענה — מתקשר למתחרה. מענה קולי ישן עם &quot;הקש 1&quot; מתסכל,
              ונציגים אנושיים עולים ביוקר ועובדים רק בשעות העבודה. בוט טלפוני חכם עונה
              לכל שיחה, מיד, בכל שעה — ומתעד הכל אוטומטית.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              { value: "100%", label: "מהשיחות נענות" },
              { value: "0 שניות", label: "זמן המתנה ללקוח" },
              { value: "24/6", label: "זמינות מסביב לשעון" },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="glass-panel rounded-2xl p-6">
                  <div className="text-4xl font-black text-gradient mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">מה הבוט יודע לעשות?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <Reveal key={idx} delay={idx * 0.06}>
                <div className="glass-panel p-8 rounded-2xl border border-white/5 hover:border-brand-primary/30 transition-colors h-full">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-5">
                    {cap.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{cap.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{cap.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="py-24 bg-brand-deep border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
              ככה נראית שיחה עם הבוט
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {flowSteps.map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="relative glass-panel p-6 rounded-2xl h-full">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center font-bold mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech highlights + internal links */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="glass-panel rounded-3xl p-8 md:p-12 border border-white/10">
              <div className="flex items-start gap-4 mb-6">
                <BrainCircuit className="w-10 h-10 text-brand-secondary flex-shrink-0" />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    טכנולוגיה של מוקד גדול — במחיר של עסק קטן
                  </h2>
                  <p className="text-gray-400 leading-relaxed">
                    מאחורי הבוט עומדת תשתית טלפוניה מקצועית: עצי שלוחות גמישים, חילוץ
                    נתונים עם AI, תמלול מלא של כל שיחה וסטטיסטיקות בזמן אמת. הבוט הוא חלק
                    ממערכת שלמה שכוללת גם{" "}
                    <Link href="/campaigns" className="text-brand-accent hover:underline">
                      קמפיין שיחות אוטומטי
                    </Link>{" "}
                    ו
                    <Link href="/cloud-pbx" className="text-brand-accent hover:underline">
                      מרכזיה בענן
                    </Link>{" "}
                    מלאה.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
                {[
                  { icon: <MessageSquareText className="w-5 h-5" />, label: "תמלול מלא של כל שיחה" },
                  { icon: <ShieldCheck className="w-5 h-5" />, label: "הקלטות מאובטחות בענן" },
                  { icon: <Headphones className="w-5 h-5" />, label: "ליווי והטמעה אישית" },
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
                href="/blog/phone-bot-for-business"
                className="inline-flex items-center gap-2 text-brand-accent hover:text-white transition-colors font-medium mt-8"
              >
                למדריך המלא: בוט טלפוני לעסק <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FaqSection items={faq} title="שאלות נפוצות על בוט טלפוני" />
      <CtaSection
        title="רוצים לשמוע איך זה נשמע בפועל?"
        subtitle="השאירו פרטים ונחזור אליכם — נסביר איך סוכן ה-AI משתלב במרכזייה שלכם."
      />
    </>
  );
}
