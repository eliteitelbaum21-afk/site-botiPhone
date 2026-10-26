import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ServiceHero from "./ServiceHero";
import Reveal from "./Reveal";
import FaqSection, { type FaqItem } from "./FaqSection";
import CtaSection from "./CtaSection";
import JsonLd from "./JsonLd";
import VideoSection from "./VideoSection";
import UseCaseCard from "./UseCaseCard";
import { useCasesFor } from "@/lib/examples";
import { relatedProducts } from "@/lib/products";
import { absoluteUrl, site } from "@/lib/site";

export interface ProductFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ProductStep {
  title: string;
  description: string;
}

interface ProductPageProps {
  href: string;
  name: string;
  serviceType: string;
  badge: string;
  title: ReactNode;
  description: string;
  visual?: ReactNode;
  /** short "what is it" block — the main keyword in plain words */
  intro?: { title: string; body: ReactNode };
  featuresTitle: string;
  features: ProductFeature[];
  stepsTitle?: string;
  steps?: ProductStep[];
  /** extra sections between steps and examples (comparison tables etc.) */
  children?: ReactNode;
  faqTitle: string;
  faq: FaqItem[];
  ctaTitle: string;
  ctaSubtitle: string;
}

export default function ProductPage(props: ProductPageProps) {
  const examples = useCasesFor(props.href);
  const related = relatedProducts(props.href);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: props.name,
    serviceType: props.serviceType,
    provider: { "@type": "Organization", name: site.name, url: site.url },
    areaServed: "IL",
    description: props.description,
    url: absoluteUrl(props.href),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "דף הבית", item: site.url },
      { "@type": "ListItem", position: 2, name: props.name, item: absoluteUrl(props.href) },
    ],
  };

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <ServiceHero badge={props.badge} title={props.title} description={props.description} visual={props.visual} />

      {props.intro && (
        <section className="py-16 border-y border-white/5 bg-brand-deep">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{props.intro.title}</h2>
              <div className="text-lg text-gray-300 leading-relaxed space-y-4">{props.intro.body}</div>
            </Reveal>
          </div>
        </section>
      )}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{props.featuresTitle}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto rounded-full" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {props.features.map((f, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="glass-panel p-7 rounded-2xl hover:border-brand-primary/40 transition-colors h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/15 text-brand-accent flex items-center justify-center mb-5">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{f.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{f.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {props.steps && props.steps.length > 0 && (
        <section className="py-24 bg-brand-deep border-y border-white/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">{props.stepsTitle ?? "איך זה עובד"}</h2>
            </Reveal>
            <ol className={`grid gap-6 ${props.steps.length === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}>
              {props.steps.map((s, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <li className="relative glass-panel rounded-2xl p-6 h-full">
                    <span className="text-5xl font-black text-brand-primary/30 leading-none">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="text-lg font-bold text-white mt-3 mb-2">{s.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{s.description}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )}

      {props.children}

      {examples.length > 0 && (
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
                <div>
                  <p className="text-brand-accent font-semibold mb-2">דוגמאות מהשטח</p>
                  <h2 className="text-3xl md:text-4xl font-bold">ככה זה נשמע אצל לקוחות</h2>
                </div>
                <Link href="/examples" className="inline-flex items-center gap-2 text-brand-accent hover:text-white transition-colors font-medium">
                  לכל הדוגמאות <ArrowLeft className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {examples.slice(0, 3).map((u) => (
                <Reveal key={u.id}>
                  <UseCaseCard useCase={u} showProducts={false} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <VideoSection page={props.href} />

      <FaqSection items={props.faq} title={props.faqTitle} />

      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-5 text-gray-300">עוד במרכזייה</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group glass-panel rounded-xl p-5 flex items-center justify-between gap-4 hover:border-brand-primary/40 transition-colors"
              >
                <div>
                  <div className="font-bold text-white">{p.label}</div>
                  <div className="text-sm text-gray-400">{p.short}</div>
                </div>
                <ArrowLeft className="w-5 h-5 text-brand-accent shrink-0 group-hover:-translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title={props.ctaTitle} subtitle={props.ctaSubtitle} />
    </>
  );
}
