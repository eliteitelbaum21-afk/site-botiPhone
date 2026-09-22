"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import ContactModal from "./ContactModal";
import {
  buildContactContext,
  DEFAULT_CONTACT_CONTEXT,
  type ContactContext,
} from "@/lib/contact-context";

interface ContactModalContextValue {
  openModal: (context?: Partial<ContactContext>) => void;
}

const ContactModalContext = createContext<ContactModalContextValue | null>(null);

export function useContactModal(): ContactModalContextValue {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal must be used within ContactModalProvider");
  return ctx;
}

export default function ContactModalProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [context, setContext] = useState<ContactContext>(DEFAULT_CONTACT_CONTEXT);

  function openModal(partial?: Partial<ContactContext>) {
    setContext(
      buildContactContext({
        ...partial,
        page: partial?.page ?? pathname,
        source: partial?.source ?? "modal",
      })
    );
    setIsOpen(true);
  }

  return (
    <ContactModalContext.Provider value={{ openModal }}>
      {children}
      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        context={context}
      />
    </ContactModalContext.Provider>
  );
}
