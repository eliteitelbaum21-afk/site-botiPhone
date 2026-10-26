import { ArrowLeft, Bot, Check, Phone } from "lucide-react";
import CtaButton from "@/components/CtaButton";
import Reveal from "@/components/Reveal";
import HeroTicker from "@/components/home/HeroTicker";
import { site } from "@/lib/site";

const promises = ["שומרים על המספר הקיים", "בלי חומרה ובלי טכנאי", "עולים לאוויר תוך ימים", "תמיכה אישית בעברית"];

const products = [
  { name: "מרכזייה", accent: false },
  { name: "סוכני AI", accent: true },
  { name: "קמפיינים", accent: false },
  { name: "מערכת לידים ו-CRM", accent: false },
  { name: "ניהול נציגים מתקדם", accent: false },
];

/* The animated bot. `size` = outer box classes. */
function BotOrb({ size, icon, eq = true }: { size: string; icon: string; eq?: boolean }) {
  return (
    <div className={`relative shrink-0 ${size}`} aria-hidden="true">
      <span className="absolute -inset-[20%] rounded-full bg-brand-primary/10 blur-2xl" />
      <span className="hero-ring absolute inset-0 rounded-full border border-brand-primary/50" />
      <span className="hero-ring absolute inset-0 rounded-full border border-brand-accent/40 [animation-delay:1.4s]" />
      <span className="absolute inset-[10%] rounded-full border border-brand-primary/40 bg-gradient-to-b from-brand-card to-brand-deep shadow-[0_0_70px_-12px_rgba(201,154,62,0.5)] flex items-center justify-center">
        <Bot className={`${icon} text-brand-accent`} strokeWidth={1.6} />
      </span>
      {eq && (
        <span className="hero-eq absolute -bottom-[6%] inset-x-0 flex items-end justify-center gap-[3%] h-[16%]">
          {[0, 0.15, 0.3, 0.45, 0.2, 0.35, 0.1].map((delay, i) => (
            <i
              key={i}
              className="block w-[3%] min-w-[3px] h-full rounded-full bg-brand-accent"
              style={{ animationDelay: `${delay}s` }}
            />
          ))}
        </span>
      )}
    </div>
  );
}

