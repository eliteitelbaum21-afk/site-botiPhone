export type LeadIntent = "demo" | "contact" | "plan" | "chat";

export interface LeadPayload {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  intent?: LeadIntent;
  plan?: string;
  planName?: string;
  planPrice?: number;
  page?: string;
  source?: string;
  note?: string;
}

export interface LeadIntakeResult {
  status: "created" | "updated" | "forwarded";
  intake_id: number;
  ignored_fields: string[];
}

/** Shown to the visitor. The CRM detail stays in the server log. */
export class LeadDeliveryError extends Error {
  readonly httpStatus: number;

  constructor(message: string, httpStatus: number) {
    super(message);
    this.name = "LeadDeliveryError";
    this.httpStatus = httpStatus;
  }
}

const DEFAULT_LEADS_URL = "https://pbx.botiphone.com/api/public/leads";
const NOTES_MAX = 2000;

const INTENT_LABELS: Record<LeadIntent, string> = {
  demo: "יצירת קשר",
  contact: "יצירת קשר",
  plan: "בחירת חבילה",
  chat: "פנייה מהצ'אט",
};

export function getIntentLabel(intent?: LeadIntent): string {
  return INTENT_LABELS[intent ?? "contact"];
}

/** Context that is not a CRM column. `notes` is stored on the lead as call notes. */
export function formatLeadNotes(lead: LeadPayload): string | undefined {
  const lines = [`סוג פנייה: ${getIntentLabel(lead.intent)}`];
  if (lead.message?.trim()) lines.push(`הודעה: ${lead.message.trim()}`);
  if (lead.planName?.trim() || lead.plan?.trim()) {
    lines.push(`חבילה: ${(lead.planName ?? lead.plan)!.trim()}`);
  }
  if (lead.planPrice != null) {
    lines.push(`מחיר: ${lead.planPrice.toLocaleString("he-IL")} ₪`);
  }
  if (lead.page?.trim()) lines.push(`עמוד: ${lead.page.trim()}`);
  if (lead.source?.trim()) lines.push(`מקור: ${lead.source.trim()}`);
  if (lead.note?.trim()) lines.push(lead.note.trim());
  const text = lines.join("\n").slice(0, NOTES_MAX);
  return text || undefined;
}

/** Body for POST /api/public/leads. `source_id` is sent only when LEADS_SOURCE_ID is set. */
export function buildPublicLeadBody(lead: LeadPayload): Record<string, unknown> {
  const body: Record<string, unknown> = {
    name: lead.name.trim(),
    phone: lead.phone.trim(),
  };
  const email = lead.email?.trim();
  if (email) body.email = email;
  const notes = formatLeadNotes(lead);
  if (notes) body.notes = notes;
  const sourceId = sourceIdFromEnv();
  if (sourceId != null) body.source_id = sourceId;
  return body;
}

function sourceIdFromEnv(): number | undefined {
  const raw = process.env.LEADS_SOURCE_ID?.trim();
  if (!raw) return undefined;
  const n = Number(raw);
  if (!Number.isInteger(n) || n <= 0) {
    console.error("Lead intake: LEADS_SOURCE_ID must be a positive integer");
    throw new LeadDeliveryError("לא הצלחנו לשמור את הפנייה. נסו שוב.", 502);
  }
  return n;
}

function leadsUrl(): string {
  const raw = process.env.LEADS_API_URL?.trim() || DEFAULT_LEADS_URL;
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    console.error("Lead intake: LEADS_API_URL is not a URL");
    throw new LeadDeliveryError("לא הצלחנו לשמור את הפנייה. נסו שוב.", 502);
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") {
    console.error("Lead intake: LEADS_API_URL must be http or https");
    throw new LeadDeliveryError("לא הצלחנו לשמור את הפנייה. נסו שוב.", 502);
  }
  return url.toString();
}

function userMessage(status: number): string {
  if (status === 422) return "הפרטים לא תקינים. בדקו את הטלפון והאימייל.";
  if (status === 429) return "יותר מדי פניות. נסו שוב בעוד דקה.";
  return "לא הצלחנו לשמור את הפנייה. נסו שוב.";
}

function httpStatusForCrm(status: number): number {
  if (status === 422 || status === 429) return status;
  return 502;
}

export async function processLead(lead: LeadPayload): Promise<LeadIntakeResult> {
  const apiKey = process.env.LEADS_API_KEY?.trim();
  if (!apiKey || !apiKey.startsWith("bk_")) {
    console.error("Lead intake: LEADS_API_KEY is missing or does not start with bk_");
    throw new LeadDeliveryError(userMessage(502), 502);
  }

  let url: string;
  let body: string;
  try {
    url = leadsUrl();
    body = JSON.stringify(buildPublicLeadBody(lead));
  } catch (err) {
    if (err instanceof LeadDeliveryError) throw err;
    console.error("Lead intake: failed to build request", err);
    throw new LeadDeliveryError(userMessage(502), 502);
  }

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-API-Key": apiKey,
      },
      body,
      redirect: "manual",
      signal: AbortSignal.timeout(10_000),
    });
  } catch (err) {
    console.error("Lead intake: request failed", err);
    throw new LeadDeliveryError(userMessage(502), 502);
  }

  if (response.status >= 300 && response.status < 400) {
    console.error("Lead intake: unexpected redirect", response.status);
    throw new LeadDeliveryError(userMessage(502), 502);
  }

  let payload: {
    success?: boolean;
    status?: string;
    intake_id?: number;
    ignored_fields?: unknown;
    error?: string;
  } = {};
  try {
    payload = (await response.json()) as typeof payload;
  } catch {
    payload = {};
  }

  const status = payload.status;
  if (
    !response.ok ||
    payload.success !== true ||
    (status !== "created" && status !== "updated" && status !== "forwarded") ||
    typeof payload.intake_id !== "number"
  ) {
    console.error("Lead intake rejected", {
      http: response.status,
      error: payload.error ?? null,
      status: status ?? null,
    });
    throw new LeadDeliveryError(userMessage(response.status), httpStatusForCrm(response.status));
  }

  const ignored = Array.isArray(payload.ignored_fields)
    ? payload.ignored_fields.filter((field): field is string => typeof field === "string")
    : [];
  if (ignored.length) {
    console.error("Lead intake stored the lead and ignored fields", {
      intake_id: payload.intake_id,
      ignored_fields: ignored,
    });
  } else {
    console.info("Lead intake", { status, intake_id: payload.intake_id });
  }

  return { status, intake_id: payload.intake_id, ignored_fields: ignored };
}
