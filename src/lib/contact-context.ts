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
  intent: "demo",
  title: "בואו נדבר",
  subtitle: "השאירו פרטים ונחזור אליכם עם הדגמה חינם",
  source: "modal",
  submitLabel: "קבלו הדגמה בחינם",
  successMessage: "נציג שלנו יחזור אליכם בהקדם לתיאום הדגמה.",
};

export function buildContactContext(
  partial: Partial<ContactContext> & { intent?: LeadIntent }
): ContactContext {
  const intent = partial.intent ?? "demo";

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

  if (intent === "contact") {
    return {
      ...DEFAULT_CONTACT_CONTEXT,
      ...partial,
      intent: "contact",
      title: "יצירת קשר",
      subtitle: "השאירו פרטים ונציג יחזור אליכם",
      submitLabel: "שליחת פרטים",
      successMessage: "קיבלנו את פנייתכם. נחזור אליכם בהקדם.",
    };
  }

  return {
    ...DEFAULT_CONTACT_CONTEXT,
    ...partial,
    intent: "demo",
    title: partial.title ?? "בקשת הדגמה",
    subtitle: partial.subtitle ?? "השאירו פרטים ונתאם הדגמה חינם",
    submitLabel: partial.submitLabel ?? "קבלו הדגמה בחינם",
    successMessage: partial.successMessage ?? "נציג שלנו יחזור אליכם בהקדם לתיאום הדגמה.",
  };
}
