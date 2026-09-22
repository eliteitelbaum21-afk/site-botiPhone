"use client";

import { Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function FloatingCta() {
  return (
    <div className="fixed bottom-5 left-5 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("היי, אשמח לשמוע על המרכזייה והמערכת של BotiPhone")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="שיחה בוואטסאפ"
        className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
      <a
        href={`tel:${site.phoneIntl}`}
        aria-label="חיוג אלינו"
        className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-lg shadow-brand-primary/30 hover:scale-110 transition-transform"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
