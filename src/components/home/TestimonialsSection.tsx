import Image from "next/image";
import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { approvedTestimonials } from "@/lib/testimonials";
import { site } from "@/lib/site";

/** Renders nothing until there are at least 2 approved testimonials. */
export default function TestimonialsSection() {
  const list = approvedTestimonials();
  if (list.length === 0) return null;

  const reviewsJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    review: list.map((t) => ({
      "@type": "Review",
      reviewBody: t.quote,
      author: { "@type": "Person", name: t.name, jobTitle: t.role, worksFor: { "@type": "Organization", name: t.business } },
    })),
  };

  return (
    <section className="py-24 bg-brand-deep border-y border-white/5" aria-labelledby="testimonials-title">
      <JsonLd data={reviewsJsonLd} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 id="testimonials-title" className="text-3xl md:text-4xl font-bold text-center mb-14">
            לקוחות מספרים
          </h2>
        </Reveal>
        <div className={`grid gap-6 ${list.length === 2 ? "md:grid-cols-2 max-w-5xl mx-auto" : "md:grid-cols-2 lg:grid-cols-3"}`}>
          {list.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="glass-panel rounded-2xl p-7 h-full flex flex-col">
                <Quote className="w-8 h-8 text-brand-accent/50 mb-4" />
                <blockquote className="text-gray-200 leading-relaxed mb-6 flex-1">{t.quote}</blockquote>
                <figcaption className="flex items-center gap-3">
                  {t.logo && (
                    <Image src={t.logo} alt={t.business} width={40} height={40} className="w-10 h-10 object-contain rounded-lg bg-white/5 p-1" />
                  )}
                  <div>
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-sm text-gray-400">
                      {t.role}, {t.business}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
