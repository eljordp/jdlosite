'use client';

import { useState } from 'react';
import Link from 'next/link';
import { GlowLink } from '@/components/GlowButton';

const links = [
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Skills Quiz', href: '/quiz' },
  { label: 'Mentorship', href: '/mentorship' },
  { label: 'Businesses', href: '/businesses' },
  { label: 'Careers', href: '/careers' },
];

export default function HomeNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <Link href="/" className="text-[15px] font-semibold tracking-tight">
            JDLO
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8 text-[13px] text-text-secondary">
            <a href="#skills" className="hover:text-text transition-colors duration-300">Skills</a>
            <a href="#about" className="hover:text-text transition-colors duration-300">About</a>
            <a href="#faq" className="hover:text-text transition-colors duration-300">FAQ</a>
            <Link href="/quiz" className="text-accent hover:text-accent/80 transition-colors duration-300 font-mono text-[12px]">
              Skills Quiz →
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <GlowLink href="#apply" className="!py-1.5 !px-5 !text-[13px]">
              Work With Me
            </GlowLink>
            {/* Mobile hamburger */}
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

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-bg flex flex-col px-6 py-5 transition-opacity duration-300 md:hidden ${
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
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[2rem] font-semibold tracking-[-0.03em] text-text-secondary hover:text-text transition-colors duration-200 py-2.5 border-b border-border/40 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="pt-8">
          <GlowLink href="#apply" className="w-full justify-center">
            Work With Me
          </GlowLink>
        </div>
      </div>
    </>
  );
}
