"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bot, LogIn, Menu, X } from "lucide-react";
import { useContactModal } from "./ContactModalProvider";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/voice-bot", label: "בוט טלפוני" },
  { href: "/campaigns", label: "קמפיינים יוצאים" },
  { href: "/cloud-pbx", label: "מרכזיה בענן" },
  { href: "/pricing", label: "מחירון" },
  { href: "/blog", label: "מרכז ידע" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { openModal } = useContactModal();
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* ───── Top bar ───── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10"
        style={{ height: 80 }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2" aria-label="BotiPhone">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shadow-lg shadow-brand-primary/20">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="font-black text-2xl tracking-tight">
              Boti<span className="text-brand-accent">Phone</span>
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors font-medium ${
                  pathname === link.href ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href={site.appUrl} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium">
              <LogIn className="w-4 h-4" />
              כניסה למערכת
            </a>
            <button
              onClick={() => openModal({ intent: "demo", source: "navbar" })}
              className="bg-white text-brand-dark px-6 py-2.5 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
            >
              הדגמה חינם
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(true)}
            aria-label="פתיחת תפריט"
          >
            <Menu className="w-7 h-7" />
          </button>
        </nav>
      </header>

      {/* ───── Full-screen mobile drawer ───── */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: "#05080f",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
          role="dialog"
          aria-modal="true"
        >
          {/* Drawer header */}
          <div
            style={{
              height: 80,
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 20px",
              flexShrink: 0,
            }}
          >
            <span className="font-black text-2xl tracking-tight text-white">
              Boti<span className="text-brand-accent">Phone</span>
            </span>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="סגירת תפריט"
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                border: "none",
                cursor: "pointer",
              }}
            >
              <X size={28} />
            </button>
          </div>

          {/* Links */}
          <nav style={{ flex: 1, overflowY: "auto", padding: "16px 20px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  display: "block",
                  padding: "18px 16px",
                  fontSize: 20,
                  fontWeight: 700,
                  color: pathname === link.href ? "#ffffff" : "#d1d5db",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  background: pathname === link.href ? "rgba(99,102,241,0.2)" : "transparent",
                  borderRadius: 12,
                  marginBottom: 4,
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={site.appUrl}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "18px 16px",
                fontSize: 20,
                fontWeight: 700,
                color: "#d1d5db",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                marginBottom: 4,
              }}
            >
              <LogIn size={22} />
              כניסה למערכת
            </a>
          </nav>

          {/* CTA */}
          <div style={{ padding: "16px 20px 40px", flexShrink: 0 }}>
            <button
              onClick={() => {
                setIsOpen(false);
                openModal({ intent: "demo", source: "navbar-mobile" });
              }}
              style={{
                width: "100%",
                padding: "18px",
                fontSize: 20,
                fontWeight: 700,
                color: "white",
                background: "linear-gradient(to right, #6366f1, #8b5cf6)",
                borderRadius: 16,
                border: "none",
                cursor: "pointer",
              }}
            >
              הדגמה חינם
            </button>
          </div>
        </div>
      )}
    </>
  );
}
