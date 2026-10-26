/**
 * One source for the product pages: navbar dropdown, footer, home page grid
 * and "related products" on every product page.
 * group "pbx" = the phone system every business needs.
 * group "smart" = the innovation layer (AI, campaigns, CRM, API).
 */
export type ProductGroup = "pbx" | "smart";

export interface ProductLink {
  href: string;
  label: string;
  short: string;
  group: ProductGroup;
}

export const products: ProductLink[] = [
  { href: "/cloud-pbx", label: "מרכזיה בענן", short: "מרכזייה וירטואלית מלאה לעסק, בלי חומרה", group: "pbx" },
  { href: "/ivr", label: "תפריט קולי ומענה קולי", short: "\"לשירות הקש 1\", פתיחים וניתוב לפי שעות", group: "pbx" },
  { href: "/call-center", label: "נציגים ותור המתנה", short: "חיוג לנציגים, תור, סטטוס ודוחות", group: "pbx" },
  { href: "/call-recording", label: "הקלטת שיחות ותמלול", short: "כל שיחה מוקלטת, מתומללת ומסוכמת", group: "pbx" },
  { href: "/pbx-migration", label: "מעבר ממרכזייה ישנה", short: "עוברים לענן ושומרים על המספר", group: "pbx" },
  { href: "/voice-bot", label: "בוט קולי AI", short: "נציג דיגיטלי שעונה בעברית", group: "smart" },
  { href: "/campaigns", label: "קמפיין שיחות אוטומטי", short: "חיוג יוצא עם סינון לידים", group: "smart" },
  { href: "/crm", label: "CRM מובנה", short: "כרטיס לקוח שקופץ עם השיחה", group: "smart" },
  { href: "/api-integrations", label: "API ואינטגרציות", short: "חיבור המרכזייה למערכות שלכם", group: "smart" },
];

export const pbxProducts = products.filter((p) => p.group === "pbx");
export const smartProducts = products.filter((p) => p.group === "smart");

export function relatedProducts(href: string, count = 3): ProductLink[] {
  const self = products.find((p) => p.href === href);
  const same = products.filter((p) => p.href !== href && p.group === self?.group);
  const other = products.filter((p) => p.href !== href && p.group !== self?.group);
  return [...same, ...other].slice(0, count);
}
