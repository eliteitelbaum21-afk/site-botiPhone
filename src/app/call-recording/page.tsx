import type { Metadata } from "next";
import { Download, FileText, Lock, Mail, Mic, Sparkles } from "lucide-react";
import ProductPage from "@/components/ProductPage";
import { RecordingVisual } from "@/components/ProductVisuals";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "הקלטת שיחות לעסק — הקלטה, תמלול בעברית וסיכום AI",
  description:
    "הקלטת שיחות לעסק בענן: מערכת הקלטת שיחות שבה כל שיחה נשמרת, נשמעת מהדפדפן ונשלחת במייל. תמלול שיחות טלפון אוטומטי בעברית, וסיכום שיחה AI עם נקודות לשיפור לנציג.",
  alternates: { canonical: "/call-recording" },
  openGraph: {
    title: "הקלטת שיחות ותמלול | BotiPhone",
    description: "הקלטה, תמלול בעברית וסיכום AI לכל שיחה בעסק.",
    url: absoluteUrl("/call-recording"),
  },
};

const features = [
  {
    icon: <Mic className="w-6 h-6" />,
    title: "הקלטה של כל שיחה",
    description: "מפעילים הקלטה לכל נציג בנפרד. השיחות נשמרות בענן, בלי שרת במשרד ובלי דיסק שמתמלא.",
  },
  {
    icon: <Download className="w-6 h-6" />,
    title: "שומעים, מורידים, שולחים",
    description: "מנגנים את ההקלטה מהדפדפן, מורידים למחשב או שולחים במייל למנהל, ישר מהיסטוריית השיחות.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "תמלול בעברית",
    description: "כל השיחה בכתב, לקוח ונציג בנפרד. קוראים בחצי דקה מה הלקוח ביקש, בלי להאזין לכל ההקלטה.",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "סיכום AI ונקודות לשיפור",
    description: "בכמה שורות: על מה דיברו, מה סוכם, ומה הנציג יכול לעשות טוב יותר בפעם הבאה.",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "סיכום שיחה למייל",
    description: "אפשר לקבל סיכום של שיחות חשובות במייל, ככה שהמנהל יודע מה קרה גם כשהוא לא במשרד.",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "גישה לפי הרשאות",
    description: "רק מי שמורשה שומע הקלטות. לכל משתמש בוחרים לאילו דפים יש לו גישה.",
  },
];

const steps = [
  { title: "הלקוח מתקשר", description: "השיחה מוקלטת אוטומטית, בצד של הלקוח ובצד של הנציג." },
  { title: "השיחה מתומללת", description: "תמלול רגיל ללא עלות, או תמלול מהיר כשצריך את הטקסט מיד." },
  { title: "מקבלים סיכום", description: "סיכום AI עם הנקודות החשובות, ישר בהיסטוריית השיחות של הנציג." },
];

const faq = [
  {
    question: "מותר להקליט שיחות עם לקוחות?",
    answer:
      "מקובל להודיע ללקוח בתחילת השיחה שהיא מוקלטת, למשל בפתיח של התפריט הקולי. כדאי לבדוק עם יועץ משפטי מה נדרש בתחום שלכם. אנחנו לא מייעצים בנושאים משפטיים.",
  },
  {
    question: "כמה זמן נשמרות ההקלטות?",
    answer:
      "ההקלטות נשמרות בענן ונגישות מהיסטוריית השיחות. את מדיניות השמירה המדויקת מתאימים לכל לקוח בהקמה.",
  },
  {
    question: "התמלול עולה כסף?",
    answer:
      "יש תמלול רגיל ללא עלות, שעובר בתור, ותמלול מהיר בתשלום לפי צריכה, כשצריך את הטקסט מיד.",
  },
  {
    question: "אפשר להקליט רק חלק מהנציגים?",
    answer:
      "כן. ההקלטה מופעלת בהגדרות של כל נציג, כך שבוחרים בדיוק את מי מקליטים.",
  },
];

export default function CallRecordingPage() {
  return (
    <ProductPage
      href="/call-recording"
      name="הקלטת שיחות ותמלול"
      serviceType="Call Recording / הקלטת שיחות"
      badge="הקלטה · תמלול · סיכום AI"
      title={
        <>
          הקלטת שיחות <span className="text-gradient">ותמלול לעסק</span>
        </>
      }
      description="כל שיחה מוקלטת ונשמרת בענן. אפשר לשמוע אותה מהדפדפן, לקרוא תמלול בעברית ולקבל סיכום AI עם נקודות לשיפור לנציג."
      visual={<RecordingVisual />}
      featuresTitle="מהקלטה לתובנה, בלחיצה אחת"
      features={features}
      stepsTitle="מה קורה אחרי כל שיחה"
      steps={steps}
      faqTitle="שאלות נפוצות על הקלטת שיחות"
      faq={faq}
      ctaTitle="רוצים לדעת מה נאמר בכל שיחה?"
      ctaSubtitle="נפעיל לכם הקלטה ותמלול, ותראו סיכום AI על שיחות אמיתיות של העסק."
    />
  );
}
