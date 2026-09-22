import { Bot, PhoneOutgoing } from "lucide-react";

export function VoiceBotVisual() {
  return (
    <div className="relative z-10 text-center w-full max-w-sm">
      <div className="w-24 h-24 mx-auto bg-brand-primary/20 rounded-full flex items-center justify-center mb-8 relative">
        <div className="absolute inset-0 rounded-full border-2 border-brand-primary animate-ping opacity-20" />
        <Bot className="w-12 h-12 text-brand-primary" />
      </div>
      <div className="space-y-4">
        <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl rounded-tr-none border border-white/20 text-right me-8">
          <p className="text-sm text-gray-300">
            לקוח: &quot;היי, אני רוצה לקבוע פגישת ייעוץ למחר בבוקר&quot;
          </p>
        </div>
        <div className="bg-brand-primary/20 backdrop-blur-md p-4 rounded-2xl rounded-tl-none border border-brand-primary/30 text-right ms-8">
          <p className="text-sm font-medium text-white">
            בוט: &quot;בשמחה! יש לי פנוי מחר ב-10:00 או ב-11:30. מה נוח לך יותר?&quot;
          </p>
        </div>
      </div>
    </div>
  );
}

export function CampaignsVisual() {
  return (
    <div className="relative z-10 text-center w-full">
      <div className="relative inline-block mb-8">
        <div className="w-32 h-32 rounded-full border-4 border-brand-secondary/30 flex items-center justify-center bg-brand-dark">
          <PhoneOutgoing className="w-12 h-12 text-brand-secondary animate-pulse" />
        </div>
        <div className="absolute -right-4 -top-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-green-500/50">
          מאתר ליד חם!
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="bg-white/5 p-3 rounded-xl border border-white/10">
          <div className="text-2xl font-bold text-white">5,000</div>
          <div className="text-xs text-gray-400">שיחות ביום</div>
        </div>
        <div className="bg-white/5 p-3 rounded-xl border border-white/10">
          <div className="text-2xl font-bold text-brand-accent">32%</div>
          <div className="text-xs text-gray-400">אחוז מענה</div>
        </div>
        <div className="bg-white/5 p-3 rounded-xl border border-white/10">
          <div className="text-2xl font-bold text-green-400">145</div>
          <div className="text-xs text-gray-400">לידים חמים</div>
        </div>
      </div>
    </div>
  );
}

export function PbxVisual() {
  return (
    <div className="relative z-10 w-full max-w-sm space-y-4">
      <div className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/10">
        <span className="text-gray-300">ציון איכות שיחה (QA)</span>
        <span className="text-2xl font-bold text-green-400">92</span>
      </div>
      <div className="space-y-3 p-4 bg-white/5 rounded-xl border border-white/10">
        {[
          { label: "אמפתיה", value: 95, color: "bg-brand-primary" },
          { label: "טיפול בהתנגדויות", value: 82, color: "bg-brand-secondary" },
          { label: "עמידה ביעדים", value: 88, color: "bg-brand-accent" },
        ].map((row) => (
          <div key={row.label}>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-400">{row.label}</span>
              <span className="text-white">{row.value}%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className={`h-full ${row.color}`} style={{ width: `${row.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
