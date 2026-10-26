"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/* One label per product, each with its own lines. Claims match the product pages. */
const groups: { label: string; lines: string[] }[] = [
  {
    label: "מרכזייה",
    lines: ["שלוחות, תפריט קולי וניתוב לפי שעות", "עוברים לענן ושומרים על המספר", "כל שיחה מוקלטת ונשמרת"],
  },
  {
    label: "סוכני AI",
    lines: ["מבין עברית חופשית ועונה מיד", "קובע פגישות ואוסף פרטים לבד", "זמין 24/6, בלי זמן המתנה"],
  },
  {
    label: "קמפיינים",
    lines: ["חיוג יוצא אוטומטי לרשימות שלכם", "רק לידים מעוניינים מגיעים לנציג"],
  },
  {
    label: "מערכת לידים ו-CRM",
    lines: ["כרטיס לקוח שקופץ עם השיחה", "כל ליד וכל שיחה במקום אחד"],
  },
  {
    label: "ניהול נציגים מתקדם",
    lines: ["דוחות וסטטיסטיקות מתקדמים", "תמלול וסיכום לכל שיחה", "כל הנתונים בלייב, ודירוג נציגים"],
  },
];

const items = groups.flatMap((g) => g.lines.map((line) => ({ label: g.label, line })));

export default function HeroTicker({ className = "" }: { className?: string }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((n) => (n + 1) % items.length), 3200);
    return () => clearInterval(t);
  }, [reduce]);

  const { label, line } = items[i];

  return (
    <div className={className} aria-live="off">
      <div className="relative h-5 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 top-0 flex items-center gap-2 text-sm font-medium text-brand-accent justify-center lg:justify-start"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
            {label}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="relative h-9 mt-1.5 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute inset-x-0 top-0 text-xl xl:text-2xl font-bold leading-9 text-white whitespace-nowrap"
          >
            {line}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
