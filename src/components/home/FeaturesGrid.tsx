import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  ContactRound,
  LayoutDashboard,
  Megaphone,
  Network,
} from "lucide-react";
import Reveal from "@/components/Reveal";

const features = [
  {
    icon: <LayoutDashboard className="w-8 h-8 text-brand-primary" />,
    title: "מרכזייה עסקית בשליטה שלך",
    description:
      "הקמה וניהול של שלוחות, פתיחים ותורי המתנה בקליק. ניתוב שיחות חכם לפי שעות פעילות, שקיפות מלאה עם הקלטות ודוחות – הכל ללא צורך בטכנאי.",
    href: "/pbx",
    linkLabel: "למידע נוסף על המרכזייה",
  },
  {
    icon: <ContactRound className="w-8 h-8 text-brand-secondary" />,
    title: "CRM ומנוע נתונים משותף",
    description:
      "כרטיס לקוח שקופץ בזמן אמת עם תחילת השיחה. תיעוד אוטומטי של היסטוריית התקשורת ומעקב מדויק אחר לידים ומקורות פרסום.",
    href: "/crm",
    linkLabel: "איך עובד ה-CRM שלנו?",
  },
  {
    icon: <Network className="w-8 h-8 text-brand-accent" />,
    title: "אוטומציה וחיבור למערכות העסק",
    description:
      "הפכו את המרכזייה לממשק קולי. המערכת שולפת נתונים, בודקת סטטוס הזמנות ומעדכנת פרטים במערכות החיצוניות שלכם תוך כדי השיחה.",
    href: "/api-integrations",
    linkLabel: "גלו את אפשרויות האינטגרציה",
  },
  {
    icon: <Bot className="w-8 h-8 text-pink-500" />,
    title: "סוכני AI חכמים לסינון ושירות",
    description:
      "בינה מלאכותית שמנהלת שיחות טבעיות 24/6, מבינה דיבור חופשי, פותרת תקלות נפוצות ומעבירה לנציג אנושי רק את השיחות המורכבות.",
    href: "/ai-agents",
    linkLabel: "הכירו את סוכני ה-AI",
  },
  {
    icon: <Megaphone className="w-8 h-8 text-yellow-400" />,
    title: "קמפיינים אוטומטיים שמביאים לידים",
    description:
      "הוצאת אלפי שיחות במקביל לסקרים או מכירות. סוכן ה-AI מנהל שיחת סינון אישית עם כל לקוח ומעביר לנציגים רק לידים חמים ומוכנים לסגירה.",
    href: "/campaigns",
    linkLabel: "למערכת הקמפיינים",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              מהמרכזייה ועד ה-AI — בקצב שלכם
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-4">
              התחילו בתשתית יציבה, והוסיפו CRM, אינטגרציות וסוכני AI כשאתם מוכנים.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <Link
                href={feature.href}
                className="glass-panel p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group border border-white/5 hover:border-brand-primary/30 flex flex-col h-full"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{feature.description}</p>
                <span className="mt-auto text-brand-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  {feature.linkLabel} <ArrowLeft className="w-4 h-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
