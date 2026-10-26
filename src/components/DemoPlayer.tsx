"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from "react";
import { Bot, Pause, Phone, Play, User } from "lucide-react";
import type { BotDemo, DemoLine } from "@/lib/demos";

const PLAY_EVENT = "botiphone:demo-play";

const who: Record<DemoLine["who"], { label: string; icon: React.ReactNode; tone: string }> = {
  caller: { label: "מתקשר", icon: <Phone className="w-3.5 h-3.5" />, tone: "bg-white/10 text-gray-200" },
  bot: { label: "בוט", icon: <Bot className="w-3.5 h-3.5" />, tone: "bg-brand-primary/20 text-brand-accent" },
  agent: { label: "נציג", icon: <User className="w-3.5 h-3.5" />, tone: "bg-emerald-500/15 text-emerald-200" },
};

function formatTime(sec: number): string {
  if (!Number.isFinite(sec) || sec < 0) sec = 0;
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function parseDuration(d: string): number {
  const [m, s] = d.split(":").map(Number);
  return (m || 0) * 60 + (s || 0);
}

/** Pauses every demo player except `id` (null pauses all). */
export function pauseOtherDemos(id: string | null) {
  window.dispatchEvent(new CustomEvent(PLAY_EVENT, { detail: id }));
}

export default function DemoPlayer({ demo }: { demo: BotDemo }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const transcriptRef = useRef<HTMLOListElement>(null);
  const lineRefs = useRef<(HTMLLIElement | null)[]>([]);
  const draggingRef = useRef(false);

  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(() => parseDuration(demo.duration));

  const active = demo.lines.reduce((acc, line, i) => (line.at <= current + 0.05 ? i : acc), -1);

  useEffect(() => {
    const onOtherPlay = (e: Event) => {
      if ((e as CustomEvent<string | null>).detail !== demo.id) audioRef.current?.pause();
    };
    window.addEventListener(PLAY_EVENT, onOtherPlay);
    return () => window.removeEventListener(PLAY_EVENT, onOtherPlay);
  }, [demo.id]);

  // rAF while playing keeps the bar smooth; timeupdate alone ticks ~4×/sec
  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    const tick = () => {
      if (audioRef.current && !draggingRef.current) setCurrent(audioRef.current.currentTime);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing]);

  // keep the active line visible inside the transcript box without scrolling the page
  useEffect(() => {
    const box = transcriptRef.current;
    const el = lineRefs.current[active];
    if (!box || !el) return;
    const top = el.offsetTop - box.offsetTop;
    if (top < box.scrollTop || top + el.offsetHeight > box.scrollTop + box.clientHeight) {
      box.scrollTo({ top: top - box.clientHeight / 3, behavior: "smooth" });
    }
  }, [active]);

  const play = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    pauseOtherDemos(demo.id);
    audio.play().catch(() => setPlaying(false));
  }, [demo.id]);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) play();
    else audio.pause();
  };

  const seek = useCallback(
    (sec: number) => {
      const audio = audioRef.current;
      const t = Math.min(Math.max(sec, 0), duration || sec);
      setCurrent(t);
      if (audio) audio.currentTime = t;
    },
    [duration],
  );

  // media timelines stay LTR on RTL pages (same as the time readout)
  const fractionFromPointer = (clientX: number) => {
    const rect = barRef.current!.getBoundingClientRect();
    return Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    setCurrent(fractionFromPointer(e.clientX) * duration);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (draggingRef.current) setCurrent(fractionFromPointer(e.clientX) * duration);
  };
  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    seek(fractionFromPointer(e.clientX) * duration);
  };

  const onSliderKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = 5;
    const map: Record<string, number> = {
      ArrowRight: current + step,
      ArrowUp: current + step,
      ArrowLeft: current - step,
      ArrowDown: current - step,
      PageUp: current + 15,
      PageDown: current - 15,
      Home: 0,
      End: duration,
    };
    if (e.key in map) {
      e.preventDefault();
      seek(map[e.key]);
    }
  };

  const jumpToLine = (line: DemoLine) => {
    seek(line.at);
    play();
  };

  const progress = duration > 0 ? Math.min(current / duration, 1) * 100 : 0;

  return (
    <div className="glass-panel rounded-2xl p-5 md:p-7">
      <audio
        ref={audioRef}
        src={demo.audio}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => !draggingRef.current && setCurrent(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => Number.isFinite(e.currentTarget.duration) && setDuration(e.currentTarget.duration)}
      />

      <div className="flex items-center gap-4 mb-6">
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? `השהיית ההקלטה: ${demo.title}` : `השמעת ההקלטה: ${demo.title}`}
          className="w-14 h-14 md:w-16 md:h-16 shrink-0 rounded-full bg-brand-primary text-brand-navy flex items-center justify-center hover:shadow-[0_0_30px_rgba(201,154,62,0.5)] transition-shadow focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-accent"
        >
          {playing ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current translate-x-0.5" />}
        </button>
        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-white text-lg leading-snug">{demo.title}</h3>
          <div className="mt-3 flex items-center gap-3" dir="ltr">
            <div
              ref={barRef}
              role="slider"
              tabIndex={0}
              aria-label="מיקום בהקלטה"
              aria-valuemin={0}
              aria-valuemax={Math.round(duration)}
              aria-valuenow={Math.round(current)}
              aria-valuetext={`${formatTime(current)} מתוך ${formatTime(duration)}`}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={() => (draggingRef.current = false)}
              onKeyDown={onSliderKey}
              className="group relative flex-1 h-6 flex items-center cursor-pointer touch-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent rounded-full"
            >
              <div className="relative w-full h-1.5 rounded-full bg-white/15">
                <div className="absolute inset-y-0 left-0 rounded-full bg-brand-primary" style={{ width: `${progress}%` }} />
                <div
                  className="absolute top-1/2 w-4 h-4 -translate-y-1/2 -translate-x-1/2 rounded-full bg-brand-accent shadow ring-4 ring-brand-primary/25 group-hover:scale-110 transition-transform"
                  style={{ left: `${progress}%` }}
                />
              </div>
            </div>
            <span className="text-sm text-gray-400 tabular-nums shrink-0">
              {formatTime(current)} / {formatTime(duration)}
            </span>
          </div>
        </div>
      </div>

      <ol
        ref={transcriptRef}
        className="relative max-h-80 overflow-y-auto space-y-2 pl-1 -ml-1"
        aria-label={`תמלול השיחה: ${demo.title}`}
      >
        {demo.lines.map((line, i) => {
          const isActive = i === active;
          return (
            <li key={i} ref={(el) => void (lineRefs.current[i] = el)}>
              <button
                type="button"
                onClick={() => jumpToLine(line)}
                aria-current={isActive ? "true" : undefined}
                className={`w-full text-right rounded-xl px-4 py-3 border transition-colors focus-visible:outline-2 focus-visible:outline-brand-accent ${
                  isActive
                    ? "bg-brand-primary/10 border-brand-primary/40"
                    : "bg-white/[0.02] border-transparent hover:bg-white/5"
                }`}
              >
                <span className="flex items-center justify-between gap-3 mb-1">
                  <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${who[line.who].tone}`}>
                    {who[line.who].icon}
                    {who[line.who].label}
                  </span>
                  <span className="text-xs text-gray-400 tabular-nums" dir="ltr">
                    {formatTime(line.at)}
                  </span>
                </span>
                <span className={`block leading-relaxed ${isActive ? "text-white" : "text-gray-300"}`}>{line.text}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export function DemoTabs({ demos }: { demos: BotDemo[] }) {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (i: number) => {
    pauseOtherDemos(null);
    setSelected(i);
    tabRefs.current[i]?.focus();
  };

  // RTL: ArrowLeft moves to the next tab
  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    const last = demos.length - 1;
    const next: Record<string, number> = {
      ArrowLeft: selected === last ? 0 : selected + 1,
      ArrowRight: selected === 0 ? last : selected - 1,
      Home: 0,
      End: last,
    };
    if (e.key in next) {
      e.preventDefault();
      select(next[e.key]);
    }
  };

  return (
    <div>
      <div role="tablist" aria-label="הקלטות לפי סוג עסק" onKeyDown={onKey} className="flex flex-wrap justify-center gap-2 mb-6">
        {demos.map((d, i) => (
          <button
            key={d.id}
            ref={(el) => void (tabRefs.current[i] = el)}
            type="button"
            role="tab"
            id={`demo-tab-${d.id}`}
            aria-selected={i === selected}
            aria-controls={`demo-panel-${d.id}`}
            tabIndex={i === selected ? 0 : -1}
            onClick={() => select(i)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors ${
              i === selected
                ? "bg-brand-primary text-brand-navy border-brand-primary"
                : "border-white/10 text-gray-300 hover:border-brand-primary/50 hover:text-white"
            }`}
          >
            {d.business}
          </button>
        ))}
      </div>
      {demos.map((d, i) => (
        <div key={d.id} role="tabpanel" id={`demo-panel-${d.id}`} aria-labelledby={`demo-tab-${d.id}`} hidden={i !== selected}>
          <DemoPlayer demo={d} />
        </div>
      ))}
    </div>
  );
}
