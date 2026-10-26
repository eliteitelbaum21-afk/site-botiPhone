import type { Metadata } from "next";
import { Activity, BarChart3, Clock4, Headphones, Smartphone, UsersRound } from "lucide-react";
import ProductPage from "@/components/ProductPage";
import { CallCenterVisual } from "@/components/ProductVisuals";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "מוקד טלפוני בענן — ניהול נציגים, תור המתנה ודוחות שיחות",
  description:
    "מערכת למוקד טלפוני בענן, למוקד שירות לקוחות ולמוקד מכירות: חיוג לנציגים, תור המתנה עם מוזיקה, סטטוס נציגים בזמן אמת ודוחות. עונים מהנייד או מטלפון במחשב, עם המספר של העסק.",
  alternates: { canonical: "/call-center" },
  openGraph: {
    title: "נציגים ותור המתנה — מוקד טלפוני בענן | BotiPhone",
    description: "חיוג לנציגים, תור המתנה, סטטוס חי ודוחות. מתאים למשרד קטן ולמוקד גדול.",
    url: absoluteUrl("/call-center"),
  },
};

const features = [
  {
    icon: <UsersRound className="w-6 h-6" />,
    title: "חיוג חכם לנציגים",
    description: "כולם מצלצלים יחד, לפי סדר קבוע, או לפי מי שפנוי. קבוצות נפרדות לשירות, למכירות ולכל צוות.",
  },
  {
    icon: <Clock4 className="w-6 h-6" />,
    title: "תור המתנה מקצועי",
    description: "כשכולם תפוסים, המתקשר ממתין בתור עם מוזיקה והודעות, ולא שומע צליל תפוס.",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "סטטוס נציגים בזמן אמת",
    description: "מי פנוי, מי בשיחה ומי לא מחובר, וכמה שיחות כל נציג קיבל היום.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "עונים מכל מקום",
    description: "מטלפון שולחני, מהנייד או מהדפדפן. הנציג עובד מהבית עם המספר של העסק.",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "דוחות וסטטיסטיקות",
    description: "כמה שיחות נכנסו, כמה נענו, זמני שיחה, שעות עומס והשוואה בין נציגים. הכל יוצא לאקסל.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "הקלטה וסיכום לכל שיחה",
    description: "מפעילים הקלטה לנציג, ומקבלים הקלטה, תמלול וסיכום AI בהיסטוריית השיחות.",
  },
];

const steps = [
  { title: "מוסיפים נציגים", description: "שם, שלוחה ואיך הנציג עונה: עמדה, נייד או דפדפן." },
  { title: "בונים קבוצות", description: "שירות, מכירות, תמיכה. בוחרים איך לחייג לכל קבוצה." },
  { title: "מגדירים תור", description: "מוזיקת המתנה, הודעות, וכמה זמן מחכים עד שעוברים הלאה." },
  { title: "עוקבים בזמן אמת", description: "סטטוס חי, דוחות וסטטיסטיקות, ובקרת איכות על השיחות." },
];

const faq = [
  {
    question: "זה מתאים גם למשרד קטן, לא רק למוקד גדול?",
    answer:
      "כן. אותה מערכת עובדת עם שני עובדים ועם עשרות נציגים. מתחילים בקבוצה אחת ומוסיפים נציגים וצוותים כשהעסק גדל.",
  },
  {
    question: "מה קורה כשכל הנציגים תפוסים?",
    answer:
      "המתקשר נכנס לתור המתנה עם מוזיקה והודעות. אפשר להגדיר כמה זמן הוא ממתין, ומה קורה אחר כך: מעבר לקבוצה אחרת, הודעה קולית או חזרה לתפריט.",
  },
  {
    question: "הנציגים צריכים טלפון מיוחד?",
    answer:
      "לא חייבים. אפשר לענות מטלפון IP שולחני, מהנייד או ישירות מהדפדפן במחשב.",
  },
  {
    question: "אפשר לראות כמה שיחות כל נציג ענה?",
    answer:
      "כן. בדף הנציגים רואים היסטוריית שיחות, סטטוס, וסטטיסטיקות לפי תקופה: שיחות שנענו ושלא נענו, זמן דיבור ואחוז מענה לכל נציג.",
  },
  {
    question: "אפשר לתת למנהל לראות רק דוחות?",
    answer:
      "כן. יש משתמשים והרשאות לכל דף במערכת, כך שכל אחד רואה רק את מה שהוא צריך.",
  },
];

export default function CallCenterPage() {
  return (
    <ProductPage
      href="/call-center"
      name="נציגים, תור המתנה ומוקד טלפוני"
      serviceType="Call Center / ניהול נציגים"
      badge="נציגים · תור המתנה · דוחות"
      title={
        <>
          מוקד טלפוני בענן: <br className="hidden md:block" />
          <span className="text-gradient">אף שיחה לא נשארת בלי מענה</span>
        </>
      }
      description="חיוג לנציגים, תור המתנה, סטטוס בזמן אמת ודוחות שמראים מה באמת קורה בטלפון של העסק. מתאים למשרד של שלושה עובדים ולמוקד של חמישים."
      visual={<CallCenterVisual />}
      featuresTitle="כל מה שמנהל מוקד צריך"
      features={features}
      stepsTitle="מקימים מוקד בארבעה צעדים"
      steps={steps}
      faqTitle="שאלות נפוצות על ניהול נציגים ותור"
      faq={faq}
      ctaTitle="רוצים לדעת מה קורה בטלפון של העסק?"
      ctaSubtitle="נקים איתכם את הנציגים, הקבוצות והתור, ונראה לכם את הדוחות על השיחות האמיתיות שלכם."
    />
  );
}
