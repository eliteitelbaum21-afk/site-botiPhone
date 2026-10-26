import type { Metadata } from "next";
import { Check, Headphones, PhoneCall, ShieldCheck, Undo2, Wrench, X } from "lucide-react";
import ProductPage from "@/components/ProductPage";
import { MigrationVisual } from "@/components/ProductVisuals";
import Reveal from "@/components/Reveal";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "החלפת מרכזייה בזק ומרכזיה סנטריקס — מעבר לענן עם אותו מספר",
  description:
    "מעבר ממרכזייה בזק, מרכזיה סנטריקס, מרכזיית פנסוניק ישנה או מרכזיה של 015 למרכזיה בענן: ניוד מספר בזק הקיים, אותן שלוחות ואותו תפריט, בלי השבתה ובלי טכנאי מרכזיות.",
  alternates: { canonical: "/pbx-migration" },
  openGraph: {
    title: "החלפת מרכזייה בזק ומרכזיה סנטריקס | BotiPhone",
    description: "ניוד המספר הקיים, אותן שלוחות ואותו תפריט, בלי השבתה.",
    url: absoluteUrl("/pbx-migration"),
  },
};

const features = [
  {
    icon: <PhoneCall className="w-6 h-6" />,
    title: "שומרים על המספר",
    description: "מניידים את המספר הקיים של העסק. הלקוחות ממשיכים להתקשר לאותו מספר כמו תמיד.",
  },
  {
    icon: <Undo2 className="w-6 h-6" />,
    title: "אותו מענה שהלקוחות מכירים",
    description: "בונים מחדש את התפריט, השלוחות והפתיחים שהיו לכם, ומשפרים מה שצריך.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "בלי השבתה",
    description: "מקימים ובודקים את המרכזייה החדשה לפני המעבר. מעבירים את המספר רק כשהכל מוכן.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "בלי ארון ובלי טכנאי",
    description: "אין קופסה במשרד שמתקלקלת. שינויים עושים מהדפדפן, ותמיכה מקבלים בטלפון.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "הטלפונים שכבר יש לכם",
    description: "ברוב המקרים אפשר להמשיך עם טלפוני IP קיימים, או לענות מהנייד ומהמחשב.",
  },
];

const steps = [
  { title: "שיחת היכרות", description: "עוברים יחד על מה יש היום: מספרים, שלוחות, תפריט ומי עונה איפה." },
  { title: "מקימים במקביל", description: "בונים את המרכזייה בענן ובודקים אותה בשיחות אמיתיות, בלי לגעת במה שעובד." },
  { title: "מניידים את המספר", description: "מגישים בקשת ניוד. ביום המעבר השיחות פשוט מתחילות להגיע לענן." },
  { title: "ליווי אחרי המעבר", description: "מדריכים את הצוות ונשארים זמינים לשינויים ולשאלות." },
];

const comparison = [
  { feature: "התקנה", old: "טכנאי, ארון תקשורת וכבלים", cloud: "עולה לאוויר תוך ימים, בלי חומרה" },
  { feature: "שינוי הודעה או שלוחה", old: "קריאה לטכנאי והמתנה", cloud: "לבד מהדפדפן, תוך דקה" },
  { feature: "עבודה מהבית", old: "מוגבלת למשרד", cloud: "מהנייד, מהמחשב או מטלפון IP" },
  { feature: "הקלטות ודוחות", old: "לרוב אין, או בתוספת", cloud: "הקלטה, תמלול ודוחות בממשק אחד" },
  { feature: "תקלה בחומרה", old: "המרכזייה מושבתת עד תיקון", cloud: "אין חומרה במשרד שיכולה להתקלקל" },
  { feature: "לגדול", old: "קווים וכרטיסים נוספים", cloud: "מוסיפים נציג או מספר בכמה לחיצות" },
];

