"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, LogIn, Menu, Phone, Sparkles, X } from "lucide-react";
import { useContactModal } from "./ContactModalProvider";
import { site } from "@/lib/site";
import { pbxProducts, smartProducts, products } from "@/lib/products";

const navLinks = [
  { href: "/examples", label: "דוגמאות" },
  { href: "/blog", label: "מרכז ידע" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { openModal } = useContactModal();
  const pathname = usePathname();
  const productActive = products.some((p) => p.href === pathname);

  useEffect(() => {
    setIsOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const linkClass = (active: boolean) =>
    `transition-colors font-medium ${active ? "text-white" : "text-gray-300 hover:text-white"}`;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-20 bg-brand-dark/80 backdrop-blur-xl border-b border-white/10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center shrink-0" aria-label="BotiPhone — דף הבית">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/botiphone-logo-white.svg" alt="BotiPhone" width={211} height={37} className="h-9 w-auto" />
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-7">
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1 ${linkClass(productActive || menuOpen)}`}
              >
                מוצרים
                <ChevronDown className={`w-4 h-4 transition-transform ${menuOpen ? "rotate-180" : ""}`} />
              </button>

              {menuOpen && (
                <div className="absolute top-full right-1/2 translate-x-1/2 mt-5 w-[640px] rounded-2xl border border-white/10 bg-brand-deep/95 backdrop-blur-xl shadow-2xl shadow-black/50 p-5 grid grid-cols-2 gap-5">
                  <div>
                    <div className="text-xs font-semibold text-gray-400 px-3 mb-2">המרכזייה</div>
                    {pbxProducts.map((p) => (
                      <Link key={p.href} href={p.href} className="block rounded-xl px-3 py-2.5 hover:bg-white/5 transition-colors">
                        <div className={`font-semibold ${pathname === p.href ? "text-brand-accent" : "text-white"}`}>{p.label}</div>
                        <div className="text-xs text-gray-400">{p.short}</div>
                      </Link>
                    ))}
                  </div>
                  <div className="rounded-xl bg-white/[0.03] border border-white/5 p-2">
                    <div className="text-xs font-semibold text-brand-accent px-3 mb-2 mt-1 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> מרכזייה חכמה
                    </div>
                    {smartProducts.map((p) => (
                      <Link key={p.href} href={p.href} className="block rounded-xl px-3 py-2.5 hover:bg-white/5 transition-colors">
                        <div className={`font-semibold ${pathname === p.href ? "text-brand-accent" : "text-white"}`}>{p.label}</div>
                        <div className="text-xs text-gray-400">{p.short}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(pathname === link.href)}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-5">
            <a href={site.appUrl} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors font-medium">
              <LogIn className="w-4 h-4" />
              כניסה למערכת
            </a>
            <button
              onClick={() => openModal({ intent: "contact", source: "navbar" })}
              className="bg-brand-primary text-brand-navy px-6 py-2.5 rounded-full font-bold hover:bg-brand-accent transition-colors"
            >
              דברו איתנו
            </button>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex lg:hidden items-center gap-1">
            <a href={`tel:${site.phoneIntl}`} className="p-2 text-brand-accent" aria-label={`התקשרו ${site.phone}`}>
              <Phone className="w-6 h-6" />
            </a>
            <button className="text-white p-2" onClick={() => setIsOpen(true)} aria-label="פתיחת תפריט">
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-brand-deep flex flex-col" role="dialog" aria-modal="true" aria-label="תפריט">
          <div className="h-20 shrink-0 border-b border-white/10 flex items-center justify-between px-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/botiphone-logo-white.svg" alt="BotiPhone" width={183} height={32} className="h-8 w-auto" />
            <button
              onClick={() => setIsOpen(false)}
              aria-label="סגירת תפריט"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white"
            >
              <X size={26} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-5 py-4">
            <div className="text-xs font-semibold text-gray-400 mb-1 mt-2">המרכזייה</div>
            {pbxProducts.map((p) => (
              <MobileLink key={p.href} href={p.href} active={pathname === p.href} label={p.label} />
            ))}
            <div className="text-xs font-semibold text-brand-accent mb-1 mt-5 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5" /> מרכזייה חכמה
            </div>
            {smartProducts.map((p) => (
              <MobileLink key={p.href} href={p.href} active={pathname === p.href} label={p.label} />
            ))}
            <div className="h-px bg-white/10 my-4" />
            {navLinks.map((l) => (
              <MobileLink key={l.href} href={l.href} active={pathname === l.href} label={l.label} />
            ))}
            <a href={site.appUrl} className="flex items-center gap-3 py-3.5 px-3 text-lg font-semibold text-gray-300">
              <LogIn size={20} />
              כניסה למערכת
            </a>
          </nav>

          <div className="px-5 pt-3 pb-8 shrink-0 grid grid-cols-2 gap-3">
            <a
              href={`tel:${site.phoneIntl}`}
              className="py-4 rounded-2xl border border-white/15 text-white font-bold text-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 text-brand-accent" /> חייגו
            </a>
            <button
              onClick={() => {
                setIsOpen(false);
                openModal({ intent: "contact", source: "navbar-mobile" });
              }}
              className="py-4 rounded-2xl bg-brand-primary text-brand-navy font-bold text-lg"
            >
              דברו איתנו
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function MobileLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`block py-3.5 px-3 rounded-xl text-lg font-semibold ${active ? "bg-brand-primary/15 text-white" : "text-gray-200"}`}
    >
      {label}
    </Link>
  );
}
