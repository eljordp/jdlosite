'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import { GlowLink } from "@/components/GlowButton";
import CustomCursor from "@/components/CustomCursor";
import { createClient } from "@/lib/supabase/client";
import type { User } from "@supabase/supabase-js";

const disciplines = [
  { label: "AI & Automation", href: "/courses/ai-automation", slug: "ai-automation" },
  { label: "Sales Systems", href: "/courses/sales-systems", slug: "sales-systems" },
  { label: "Operator Playbook", href: "/courses/operator-playbook", slug: "operator-playbook" },
  { label: "AI Mastery", href: "/courses/ai-mastery", slug: "ai-mastery" },
  { label: "Mentorship", href: "/mentorship", slug: "mentorship" },
];

interface PageShellProps {
  children: React.ReactNode;
  ctaText: string;
  ctaHref: string;
  ctaExternal?: boolean;
  activeSlug?: string;
}

export default function PageShell({ children, ctaText, ctaHref, ctaExternal, activeSlug }: PageShellProps) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  return (
    <main className="cursor-none">
      <CustomCursor />
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 h-12 flex items-center justify-between gap-6">
          <Link href="/" className="text-[15px] font-semibold tracking-tight shrink-0">
            JDLO
          </Link>

          {/* Desktop discipline links */}
          <div className="hidden lg:flex items-center gap-1 overflow-x-auto">
            {disciplines.map((d) => {
              const isActive = activeSlug === d.slug;
              return (
                <Link
                  key={d.slug}
                  href={d.href}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-full text-[12px] transition-all duration-300 ${
                    isActive
                      ? "bg-accent/10 text-accent font-medium"
                      : "text-text-muted hover:text-text"
                  }`}
                >
                  {d.label}
                </Link>
              );
            })}
            {user && (
              <Link
                href="/my-courses"
                className="whitespace-nowrap px-3 py-1.5 rounded-full text-[12px] transition-all duration-300 text-accent hover:text-accent/80 font-medium"
              >
                My Courses
              </Link>
            )}
          </div>

          <div className="flex items-center gap-3">
            {!user ? (
              <Link href="/sign-in" className="text-text-secondary hover:text-text text-[12px] transition-colors duration-300 shrink-0">
                Sign In
              </Link>
            ) : (
              <Link href="/profile" className="text-text-secondary hover:text-text text-[12px] transition-colors duration-300 shrink-0">
                {user.email?.split("@")[0]}
              </Link>
            )}
            <GlowLink href={ctaHref} external={ctaExternal} className="!py-1.5 !px-4 !text-[13px] shrink-0">
              {ctaText}
            </GlowLink>
            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2 -mr-1 text-text-muted hover:text-text transition-colors"
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

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-bg flex flex-col px-6 py-5 transition-opacity duration-300 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between mb-10">
          <Link href="/" onClick={() => setOpen(false)} className="text-[15px] font-semibold tracking-tight">
            JDLO
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
          {user && (
            <Link
              href="/my-courses"
              onClick={() => setOpen(false)}
              className="text-[2rem] font-semibold tracking-[-0.03em] text-accent hover:text-text transition-colors duration-200 py-2.5 border-b border-border/40"
            >
              My Courses
            </Link>
          )}
          {disciplines.map((d) => (
            <Link
              key={d.slug}
              href={d.href}
              onClick={() => setOpen(false)}
              className={`text-[2rem] font-semibold tracking-[-0.03em] transition-colors duration-200 py-2.5 border-b border-border/40 last:border-0 ${
                activeSlug === d.slug ? 'text-accent' : 'text-text-secondary hover:text-text'
              }`}
            >
              {d.label}
            </Link>
          ))}
          {!user && (
            <Link
              href="/sign-in"
              onClick={() => setOpen(false)}
              className="text-[2rem] font-semibold tracking-[-0.03em] text-text-secondary hover:text-text transition-colors duration-200 py-2.5"
            >
              Sign In
            </Link>
          )}
        </div>

        <div className="pt-8">
          <GlowLink href={ctaHref} external={ctaExternal} className="w-full justify-center">
            {ctaText}
          </GlowLink>
        </div>
      </div>

      <div className="pt-12">{children}</div>
      <footer className="py-12 border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="text-text-muted text-[12px] font-mono hover:text-text transition-colors duration-300"
          >
            JDLO
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/jdlo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted text-[12px] font-mono hover:text-text transition-colors duration-300"
            >
              @jdlo
            </a>
            <a
              href="mailto:eljordp@gmail.com"
              className="text-text-muted text-[12px] font-mono hover:text-text transition-colors duration-300"
            >
              eljordp@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
