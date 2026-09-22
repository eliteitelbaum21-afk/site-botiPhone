import type { Metadata } from "next";
import {
  BrainCircuit,
  Headphones,
  Mail,
  MessageSquareText,
  PhoneOutgoing,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import Hero from "@/components/home/Hero";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import FeatureShowcase from "@/components/home/FeatureShowcase";
import {
  CampaignsVisual,
  PbxVisual,
  VoiceBotVisual,
} from "@/components/home/ShowcaseVisuals";
import Testimonials from "@/components/home/Testimonials";
import BlogPreview from "@/components/home/BlogPreview";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `תקשורת חכמה לעסק — מרכזייה, CRM ו-AI | ${site.name}`,
  description:
    "מרכזייה עסקית מתקדמת עם ניהול נציגים, סיכום שיחה למייל ו-AI שמנתח שיחות עם הקשר מהעבר — יחד עם CRM, אינטגרציות וסוכני AI בפלטפורמה אחת.",
  alternates: { canonical: "/" },
};

const homeFaq = [
  {
    question: "מה כוללת המרכזייה בענן של BotiPhone?",
    answer:
      "מרכזייה וירטואלית מלאה: שלוחות, תפריטי ניתוב, תורי המתנה, ניהול נציגים מתקדם, הקלטות, סיכום שיחה אוטומטי למייל ו-AI שמנתח שיחות עם ההקשר מהשיחות הקודמות של הלקוח — הכל מממשק אחד, בלי חומרה ובלי טכנאי.",
  },
  {
    question: "איך ה-AI משתלב במרכזייה?",
    answer:
      "ה-AI הוא שכבה מובנית בתוך המרכזייה: סוכנים שעונים ומסננים שיחות, ניתוח וסיכום אחרי כל שיחה, ובקרת איכות לנציגים. אפשר להתחיל ממרכזייה קלאסית ולהפעיל יכולות AI לפי הצורך — בלי להחליף מערכת.",
  },
  {
    question: "כמה זמן לוקח להקים?",
    answer:
      "ברוב המקרים ימים בודדים. מגדירים יחד שלוחות וניתובים, מחברים מספרים ונציגים — והמערכת באוויר. אין צורך בחומרה, בטכנאים או בהתקנות במשרד.",
  },
  {
    question: "האם המערכת מתחברת ל-CRM שלי?",
    answer:
      "כן. יש API פתוח ואינטגרציות: פרטי הלקוח קופצים לנציג עם תחילת השיחה, סיכומים והקלטות נשמרים בהיסטוריה, ואפשר למשוך ולעדכן נתונים במערכות חיצוניות תוך כדי השיחה.",
  },
  {
    question: "כמה עולה השירות?",
    answer:
      "למרכזיה בענן ולמענה נכנס נבנית הצעת מחיר מותאמת. חבילות הקמפיינים היוצאים עם בוט AI מתחילות מ-1,000 ₪. פרטים מלאים בעמוד המחירון.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <HowItWorks />

      <FeatureShowcase
        subtitle="מרכזיה בענן מתקדמת"
        title="שליטה מלאה על כל שיחה בארגון"
        description="מרכזייה וירטואלית עם שלוחות, תורים וניהול נציגים — ו-AI שמסכם שיחות, מנתח אותן עם הקשר מהעבר ומחזק את המוקד בזמן אמת."
        bullets={[
          {
            icon: <Headphones className="text-brand-primary" />,
            title: "ניהול נציגים מתקדם",
            desc: "זמינות, תורים, הרשאות וביצועים — הכל מממשק אחד.",
          },
          {
            icon: <Mail className="text-brand-accent" />,
            title: "סיכום שיחה למייל",
            desc: "בסוף כל שיחה נשלח סיכום ברור למנהל או לנציג.",
          },
          {
            icon: <Sparkles className="text-brand-secondary" />,
            title: "AI עם הקשר מהעבר",
            desc: "ניתוח שיחה שמסתמך גם על שיחות קודמות של אותו לקוח.",
          },
        ]}
        visual={<PbxVisual />}
        imageSide="right"
        href="/cloud-pbx"
        linkLabel="לעמוד המרכזיה בענן"
      />

      <FeatureShowcase
        subtitle="סוכני AI (Inbound)"
        title='הסוף לתפריטי "הקש 1"'
        description="הלקוח מתקשר והסוכן הווירטואלי עונה מיד. הוא מבין שפה טבעית, קובע פגישות, מספק מידע, ומנתב שיחות מורכבות לנציג אנושי רק כשבאמת צריך."
        bullets={[
          {
            icon: <MessageSquareText className="text-brand-accent" />,
            title: "הבנת דיבור חופשי בעברית",
            desc: "זיהוי כוונת הלקוח וניהול שיחה זורמת ואנושית.",
          },
          {
            icon: <ShieldCheck className="text-brand-primary" />,
            title: "זמינות 24/6",
            desc: "העסק שלכם זמין מסביב לשעון, בלי זמני המתנה ארוכים.",
          },
          {
            icon: <Users className="text-brand-secondary" />,
            title: "סינון וסיווג חכם",
            desc: "רק פניות רלוונטיות מגיעות לנציגים — חיסכון אדיר בזמן.",
          },
        ]}
        visual={<VoiceBotVisual />}
        imageSide="left"
        href="/voice-bot"
        linkLabel="לעמוד סוכני ה-AI"
      />

      <FeatureShowcase
        subtitle="קמפיין שיחות אוטומטי (Outbound)"
        title="AI שמחייג, מוכר ומעביר לידים חמים"
        description="המערכת מחייגת לאלפי לידים במקביל, מנהלת שיחת סינון טבעית, ומעבירה לנציג המכירות רק לקוחות שמוכנים לקנות."
        bullets={[
          {
            icon: <PhoneOutgoing className="text-brand-primary" />,
            title: "חיוג אוטומטי המוני",
            desc: "אלפי שיחות בשעה, עם ניהול חכם של ערוצים וספקים.",
          },
          {
            icon: <BrainCircuit className="text-brand-secondary" />,
            title: "טיוב לידים אוטומטי",
            desc: "הבוט שואל שאלות סינון ומזהה את רמת העניין של הלקוח.",
          },
          {
            icon: <Zap className="text-brand-accent" />,
            title: "העברה חמה לנציג",
            desc: "ברגע שהלקוח מביע עניין — השיחה עוברת מיד לנציג פנוי.",
          },
        ]}
        visual={<CampaignsVisual />}
        imageSide="right"
        href="/campaigns"
        linkLabel="לעמוד הקמפיינים"
      />

      <Testimonials />
      <BlogPreview />
      <FaqSection items={homeFaq} />
      <CtaSection
        title="מוכנים לשדרג את התקשורת בעסק?"
        subtitle="מרכזייה יציבה, ניהול נציגים מתקדם ו-AI שמבין את הלקוח — בפלטפורמה אחת. דברו איתנו ונבנה הצעה שמתאימה לעסק שלכם."
      />
    </>
  );
}
