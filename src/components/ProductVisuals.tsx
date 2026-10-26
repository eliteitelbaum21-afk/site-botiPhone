import { ArrowDown, Building2, Cloud, FileText, Phone, Sparkles } from "lucide-react";

/** IVR: a caller enters a menu that splits into departments. */
export function IvrVisual() {
  const branches = [
    { key: "1", label: "שירות" },
    { key: "2", label: "מכירות" },
    { key: "3", label: "הנהלת חשבונות" },
  ];
  return (
    <div className="relative z-10 w-full max-w-sm text-center">
      <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-sm text-gray-200">
        <Phone className="w-4 h-4 text-brand-accent" /> שיחה נכנסת
      </div>
      <ArrowDown className="w-5 h-5 mx-auto my-3 text-gray-400" />
      <div className="rounded-2xl bg-brand-primary/15 border border-brand-primary/40 p-4 text-right">
        <div className="text-xs text-brand-accent font-semibold mb-1">פתיח</div>
        <p className="text-white text-sm leading-relaxed">
          &quot;שלום, הגעתם ל... לשירות הקישו 1, למכירות 2, להנהלת חשבונות 3&quot;
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-5">
        {branches.map((b) => (
          <div key={b.key} className="rounded-xl bg-white/5 border border-white/10 p-3">
            <div className="w-8 h-8 mx-auto rounded-lg bg-brand-secondary/40 text-white font-bold flex items-center justify-center mb-2">
              {b.key}
            </div>
            <div className="text-xs text-gray-300">{b.label}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 text-xs text-gray-400 bg-white/5 rounded-xl px-3 py-2 border border-white/5">
        אחרי 18:00 ובשבת: &quot;המשרד סגור, נשמח לחזור אליכם&quot;
      </div>
    </div>
  );
}

/** Call center: live status of agents and the queue. */
export function CallCenterVisual() {
  const agents = [
    { name: "דנה", state: "בשיחה · 03:12", dot: "bg-amber-400" },
    { name: "יוסי", state: "פנוי", dot: "bg-emerald-400" },
    { name: "מירב", state: "פנוי", dot: "bg-emerald-400" },
    { name: "אבי", state: "לא מחובר", dot: "bg-gray-500" },
  ];
  return (
    <div className="relative z-10 w-full max-w-sm">
      <div className="grid grid-cols-3 gap-3 mb-4 text-center">
        {[
          { v: "2", l: "בתור" },
          { v: "94%", l: "נענו היום" },
          { v: "0:18", l: "המתנה ממוצעת" },
        ].map((s) => (
          <div key={s.l} className="rounded-xl bg-white/5 border border-white/10 p-3">
            <div className="text-2xl font-bold text-white">{s.v}</div>
            <div className="text-[11px] text-gray-400">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-3">
        {agents.map((a) => (
          <div key={a.name} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-gray-200">
              <span className={`w-2.5 h-2.5 rounded-full ${a.dot}`} />
              {a.name}
            </span>
            <span className="text-gray-400 text-xs">{a.state}</span>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-gray-400 text-center mt-3">המחשה</p>
    </div>
  );
}

/** Recording: waveform → transcript → AI summary. */
export function RecordingVisual() {
  const bars = [6, 14, 22, 10, 28, 18, 8, 24, 30, 12, 20, 26, 9, 16, 28, 14, 7, 22, 18, 10, 26, 12];
  return (
    <div className="relative z-10 w-full max-w-sm space-y-4">
      <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
        <div className="flex items-end justify-center gap-1 h-10">
          {bars.map((h, i) => (
            <span key={i} className={`w-1.5 rounded-full ${i % 2 ? "bg-brand-primary" : "bg-brand-secondary"}`} style={{ height: h }} />
          ))}
        </div>
        <div className="flex justify-between text-[11px] text-gray-400 mt-2">
          <span>לקוח</span>
          <span>04:37</span>
          <span>נציג</span>
        </div>
      </div>
      <div className="rounded-2xl bg-white/5 border border-white/10 p-4 text-right space-y-2">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <FileText className="w-3.5 h-3.5" /> תמלול
        </div>
        <p className="text-sm text-gray-300"><b className="text-white">לקוח:</b> רציתי לברר למה החשבונית גבוהה החודש</p>
        <p className="text-sm text-gray-300"><b className="text-white">נציג:</b> אני בודק... רואה חיוב כפול, אני מבטל אותו</p>
      </div>
      <div className="rounded-2xl bg-brand-primary/15 border border-brand-primary/40 p-4 text-right">
        <div className="flex items-center gap-2 text-xs text-brand-accent font-semibold mb-1">
          <Sparkles className="w-3.5 h-3.5" /> סיכום AI
        </div>
        <p className="text-sm text-white">חיוב כפול בחשבונית. בוצע ביטול. הלקוח מרוצה, אין צורך במעקב.</p>
      </div>
    </div>
  );
}

/** Migration: old box in the office → cloud, same number. */
export function MigrationVisual() {
  return (
    <div className="relative z-10 w-full max-w-sm text-center">
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 rounded-2xl bg-white/5 border border-white/10 p-5">
          <Building2 className="w-10 h-10 mx-auto text-gray-400 mb-2" />
          <div className="text-sm text-gray-300 font-semibold">מרכזייה ישנה</div>
          <div className="text-[11px] text-gray-400 mt-1">ארון, כבלים, טכנאי</div>
        </div>
        <div className="text-brand-accent text-2xl font-black">←</div>
        <div className="flex-1 rounded-2xl bg-brand-primary/15 border border-brand-primary/40 p-5">
          <Cloud className="w-10 h-10 mx-auto text-brand-accent mb-2" />
          <div className="text-sm text-white font-semibold">מרכזיה בענן</div>
          <div className="text-[11px] text-gray-300 mt-1">מנוהלת מהדפדפן</div>
        </div>
      </div>
      <div className="mt-6 rounded-2xl bg-white/5 border border-white/10 p-4">
        <div className="text-xs text-gray-400 mb-1">המספר של העסק</div>
        <div dir="ltr" className="text-2xl font-bold tracking-wider text-white">03-XXX-XXXX</div>
        <div className="text-xs text-emerald-300 mt-1">נשאר אותו מספר ✓</div>
      </div>
    </div>
  );
}
