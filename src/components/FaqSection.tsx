import JsonLd from "./JsonLd";
import Reveal from "./Reveal";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
}

export default function FaqSection({ items, title = "שאלות נפוצות" }: FaqSectionProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-24 bg-brand-deep border-t border-white/5">
      <JsonLd data={jsonLd} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{title}</h2>
        </Reveal>
        <div className="space-y-4">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <details className="group glass-panel rounded-2xl overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer p-6 text-lg font-bold text-white list-none [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span className="text-brand-accent text-2xl font-light transition-transform group-open:rotate-45 flex-shrink-0 ms-4">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">{item.answer}</div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
