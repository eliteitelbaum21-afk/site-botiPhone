"use client";

import { useState, type FormEvent } from "react";
import { ArrowLeft, CheckCircle2, Loader2 } from "lucide-react";
import type { ContactContext } from "@/lib/contact-context";

type ContactFormProps = ContactContext & {
  compact?: boolean;
  onSuccess?: () => void;
};

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({
  intent,
  plan,
  planName,
  planPrice,
  page,
  source = "website",
  submitLabel,
  successMessage,
  compact = false,
  onSuccess,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
      intent,
      plan,
      planName,
      planPrice,
      page,
      source,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "שליחה נכשלה, נסו שוב");
      }
      setStatus("success");
      form.reset();
      onSuccess?.();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "שליחה נכשלה, נסו שוב");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">הפרטים נשלחו בהצלחה!</h3>
        <p className="text-gray-400">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div>
        <label htmlFor={`${source}-name`} className="block text-sm font-medium text-gray-300 mb-1.5">
          שם מלא
        </label>
        <input
          type="text"
          id={`${source}-name`}
          name="name"
          required
          minLength={2}
          placeholder="ישראל ישראלי"
          className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all"
        />
      </div>

      <div>
        <label htmlFor={`${source}-phone`} className="block text-sm font-medium text-gray-300 mb-1.5">
          מספר טלפון
        </label>
        <input
          type="tel"
          id={`${source}-phone`}
          name="phone"
          required
          pattern="[0-9+\-() ]{7,20}"
          placeholder="050-0000000"
          dir="ltr"
          className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all text-right"
        />
      </div>

      {!compact && (
        <>
          <div>
            <label htmlFor={`${source}-email`} className="block text-sm font-medium text-gray-300 mb-1.5">
              אימייל <span className="text-gray-500">(לא חובה)</span>
            </label>
            <input
              type="email"
              id={`${source}-email`}
              name="email"
              placeholder="you@company.co.il"
              dir="ltr"
              className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all text-right"
            />
          </div>
          <div>
            <label htmlFor={`${source}-message`} className="block text-sm font-medium text-gray-300 mb-1.5">
              במה נוכל לעזור? <span className="text-gray-500">(לא חובה)</span>
            </label>
            <textarea
              id={`${source}-message`}
              name="message"
              rows={4}
              placeholder="ספרו לנו קצת על העסק ומה אתם מחפשים..."
              className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none transition-all resize-none"
            />
          </div>
        </>
      )}

      {status === "error" && (
        <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold py-3.5 rounded-xl mt-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "sending" ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <>
            <span>{submitLabel}</span>
            <ArrowLeft className="w-4 h-4" />
          </>
        )}
      </button>
      <p className="text-xs text-center text-gray-500">בלי התחייבות. נחזור אליכם תוך 24 שעות.</p>
    </form>
  );
}
