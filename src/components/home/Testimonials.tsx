import { Quote, Star } from "lucide-react";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "תוך שבועיים הבוט כבר ענה ל-80% מהשיחות הנכנסות שלנו. הצוות התפנה לטפל רק בלקוחות שבאמת צריכים נציג.",
    name: "רונית לוי",
    role: "מנהלת שירות, רשת קליניקות",
  },
  {
    quote:
      "הקמפיין האוטומטי עבר על 12,000 לידים ישנים והחזיר לנו עשרות פגישות בחודש. זה פשוט מוקד מכירות שלא ישן.",
    name: "אבי כהן",
    role: "סמנכ\"ל מכירות, חברת ביטוח",
  },
  {
    quote:
      "עברנו ממרכזייה פיזית ישנה למרכזיה בענן של BotiPhone ביום אחד. ההקלטות, הדוחות והשלוחות — הכל במקום אחד.",
    name: "מיכל ברק",
    role: "מנכ\"לית, משרד עורכי דין",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">לקוחות מספרים</h2>
            <p className="text-gray-400 text-lg">מאות עסקים בישראל כבר עובדים עם BotiPhone</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <figure className="glass-panel p-8 rounded-2xl border border-white/5 h-full flex flex-col">
                <Quote className="w-8 h-8 text-brand-primary/50 mb-4" />
                <blockquote className="text-gray-300 leading-relaxed mb-6 flex-1">
                  &quot;{t.quote}&quot;
                </blockquote>
                <figcaption>
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
