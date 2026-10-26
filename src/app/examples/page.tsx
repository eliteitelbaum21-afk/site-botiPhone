import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import UseCaseCard from "@/components/UseCaseCard";
import CtaSection from "@/components/CtaSection";
import JsonLd from "@/components/JsonLd";
import { useCases } from "@/lib/examples";
import { absoluteUrl, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "דוגמאות למרכזייה לעסק — מה הלקוח שומע כשהוא מתקשר",
  description:
    "דוגמאות אמיתיות לשימוש במרכזיה בענן: מרפאה, משרד, חנות, מוקד שירות, מוקד מכירות וקו מידע. צעד אחר צעד, מה המתקשר שומע ומה קורה מאחורי הקלעים.",
  alternates: { canonical: "/examples" },
  openGraph: {
    title: "דוגמאות שימוש במרכזייה | BotiPhone",
    description: "מרפאה, משרד, חנות, מוקד שירות ומוקד מכירות: ככה נשמעת המרכזייה.",
    url: absoluteUrl("/examples"),
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "דף הבית", item: site.url },
    { "@type": "ListItem", position: 2, name: "דוגמאות", item: absoluteUrl("/examples") },
  ],
};

export default function ExamplesPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <section className="relative pt-32 pb-12 lg:pt-44 overflow-hidden bg-grid">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal>
            <p className="text-brand-accent font-semibold mb-3">דוגמאות</p>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              ככה נשמעת המרכזייה <span className="text-gradient">אצל עסקים כמו שלכם</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              בחרו את סוג העסק, וראו צעד אחר צעד מה המתקשר שומע ומה קורה מאחורי הקלעים.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <nav aria-label="סוגי עסקים" className="flex flex-wrap justify-center gap-2 mt-10">
              {useCases.map((u) => (
                <Link
                  key={u.id}
                  href={`#${u.id}`}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-200 hover:border-brand-primary/60 hover:text-white transition-colors text-sm"
                >
                  {u.business}
                </Link>
              ))}
            </nav>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u) => (
            <Reveal key={u.id}>
              <UseCaseCard useCase={u} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaSection
        title="העסק שלכם לא ברשימה?"
        subtitle="ספרו לנו איך נראות השיחות אצלכם, ונבנה יחד את המסלול שהמתקשר שלכם ישמע."
      />
    </>
  );
}
