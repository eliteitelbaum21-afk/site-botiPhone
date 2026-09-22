import Link from "next/link";
import { Bot, LogIn, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

const serviceLinks = [
  { href: "/cloud-pbx", label: "מרכזיה בענן לעסק" },
  { href: "/voice-bot", label: "סוכני AI טלפוניים" },
  { href: "/campaigns", label: "קמפיין שיחות אוטומטי" },
  { href: "/crm", label: "CRM מובנה" },
  { href: "/api-integrations", label: "API ואינטגרציות" },
  { href: "/pricing", label: "מחירון" },
];

const knowledgeLinks = [
  { href: "/blog", label: "כל המאמרים" },
  { href: "/blog/cloud-pbx-guide", label: "המדריך למרכזיה בענן" },
  { href: "/blog/automated-call-campaigns", label: "קמפיין שיחות אוטומטי" },
  { href: "/blog/phone-bot-for-business", label: "בוט טלפוני לעסק" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-deep py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Bot className="w-6 h-6 text-brand-primary" />
              <span className="font-black text-xl tracking-tight">
                Boti<span className="text-brand-accent">Phone</span>
              </span>
            </Link>
            <p className="text-gray-500 max-w-sm leading-relaxed">
              מרכזייה עסקית מתקדמת עם ניהול נציגים, סיכומי שיחה ו-AI מובנה — יחד עם
              CRM, אינטגרציות וקמפיינים אוטומטיים בפלטפורמה אחת.
            </p>
          </div>

          <nav aria-label="שירותים">
            <h2 className="text-white font-bold mb-4 text-base">השירותים שלנו</h2>
            <ul className="space-y-2 text-gray-500">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="מרכז ידע">
            <h2 className="text-white font-bold mb-4 text-base">מרכז ידע</h2>
            <ul className="space-y-2 text-gray-500">
              {knowledgeLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-white font-bold mb-4 text-base">יצירת קשר</h2>
            <ul className="space-y-3 text-gray-500">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-2 hover:text-brand-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phoneIntl}`}
                  className="flex items-center gap-2 hover:text-brand-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">{site.phone}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {site.address}
              </li>
              <li>
                <a
                  href={site.appUrl}
                  className="flex items-center gap-2 hover:text-brand-accent transition-colors font-medium"
                >
                  <LogIn className="w-4 h-4" />
                  כניסה למערכת
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-brand-accent hover:text-white transition-colors font-medium">
                  לעמוד צור קשר ←
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
          <p>
            © {new Date().getFullYear()} {site.legalName}. כל הזכויות שמורות.
          </p>
          <p className="text-gray-700 text-xs max-w-xl text-center md:text-end">
            בוט טלפוני · מענה קולי חכם · קמפיין שיחות אוטומטי · מרכזיה בענן · מרכזייה וירטואלית
            · מרכזייה לעסק
          </p>
        </div>
      </div>
    </footer>
  );
}
