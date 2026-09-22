import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import CtaButton from "./CtaButton";
import Reveal from "./Reveal";

interface ServiceHeroProps {
  badge: string;
  title: ReactNode;
  description: string;
  visual?: ReactNode;
}

export default function ServiceHero({ badge, title, description, visual }: ServiceHeroProps) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-44 lg:pb-24 overflow-hidden bg-grid">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-primary/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`flex flex-col ${visual ? "lg:flex-row items-center gap-16" : "items-center text-center"}`}>
          <div className={visual ? "flex-1" : "max-w-4xl mx-auto"}>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
                <span className="text-sm font-medium text-gray-300">{badge}</span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-tight">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-3xl">
                {description}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className={`flex ${visual ? "" : "justify-center"}`}>
                <CtaButton variant="primary" className="w-full sm:w-auto" intent="contact" source="service-hero">
                  דברו עם מומחה
                  <ArrowLeft className="w-5 h-5" />
                </CtaButton>
              </div>
            </Reveal>
          </div>
          {visual && (
            <div className="flex-1 w-full">
              <Reveal y={40}>
                <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 aspect-square md:aspect-[4/3] flex items-center justify-center p-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10" />
                  {visual}
                </div>
              </Reveal>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
