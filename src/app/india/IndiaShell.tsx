"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { copy, LANG_LABELS, type Lang, type CopyShape } from "./copy";

const LANG_KEY = "jdlo_india_lang";
const DEFAULT_LANG: Lang = "hi";

const WHATSAPP_NUMBER = "919797596601";
const WHATSAPP_GREETING =
  "Hi%20Kamesh%2C%20I%20saw%20JDLO%20India%20and%20want%20to%20talk%20about%20a%20website%20for%20my%20business.";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_GREETING}`;

interface IndiaCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  c: CopyShape;
  hydrated: boolean;
}

const IndiaContext = createContext<IndiaCtx | null>(null);

export function useIndia(): IndiaCtx {
  const ctx = useContext(IndiaContext);
  if (!ctx) throw new Error("useIndia must be used inside IndiaShell");
  return ctx;
}

/* ── India Nav ── */
function IndiaNav({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const langs: Lang[] = ["hi", "en"];

  const links =
    lang === "hi"
      ? [
          { label: "होम", href: "/india" },
          { label: "सर्विसेज़", href: "/india/services" },
          { label: "प्राइसिंग", href: "/india/pricing" },
          { label: "Receipts", href: "/india/work" },
          { label: "Kamesh के बारे में", href: "/india/about" },
        ]
      : [
          { label: "Home", href: "/india" },
          { label: "Services", href: "/india/services" },
          { label: "Pricing", href: "/india/pricing" },
          { label: "Work", href: "/india/work" },
          { label: "About", href: "/india/about" },
        ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <Link href="/india" className="text-[15px] font-semibold tracking-tight">
            JDLO <span className="text-text-muted font-normal">India</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-[13px] text-text-secondary">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-300 ${
                    active ? "text-text" : "hover:text-text"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 bg-bg/40 border border-border rounded-full p-1">
              {langs.map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`text-[11px] font-mono tracking-wide px-2.5 py-1 rounded-full transition-colors ${
                    lang === l ? "bg-text text-bg" : "text-text-muted hover:text-text"
                  }`}
                  aria-label={`Switch to ${LANG_LABELS[l]}`}
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#25D366] text-black font-semibold tracking-tight px-3.5 py-1.5 rounded-full text-[12px] hover:bg-[#1ebe57] transition-colors duration-200"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden p-2 -mr-1 text-text-muted hover:text-text transition-colors"
              aria-label="Open menu"
            >
              <svg width="20" height="14" viewBox="0 0 20 14" fill="currentColor">
                <rect width="20" height="1.5" rx="0.75" />
                <rect y="6.25" width="20" height="1.5" rx="0.75" />
                <rect y="12.5" width="20" height="1.5" rx="0.75" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-[100] bg-bg flex flex-col px-6 py-5 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between mb-10">
          <Link
            href="/india"
            onClick={() => setOpen(false)}
            className="text-[15px] font-semibold tracking-tight"
          >
            JDLO <span className="text-text-muted font-normal">India</span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            className="text-text-muted hover:text-text text-4xl leading-none"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <div className="flex flex-col flex-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-[1.5rem] sm:text-[2rem] font-semibold tracking-[-0.03em] transition-colors duration-200 py-2.5 border-b border-border/40 last:border-0 ${
                  active ? "text-text" : "text-text-secondary hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="pt-8 flex flex-col gap-3">
          <div className="flex items-center justify-center gap-1 bg-bg/40 border border-border rounded-full p-1 self-center">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-[12px] font-mono tracking-wide px-4 py-1.5 rounded-full transition-colors ${
                  lang === l ? "bg-text text-bg" : "text-text-muted hover:text-text"
                }`}
              >
                {LANG_LABELS[l]}
              </button>
            ))}
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center gap-1.5 bg-[#25D366] text-black font-semibold tracking-tight px-6 py-3 rounded-full text-[14px]"
          >
            WhatsApp Kamesh
          </a>
        </div>
      </div>
    </>
  );
}

export default function IndiaShell({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LANG_KEY);
      if (stored === "en" || stored === "hi") setLangState(stored);
    } catch {}
    setHydrated(true);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(LANG_KEY, l);
    } catch {}
  };

  const c = copy[lang];

  return (
    <IndiaContext.Provider value={{ lang, setLang, c, hydrated }}>
      <main lang={lang === "hi" ? "hi" : "en"} className="india-main">
        <IndiaNav lang={lang} setLang={setLang} />
        <div key={hydrated ? lang : "ssr"}>{children}</div>
      </main>
    </IndiaContext.Provider>
  );
}
