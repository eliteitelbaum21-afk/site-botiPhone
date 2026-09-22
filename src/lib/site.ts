export const site = {
  name: "BotiPhone",
  legalName: "BotiPhone Management",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.botiphone.com",
  tagline: "בוט טלפוני חכם, קמפיינים אוטומטיים ומרכזיה בענן",
  description:
    "BotiPhone — בוט טלפוני מבוסס AI שעונה לשיחות 24/6, קמפיין שיחות אוטומטי שמחייג לאלפי לידים, ומרכזיה בענן מתקדמת לעסק. הדגמה חינם.",
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
