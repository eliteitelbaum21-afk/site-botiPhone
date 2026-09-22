import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import JsonLd from "@/components/JsonLd";
import { buildContactContext } from "@/lib/contact-context";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "צור קשר — BotiPhone",
  description:
    "השאירו פרטים ונחזור אליכם תוך 24 שעות בנוגע למרכזייה בענן, סוכני AI והקמפיינים של BotiPhone.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "צור קשר | BotiPhone",
    description: "השאירו פרטים ונציג יחזור אליכם בנוגע למרכזייה העסקית והמערכת של BotiPhone.",
    url: absoluteUrl("/contact"),
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `צור קשר — ${site.name}`,
  url: absoluteUrl("/contact"),
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactPageJsonLd} />

      <section className="relative pt-32 pb-24 lg:pt-44 overflow-hidden bg-grid">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-primary/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <Reveal>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
                  בואו <span className="text-gradient">נדבר</span>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
                  השאירו פרטים ונחזור אליכם תוך 24 שעות. בלי התחייבות — רק שיחה אחת
                  שתעזור לנו להבין מה מתאים לעסק שלכם.
                </p>
              </Reveal>

              <div className="space-y-6">
                {[
                  {
                    icon: <Phone className="w-5 h-5 text-brand-primary" />,
                    title: "טלפון",
                    value: (
                      <a href={`tel:${site.phoneIntl}`} dir="ltr" className="hover:text-brand-accent transition-colors">
                        {site.phone}
                      </a>
                    ),
                  },
                  {
                    icon: <Mail className="w-5 h-5 text-brand-secondary" />,
                    title: "אימייל",
                    value: (
                      <a href={`mailto:${site.email}`} className="hover:text-brand-accent transition-colors">
                        {site.email}
                      </a>
                    ),
                  },
                  {
                    icon: <MapPin className="w-5 h-5 text-brand-accent" />,
                    title: "כתובת",
                    value: site.address,
                  },
                  {
                    icon: <Clock className="w-5 h-5 text-green-400" />,
                    title: "זמינות",
                    value: "הבוט שלנו זמין 24/6 — נציג אנושי בימים א'-ה', 9:00-18:00",
                  },
                ].map((item, idx) => (
                  <Reveal key={idx} delay={0.15 + idx * 0.07}>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{item.title}</div>
                        <div className="text-white font-medium">{item.value}</div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={0.2} y={40}>
              <div className="glass-panel rounded-3xl p-8 md:p-10 border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary" />
                <h2 className="text-2xl font-bold mb-2">השאירו פרטים</h2>
                <p className="text-gray-400 mb-8">נחזור אליכם בהקדם עם מענה מותאם לעסק שלכם.</p>
                <ContactForm
                  {...buildContactContext({
                    intent: "contact",
                    source: "contact-page",
                    page: "/contact",
                  })}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
