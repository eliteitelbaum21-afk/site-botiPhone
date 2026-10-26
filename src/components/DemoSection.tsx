import { Headphones, Phone } from "lucide-react";
import Reveal from "./Reveal";
import DemoPlayer, { DemoTabs } from "./DemoPlayer";
import { demosFor } from "@/lib/demos";
import { site } from "@/lib/site";

interface DemoSectionProps {
  page: string;
  id?: string;
  className?: string;
}

/** Recorded calls with the bot; renders nothing until recordings exist. */
export default function DemoSection({ page, id, className = "" }: DemoSectionProps) {
  const list = demosFor(page);
  if (list.length === 0) return null;

  const headingId = `demo-title-${page.replace(/\W/g, "") || "home"}`;

  return (
    <section id={id} className={`py-24 scroll-mt-20 ${className}`} aria-labelledby={headingId}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-brand-accent font-semibold mb-3">
              <Headphones className="w-5 h-5" /> הקלטה אמיתית
            </div>
            <h2 id={headingId} className="text-3xl md:text-4xl font-bold mb-4">
              תשמעו איך זה נשמע
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              שיחה אמיתית עם המרכזייה: תפריט, ואז נציג דיגיטלי שעונה בעברית.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {list.length > 1 ? <DemoTabs demos={list} /> : <DemoPlayer demo={list[0]} />}
        </Reveal>

        {site.demoPhone && (
          <p className="mt-6 text-center text-gray-300">
            או חייגו עכשיו:{" "}
            <a
              href={`tel:${site.demoPhone.replace(/[^\d+]/g, "")}`}
              dir="ltr"
              className="inline-flex items-center gap-1.5 font-bold text-brand-accent hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              {site.demoPhone}
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
