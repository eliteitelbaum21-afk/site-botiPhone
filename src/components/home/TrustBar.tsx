import { MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

const itemClass = "flex items-center gap-2 text-sm md:text-base text-gray-300";
const iconClass = "w-4 h-4 md:w-5 md:h-5 text-brand-accent shrink-0";

export default function TrustBar() {
  return (
    <section className="border-y border-white/5 bg-brand-deep" aria-label="פרטי התקשרות ותמיכה">
      <ul className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 justify-items-center">
        <li>
          <a href={`tel:${site.phoneIntl}`} className={`${itemClass} hover:text-white transition-colors`}>
            <Phone className={iconClass} />
            <span dir="ltr" className="font-semibold">{site.phone}</span>
          </a>
        </li>
        <li>
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${itemClass} hover:text-white transition-colors`}
          >
            <MessageCircle className={iconClass} />
            וואטסאפ
          </a>
        </li>
        <li className={itemClass}>
          <ShieldCheck className={iconClass} />
          חברה ישראלית, תמיכה בעברית
        </li>
        {/* TODO: לאשר — "שיחת ייעוץ ללא התחייבות". When approved, add it as a 4th item and switch the grid to sm:grid-cols-2 lg:grid-cols-4 */}
      </ul>
    </section>
  );
}
