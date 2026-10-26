import { Network, Sparkles, BarChart3 } from "lucide-react";
import Reveal from "@/components/Reveal";

const steps = [
  {
    icon: <Network className="w-8 h-8 text-brand-accent" />,
    step: "01",
    title: "שיחת היכרות",
    description:
      "מספרים לנו איך עובד הטלפון אצלכם היום: מספרים, עובדים, שעות, ומה מפריע. נבנה יחד את המסלול של המתקשר.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-brand-accent" />,
    step: "02",
    title: "מקימים ומניידים",
    description:
      "אנחנו מקימים את התפריט, השלוחות והנציגים, בודקים בשיחות אמיתיות, ומניידים את המספר הקיים.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-brand-accent" />,
    step: "03",
    title: "באוויר, עם ליווי",
    description:
      "הצוות מקבל הדרכה, ואתם רואים כל שיחה בממשק. שינויים עושים לבד מהדפדפן, או מבקשים מאיתנו.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-brand-deep border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">איך זה עובד?</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              בלי טכנאי ובלי חומרה. רוב העסקים עולים לאוויר תוך ימים.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.12}>
              <div className="relative glass-panel p-8 rounded-2xl h-full border border-white/5">
                <span className="absolute top-6 left-6 text-5xl font-black text-white/5">
                  {step.step}
                </span>
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