const faq = [
  {
    question: "אפשר לעבור ממרכזייה של בזק ולשמור על המספר?",
    answer:
      "כן. מספר טלפון בישראל אפשר לנייד בין ספקים. מגישים בקשת ניוד, ובסיומה השיחות למספר הקיים מגיעות למרכזיה בענן. הלקוחות לא מרגישים שום שינוי.",
  },
  {
    question: "כמה זמן לוקח המעבר?",
    answer:
      "את המרכזייה בענן מקימים בדרך כלל תוך ימים. זמן הניוד עצמו תלוי בתהליך מול הספק הקודם. עד שהניוד מסתיים, המרכזייה הישנה ממשיכה לעבוד.",
  },
  {
    question: "מה עושים עם הטלפונים במשרד?",
    answer:
      "טלפוני IP אפשר בדרך כלל לחבר למרכזייה החדשה. טלפונים אנלוגיים ישנים לא מתחברים ישירות, ואז אפשר לענות מהנייד, מהמחשב או מטלפון IP חדש.",
  },
  {
    question: "אנחנו רגילים למרכזייה פשוטה. זה לא מסובך מדי?",
    answer:
      "לא. אפשר להתחיל בדיוק עם מה שהיה לכם: פתיח, תפריט, שלוחות ונציגים. היכולות המתקדמות, כמו AI וקמפיינים, נשארות כבויות עד שתרצו אותן.",
  },
  {
    question: "עובדים גם עם מעבר מ-015, סנטריקס או ספקים אחרים?",
    answer:
      "כן. התהליך דומה לכל ספק: ממפים את מה שיש, מקימים במקביל ומניידים את המספרים.",
  },
];

export default function PbxMigrationPage() {
  return (
    <ProductPage
      href="/pbx-migration"
      name="מעבר ממרכזייה ישנה למרכזיה בענן"
      serviceType="PBX Migration / ניוד מרכזייה"
      badge="מעבר מרכזייה · ניוד מספר"
      title={
        <>
          מרכזייה בזק או סנטריקס? <br className="hidden md:block" />
          <span className="text-gradient">עוברים לענן ושומרים על אותו מספר</span>
        </>
      }
      description="יש לכם מרכזייה במשרד, מרכזיה סנטריקס של בזק או מרכזייה של ספק אחר? מעבירים את הכל לענן: אותו מספר, אותן שלוחות ואותו תפריט. בלי השבתה, בלי ארון תקשורת ובלי טכנאי."
      visual={<MigrationVisual />}
      intro={{
        title: "למה עסקים עוברים ממרכזייה פיזית לענן?",
        body: (
          <p>
            מרכזייה פיזית עבדה טוב שנים, אבל כל שינוי בה דורש טכנאי, היא לא עובדת מהבית, ותקלה בקופסה משביתה את הטלפון של העסק.
            מרכזיה בענן עושה את כל מה שהישנה עשתה, ומנוהלת מהדפדפן. בנוסף מקבלים הקלטות, דוחות ואפשרות להוסיף בוט קולי חכם בעתיד.
          </p>
        ),
      }}
      featuresTitle="מעבר שקט, בלי הפתעות"
      features={features}
      stepsTitle="ככה עובר המעבר"
      steps={steps}
      faqTitle="שאלות נפוצות על מעבר מרכזייה"
      faq={faq}
      ctaTitle="רוצים לבדוק מעבר?"
      ctaSubtitle="ספרו לנו מה יש לכם היום. נציג יחזור לשיחה, בלי התחייבות."
    >
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">מרכזייה ישנה מול מרכזיה בענן</h2>
          </Reveal>
          <Reveal>
            <div className="overflow-x-auto rounded-2xl border border-white/10">
              <table className="w-full text-right bg-brand-card">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-4 md:p-5"><span className="sr-only">נושא</span></th>
                    <th className="p-4 md:p-5 text-gray-400 font-bold">מרכזייה ישנה</th>
                    <th className="p-4 md:p-5 font-bold"><span className="text-gradient">מרכזיה בענן BotiPhone</span></th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.feature} className="border-b border-white/5 last:border-0">
                      <td className="p-4 md:p-5 font-bold text-white">{row.feature}</td>
                      <td className="p-4 md:p-5 text-gray-400">
                        <span className="flex items-start gap-2"><X className="w-4 h-4 text-red-400 mt-1 shrink-0" />{row.old}</span>
                      </td>
                      <td className="p-4 md:p-5 text-gray-200">
                        <span className="flex items-start gap-2"><Check className="w-4 h-4 text-emerald-400 mt-1 shrink-0" />{row.cloud}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
          <p className="text-xs text-gray-400 mt-4 text-center">
            שמות הספקים מוזכרים לצורך תיאור המעבר בלבד. BotiPhone אינה קשורה אליהם.
          </p>
        </div>
      </section>
    </ProductPage>
  );
}
