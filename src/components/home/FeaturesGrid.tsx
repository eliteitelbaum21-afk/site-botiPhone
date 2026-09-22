import Link from "next/link";
import { ArrowLeft, BarChart3, Bot, Network, PhoneOutgoing } from "lucide-react";
import Reveal from "@/components/Reveal";

const features = [
  {
    icon: <Bot className="w-8 h-8 text-brand-secondary" />,
    title: "בוט טלפוני חכם (Inbound)",
    description:
      "סוכן וירטואלי שעונה לשיחות נכנסות 24/6, מבין שפה חופשית, קובע פגישות ומסנן פניות.",
    href: "/voice-bot",
  },
  {
    icon: <PhoneOutgoing className="w-8 h-8 text-brand-accent" />,
    title: "קמפיינים יוצאים (Outbound)",
    description:
      "הבוט מחייג לאלפי לידים במקביל, מנהל שיחת מכירה טבעית ומעביר לנציג רק לידים חמים.",
    href: "/campaigns",
  },
  {
    icon: <Network className="w-8 h-8 text-brand-primary" />,
    title: "מרכזיה בענן לעסק",
    description:
      "מרכזייה וירטואלית מלאה: שלוחות, תורים, הקלטות ו-IVR חכם — בלי חומרה ובלי טכנאים.",
    href: "/cloud-pbx",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-pink-500" />,
    title: "דאטה ובקרת איכות",
    description:
      "תמלול שיחות, דוחות בזמן אמת ותובנות AI על איכות השיחות של הנציגים והבוטים.",
    href: "/cloud-pbx",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              הכלים שיקפיצו את המכירות שלך
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-secondary mx-auto rounded-full" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  למידע נוסף <ArrowLeft className="w-4 h-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
