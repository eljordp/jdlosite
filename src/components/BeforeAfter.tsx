"use client";

import Link from "next/link";

interface BeforeAfterProps {
  product: string;
  before: { title: string; items: string[] };
  after: { title: string; items: string[] };
}

export default function BeforeAfter({ product, before, after }: BeforeAfterProps) {
  return (
    <section className="section-gap bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-12">
          The Difference
        </p>

        <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
          {/* Without */}
          <div className="bg-surface p-8 md:p-12">
            <p className="text-text-muted text-[11px] font-mono tracking-widest uppercase mb-6">
              Without
            </p>
            <h3 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] tracking-[-0.02em] leading-[1.1] mb-8 text-text-muted">
              {before.title}
            </h3>
            <ul className="space-y-0">
              {before.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4 py-4 border-b border-border last:border-0">
                  <span className="text-text-muted/40 text-[13px] font-mono mt-0.5 shrink-0">✕</span>
                  <span className="text-text-muted text-[14px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With JDLO */}
          <div className="bg-bg p-8 md:p-12">
            <p className="text-text text-[11px] font-mono tracking-widest uppercase mb-6">
              With JDLO
            </p>
            <h3 className="font-display text-[clamp(1.4rem,2.5vw,2rem)] tracking-[-0.02em] leading-[1.1] mb-8">
              {after.title}
            </h3>
            <ul className="space-y-0">
              {after.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4 py-4 border-b border-border last:border-0">
                  <span className="text-text text-[13px] font-mono mt-0.5 shrink-0">—</span>
                  <span className="text-text text-[14px] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Link href={`/contact?product=${product}`} className="magnetic-btn">
                <span className="relative z-10">Get Started</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
