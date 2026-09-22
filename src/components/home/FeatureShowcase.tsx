import Link from "next/link";
import { ArrowLeft, Zap } from "lucide-react";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export interface ShowcaseBullet {
  icon: ReactNode;
  title: string;
  desc: string;
}

interface FeatureShowcaseProps {
  title: string;
  subtitle: string;
  description: string;
  bullets: ShowcaseBullet[];
  visual: ReactNode;
  imageSide?: "left" | "right";
  href: string;
  linkLabel: string;
}

export default function FeatureShowcase({
  title,
  subtitle,
  description,
  bullets,
  visual,
  imageSide = "left",
  href,
  linkLabel,
}: FeatureShowcaseProps) {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col lg:flex-row items-center gap-16 ${
            imageSide === "right" ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="flex-1 space-y-8">
            <Reveal>
              <div>
                <p className="text-brand-secondary font-bold tracking-wider uppercase mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  {subtitle}
                </p>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">{title}</h2>
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed">{description}</p>
              </div>
            </Reveal>

            <div className="space-y-6">
              {bullets.map((bullet, idx) => (
                <Reveal key={idx} delay={idx * 0.08}>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                      {bullet.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{bullet.title}</h3>
                      <p className="text-gray-400">{bullet.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <Link
                href={href}
                className="inline-flex items-center gap-2 text-brand-accent hover:text-white transition-colors font-bold text-lg"
              >
                {linkLabel} <ArrowLeft className="w-5 h-5" />
              </Link>
            </Reveal>
          </div>

          <div className="flex-1 w-full">
            <Reveal y={40}>
              <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 aspect-square md:aspect-[4/3] flex items-center justify-center p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10" />
                {visual}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
