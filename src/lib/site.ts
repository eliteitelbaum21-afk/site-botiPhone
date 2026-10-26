export const site = {
  name: "BotiPhone",
  legalName: "BotiPhone Management",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.botiphone.com",
  tagline: "מרכזיית ענן חכמה",
  description:
    "BotiPhone — מרכזייה לעסק בענן: תפריט קולי, שלוחות, נציגים ותור המתנה, הקלטת שיחות ודוחות, עם ניוד המספר הקיים. וכשרוצים: בוט קולי AI, קמפיינים יוצאים, CRM ו-API.",
  phone: "03-9306454",
  phoneIntl: "+97239306454",
  whatsapp: "972527686857",
  email: "support@botiphone.com",
  address: "תל אביב, ישראל",
  appUrl: "https://pbx.botiphone.com/",
  /** TODO: לאשר — a number visitors can call to talk to the bot. Shown next to the demo player when set. */
  demoPhone: "" as string,
} as const;

export function absoluteUrl(path: string): string {
  return `${site.url}${path}`;
}
