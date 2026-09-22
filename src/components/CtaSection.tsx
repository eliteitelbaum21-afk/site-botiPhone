import CtaButton from "./CtaButton";
import Reveal from "./Reveal";

interface CtaSectionProps {
  title?: string;
  subtitle?: string;
}

export default function CtaSection({
  title = "מוכנים לשדרג את התקשורת בעסק?",
  subtitle = "מרכזייה יציבה עם ניהול נציגים מתקדם, סיכומי שיחה ו-AI מובנה — בפלטפורמה אחת. דברו איתנו ונחזור אליכם בהקדם.",
}: CtaSectionProps) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20" />
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <Reveal>
          <div className="text-center glass-panel p-8 md:p-12 rounded-3xl border border-white/20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{title}</h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10">{subtitle}</p>
            <div className="flex justify-center">
              <CtaButton variant="white" intent="contact" source="cta-section">
                דברו עם מומחה
              </CtaButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