/*
 * Desktop composition (RTL): a diagonal.
 *   top-right: badge            top-left: big "5 products"
 *                       centre: bot
 *   bottom-right: headline + CTA    bottom-left: rotating product line
 * A curved "signal" line runs down the middle and through the bot.
 *
 * Mobile: headline with a small bot beside it, short copy, CTA, promises —
 * then a separated, centred "5 products" block with the ticker.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid pt-24 pb-14 lg:pt-20 lg:pb-0 lg:h-[100svh] lg:min-h-[700px] lg:max-h-[980px]">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[700px] bg-brand-secondary/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-[520px] h-[520px] bg-brand-primary/10 rounded-full blur-[130px] pointer-events-none" />

      {/* signal line: an S-curve down the middle gutter, through the bot (desktop only) */}
      <svg
        className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="hero-signal-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c99a3e" stopOpacity="0" />
            <stop offset="0.3" stopColor="#c99a3e" stopOpacity="0.55" />
            <stop offset="0.7" stopColor="#e2c27d" stopOpacity="0.55" />
            <stop offset="1" stopColor="#e2c27d" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M 470 40 C 470 260, 560 320, 500 520 S 430 800, 520 990"
          fill="none"
          stroke="url(#hero-signal-grad)"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
        <path
          className="hero-signal-pulse"
          d="M 470 40 C 470 260, 560 320, 500 520 S 430 800, 520 990"
          fill="none"
          stroke="#f1dda6"
          strokeWidth="2.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          pathLength={100}
        />
      </svg>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid h-full grid-cols-1 gap-y-6 lg:grid-cols-12 lg:gap-x-8 lg:py-10">
          {/* badge — top right */}
          <Reveal className="lg:row-start-1 lg:col-start-1 lg:col-span-5 lg:self-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full bg-white/5 border border-brand-primary/30">
              <span className="w-1.5 h-4 rounded-full bg-brand-primary" />
              <span className="text-xs lg:text-sm font-medium text-brand-accent">מרכזיית ענן חכמה לעסקים</span>
            </div>
          </Reveal>

          {/* headline + CTA — bottom right on desktop */}
          <div className="flex flex-col lg:row-start-1 lg:col-start-1 lg:col-span-5 lg:self-end">
            <Reveal delay={0.1} className="order-1">
              <div className="flex items-center justify-between gap-4 mb-4 lg:mb-5">
                <h1 className="text-[2.2rem] min-[380px]:text-[2.6rem] sm:text-5xl lg:text-[3.6rem] xl:text-[4rem] font-black leading-[1.08]">
                  הדור הבא <span className="whitespace-nowrap">של המרכזיות</span> <br />
                  <span className="text-gradient">כבר כאן.</span>
                </h1>
                <div className="lg:hidden ms-auto pe-2">
                  <BotOrb size="w-[4.5rem] h-[4.5rem] min-[380px]:w-24 min-[380px]:h-24 sm:w-28 sm:h-28" icon="w-7 h-7 min-[380px]:w-9 min-[380px]:h-9 sm:w-10 sm:h-10" />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2} className="order-2">
              <p className="text-base lg:text-lg text-gray-300 mb-6 leading-relaxed max-w-md">
                מרכזייה יציבה: שלוחות, תפריט קולי, נציגים והקלטות, כמו שאתם מכירים.{" "}
                <span className="text-white font-semibold">ובלחיצת כפתור משלבים AI.</span>
              </p>
            </Reveal>

            <Reveal delay={0.25} className="order-4 lg:order-3">
              <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 max-w-md text-[12px] min-[380px]:text-[13px] sm:text-[15px] mt-6 lg:mt-0">
                {promises.map((p) => (
                  <li key={p} className="flex items-center gap-1.5 sm:gap-2 text-gray-200 whitespace-nowrap">
                    <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-brand-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-accent" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.3} className="order-3 lg:order-4">
              <div className="flex gap-2.5 sm:gap-3 lg:mt-8">
                <CtaButton
                  variant="primary"
                  className="flex-1 sm:flex-none whitespace-nowrap !px-4 !py-3.5 !text-[15px] min-[380px]:!text-base sm:!px-6 lg:!px-8 lg:!py-4 lg:!text-lg"
                  intent="contact"
                  source="hero"
                >
                  דברו עם נציג
                  <ArrowLeft className="w-5 h-5" />
                </CtaButton>
                <a
                  href={`tel:${site.phoneIntl}`}
                  className="flex-1 sm:flex-none whitespace-nowrap px-4 py-3.5 text-[15px] min-[380px]:text-base sm:px-6 lg:px-8 lg:py-4 lg:text-lg rounded-full font-bold border border-white/15 bg-white/5 hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5 text-brand-accent" />
                  <span dir="ltr">{site.phone}</span>
                </a>
              </div>
              <p className="hidden lg:block mt-3 text-sm text-gray-400">ניסיון מתחיל בשיחה עם נציג.</p>
            </Reveal>
          </div>

          {/* bot — centre, on the signal line (desktop) */}
          <Reveal delay={0.15} className="hidden lg:flex justify-center lg:row-start-1 lg:col-start-5 lg:col-span-4 lg:self-center">
            <BotOrb size="w-48 h-48 xl:w-52 xl:h-52" icon="w-16 h-16 xl:w-20 xl:h-20" />
          </Reveal>

          {/* 5 products — top left on desktop; a separated, centred block on mobile */}
          <Reveal
            delay={0.2}
            className="mt-6 pt-10 border-t border-white/10 text-center lg:mt-0 lg:pt-2 lg:border-0 lg:text-right lg:row-start-1 lg:col-start-8 lg:col-span-5 lg:self-start lg:justify-self-end"
          >
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="text-[6.5rem] lg:text-[9rem] xl:text-[10rem] font-black leading-[0.8] text-gradient drop-shadow-[0_0_40px_rgba(201,154,62,0.25)]">
                5
              </span>
              <span className="text-[1.7rem] lg:text-3xl xl:text-4xl font-bold leading-[1.15] text-white text-right">
                מוצרים
                <br />
                בממשק אחד
              </span>
            </div>
            <p className="mt-5 mx-auto lg:mx-0 max-w-xs lg:max-w-sm xl:max-w-none text-[15px] lg:text-base leading-relaxed text-gray-300 xl:whitespace-nowrap">
              {products.map((p, i) => (
                <span key={p.name}>
                  <span className={p.accent ? "text-brand-accent font-semibold" : "text-white"}>{p.name}</span>
                  {i < products.length - 1 && ", "}
                </span>
              ))}
            </p>
          </Reveal>

          {/* rotating product line — bottom left on desktop */}
          <Reveal
            delay={0.35}
            className="text-center lg:text-right lg:row-start-1 lg:col-start-8 lg:col-span-5 lg:self-end lg:justify-self-end lg:mb-10 w-full lg:max-w-sm"
          >
            <HeroTicker className="mt-2 lg:mt-0" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
