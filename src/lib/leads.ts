import { appendFile, mkdir } from "fs/promises";
import path from "path";
import nodemailer from "nodemailer";

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
  ip?: string;
}

const INTENT_LABELS: Record<LeadIntent, string> = {
  demo: "יצירת קשר",
  contact: "יצירת קשר",
  plan: "בחירת חבילה",
  chat: "פנייה מהצ'אט",
};

export function getIntentLabel(intent?: LeadIntent): string {
  return INTENT_LABELS[intent ?? "contact"];
}

export function getLeadEmailSubject(lead: LeadPayload): string {
  const label = getIntentLabel(lead.intent);
  const planPart =
    lead.intent === "plan" && lead.plan
      ? ` — ${lead.planName ?? lead.plan}`
      : "";
  return `[${label}${planPart}] ${lead.name} (${lead.phone})`;
}

export function formatLeadEmailBody(lead: LeadPayload): string {
  const lines = [
    `סוג פנייה: ${getIntentLabel(lead.intent)}`,
    `שם: ${lead.name}`,
    `טלפון: ${lead.phone}`,
  ];

  if (lead.email) lines.push(`אימייל: ${lead.email}`);
  if (lead.message) lines.push(`הודעה: ${lead.message}`);
  if (lead.intent === "plan") {
    if (lead.plan) lines.push(`חבילה: ${lead.plan}`);
    if (lead.planName) lines.push(`שם חבילה: ${lead.planName}`);
    if (lead.planPrice != null) lines.push(`מחיר: ${lead.planPrice.toLocaleString()} ₪`);
  }
  if (lead.page) lines.push(`עמוד: ${lead.page}`);
  if (lead.source) lines.push(`מקור טופס: ${lead.source}`);
  if (lead.note) lines.push(`הערות: ${lead.note}`);
  if (lead.ip) lines.push(`IP: ${lead.ip}`);
  lines.push(`התקבל: ${new Date().toLocaleString("he-IL")}`);

  return lines.join("\n");
}

export async function saveLead(lead: LeadPayload) {
  const dir = path.join(process.cwd(), "data");
  await mkdir(dir, { recursive: true });
  await appendFile(
    path.join(dir, "leads.jsonl"),
    JSON.stringify({ ...lead, receivedAt: new Date().toISOString() }) + "\n",
    "utf8"
  );
}

export async function sendLeadEmail(lead: LeadPayload): Promise<boolean> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_EMAIL } = process.env;
  if (!SMTP_HOST || !CONTACT_EMAIL) return false;

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT) === 465,
    auth: SMTP_USER && SMTP_PASS ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
  });

  await transporter.sendMail({
    from: SMTP_USER ?? CONTACT_EMAIL,
    to: CONTACT_EMAIL,
    subject: getLeadEmailSubject(lead),
    text: formatLeadEmailBody(lead),
  });
  return true;
}

export async function processLead(lead: LeadPayload): Promise<void> {
  try {
    await saveLead(lead);
  } catch (err) {
    console.error("Failed to save lead:", err);
  }

  try {
    const sent = await sendLeadEmail(lead);
    if (!sent) {
      console.info("SMTP not configured — lead saved to data/leads.jsonl only");
    }
  } catch (err) {
    console.error("Failed to send lead email:", err);
  }
}
