"use client";

import type { ReactNode } from "react";
import { useContactModal } from "./ContactModalProvider";
import type { ContactContext } from "@/lib/contact-context";

interface CtaButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "white";
  className?: string;
  intent?: ContactContext["intent"];
  plan?: string;
  planName?: string;
  planPrice?: number;
  source?: string;
}

const variantClasses: Record<NonNullable<CtaButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] hover:-translate-y-1",
  secondary:
    "bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-sm",
  white: "bg-white text-brand-dark hover:bg-gray-100 hover:scale-105",
};

export default function CtaButton({
  children,
  variant = "primary",
  className = "",
  intent = "contact",
  plan,
  planName,
  planPrice,
  source = "cta-button",
}: CtaButtonProps) {
  const { openModal } = useContactModal();

  return (
    <button
      onClick={() =>
        openModal({
          intent,
          plan,
          planName,
          planPrice,
          source,
        })
      }
      className={`px-8 py-4 rounded-full font-bold text-lg transition-all transform flex items-center justify-center gap-2 ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
