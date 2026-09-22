import type { Metadata } from "next";
import {
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  MessageSquareText,
  PhoneOutgoing,
  ShieldCheck,
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
  title: `בוט טלפוני חכם, קמפיינים אוטומטיים ומרכזיה בענן | ${site.name}`,
  description:
    "בוט טלפוני מבוסס AI שעונה לשיחות 24/6, קמפיין שיחות אוטומטי שמחייג לאלפי לידים במקביל, ומרכזיה בענן מתקדמת לעסק — הכל בפלטפורמה אחת. קבלו הדגמה חינם.",
  alternates: { canonical: "/" },
};

const homeFaq = [
  {
    question: "מה זה בוט טלפוני חכם?",
    answer:
      "בוט טלפוני הוא סוכן וירטואלי מבוסס בינה מלאכותית שעונה לשיחות נכנסות ומבצע שיחות יוצאות בשם העסק. הוא מבין דיבור חופשי בעברית, עונה על שאלות, קובע פגישות, מסנן פניות ומעביר לנציג אנושי רק כשצריך — מסביב לשעון, 24/6.",
  },
  {
    question: "כמה זמן לוקח להקים בוט טלפוני או מרכזיה בענן?",
    answer:
      "ברוב המקרים ימים בודדים. אנחנו בונים יחד אתכם את תסריט השיחה, מקליטים את ההודעות, מחברים את המספרים — והמערכת באוויר. אין צורך בחומרה, בטכנאים או בהתקנות.",
  },
  {
    question: "האם המערכת מתחברת ל-CRM שלי?",
    answer:
      "כן. ל-BotiPhone יש API פתוח ואינטגרציות מלאות: פרטי הלקוח קופצים לנציג עם תחילת השיחה (CRM Pop-up), והבוט יכול למשוך נתונים, לעדכן הזמנות ולשמור לידים ישירות בכל מערכת צד שלישי.",
  },
  {
    question: "כמה עולה השירות?",
    answer:
      "חבילות הקמפיינים היוצאים עם בוט AI מתחילות מ-1,000 ₪ (מחיר קבוע, 1,000 דקות ועד 3,000 מספרים) ועד חבילה ארגונית עם 10,000 דקות ב-5,500 ₪, בתוספת הקמה חד-פעמית של 2,000 ₪. לבוט מענה נכנס ולמרכזיה בענן נבנית הצעת מחיר מותאמת. פרטים מלאים בעמוד המחירון.",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesGrid />
      <HowItWorks />

      <FeatureShowcase
        subtitle="בוט טלפוני חכם (Inbound)"
        title='הסוף לתפריטי "הקש 1"'
        description="הלקוח מתקשר והבוט עונה מיד. הוא מבין שפה טבעית, קובע פגישות, מספק מידע, ומנתב שיחות מורכבות לנציג אנושי רק כשבאמת צריך."
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
        imageSide="right"
        href="/voice-bot"
        linkLabel="לעמוד הבוט הטלפוני"
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
        imageSide="left"
        href="/campaigns"
        linkLabel="לעמוד הקמפיינים"
      />

      <FeatureShowcase
        subtitle="מרכזיה בענן ובקרת איכות"
        title="שליטה מלאה על כל שיחה בארגון"
        description="מרכזייה וירטואלית מלאה עם שלוחות, תורים והקלטות — וה-AI שמנתח כל שיחה, מדרג ביצועים ומספק תובנות בזמן אמת."
        bullets={[
          {
            icon: <BarChart3 className="text-brand-secondary" />,
            title: "תמלול וניתוח שיחות",
            desc: "המרת כל שיחה לטקסט וזיהוי מילות מפתח.",
          },
          {
            icon: <ShieldCheck className="text-brand-accent" />,
            title: "בקרת איכות אוטומטית (QA)",
            desc: "דירוג נציגים על בסיס אמפתיה, יעדים וטיפול בהתנגדויות.",
          },
          {
            icon: <CheckCircle2 className="text-green-400" />,
            title: "אינטגרציית CRM מלאה",
            desc: "נתונים, הקלטות וסיכומים מסתנכרנים ישירות למערכת שלכם.",
          },
        ]}
        visual={<PbxVisual />}
        imageSide="right"
        href="/cloud-pbx"
        linkLabel="לעמוד המרכזיה בענן"
      />

      <Testimonials />
      <BlogPreview />
      <FaqSection items={homeFaq} />
      <CtaSection />
    </>
  );
}
