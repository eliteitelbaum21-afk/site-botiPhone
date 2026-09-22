"use client";

import { useEffect } from "react";
import { Bot, X } from "lucide-react";
import ContactForm from "./ContactForm";
import type { ContactContext } from "@/lib/contact-context";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  context: ContactContext;
}

export default function ContactModal({ isOpen, onClose, context }: ContactModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto bg-brand-card border border-white/10 rounded-3xl shadow-2xl shadow-brand-primary/20">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary" />

        <button
          onClick={onClose}
          aria-label="סגירה"
          className="absolute top-4 left-4 text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 p-2 rounded-full"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center">
              <Bot className="w-6 h-6 text-brand-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">{context.title}</h3>
              <p className="text-sm text-gray-400">{context.subtitle}</p>
            </div>
          </div>

          <ContactForm {...context} compact />
        </div>
      </div>
    </div>
  );
}
