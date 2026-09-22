export const site = {
  name: "BotiPhone",
  legalName: "BotiPhone Management",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.botiphone.com",
  tagline: "מרכזייה עסקית חכמה עם AI מובנה",
  description:
    "BotiPhone — מרכזייה בענן מתקדמת עם ניהול נציגים, סיכום שיחה למייל ו-AI שמנתח שיחות עם הקשר מהעבר. כולל CRM, אינטגרציות, סוכני AI וקמפיינים אוטומטיים.",
  phone: "03-9306454",
  phoneIntl: "+97239306454",
  whatsapp: "972527686857",
  email: "support@botiphone.com",
  address: "תל אביב, ישראל",
  appUrl: "https://pbx.botiphone.com/",
} as const;

export function absoluteUrl(path: string): string {
  return `${site.url}${path}`;
}
