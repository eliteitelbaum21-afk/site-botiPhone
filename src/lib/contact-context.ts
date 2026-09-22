import type { LeadIntent } from "./leads";

export interface ContactContext {
  intent: LeadIntent;
  plan?: string;
  planName?: string;
  planPrice?: number;
  page?: string;
  title: string;
  subtitle: string;
  source: string;
  submitLabel: string;
  successMessage: string;
}

export const DEFAULT_CONTACT_CONTEXT: ContactContext = {
  intent: "contact",
  title: "בואו נדבר",
  subtitle: "השאירו פרטים ונציג יחזור אליכם",
  source: "modal",
  submitLabel: "שליחת פרטים",
  successMessage: "קיבלנו את פנייתכם. נחזור אליכם בהקדם.",
};

export function buildContactContext(
  partial: Partial<ContactContext> & { intent?: LeadIntent }
): ContactContext {
  const intent = partial.intent ?? "contact";

  if (intent === "plan" && partial.plan) {
    const planLabel = partial.planName ?? partial.plan;
    return {
      ...DEFAULT_CONTACT_CONTEXT,
      ...partial,
      intent: "plan",
      title: `בחירת ${planLabel}`,
      subtitle: partial.planPrice
        ? `${partial.planPrice.toLocaleString()} ₪ — השאירו פרטים ונחזור אליכם להתחלה`
        : "השאירו פרטים ונחזור אליכם עם הצעה מותאמת",
      submitLabel: "אישור בחירת חבילה",
      successMessage: `קיבלנו את בקשתכם לחבילת ${planLabel}. נחזור אליכם בהקדם.`,
    };
  }

  return {
    ...DEFAULT_CONTACT_CONTEXT,
    ...partial,
    intent: "contact",
    title: partial.title ?? "יצירת קשר",
    subtitle: partial.subtitle ?? "השאירו פרטים ונציג יחזור אליכם",
    submitLabel: partial.submitLabel ?? "שליחת פרטים",
    successMessage: partial.successMessage ?? "קיבלנו את פנייתכם. נחזור אליכם בהקדם.",
  };
}
