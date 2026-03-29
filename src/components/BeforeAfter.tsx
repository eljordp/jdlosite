"use client";

import { useState } from "react";
import Link from "next/link";

interface BeforeAfterProps {
  product: string;
  before: { title: string; items: string[] };
  after: { title: string; items: string[] };
}

export default function BeforeAfter({ product, before, after }: BeforeAfterProps) {
  const [showAfter, setShowAfter] = useState(false);

  return (
    <section className="section-gap bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
          The Difference
        </p>

        {/* Toggle */}
        <div className="flex items-center gap-4 mb-12">
          <button
            onClick={() => setShowAfter(false)}
            className={`text-[15px] font-medium transition-colors ${!showAfter ? "text-text" : "text-text-muted"}`}
          >
            Without
          </button>
          <button
            onClick={() => setShowAfter(!showAfter)}
            className="relative w-14 h-7 rounded-full border border-border bg-bg transition-colors cursor-pointer"
          >
            <span className={`absolute top-0.5 w-6 h-6 rounded-full transition-all duration-300 ${showAfter ? "left-7 bg-text" : "left-0.5 bg-text-muted"}`} />
          </button>
          <button
            onClick={() => setShowAfter(true)}
            className={`text-[15px] font-medium transition-colors ${showAfter ? "text-text" : "text-text-muted"}`}
          >
            With JDLO
          </button>
        </div>

        {/* Content */}
        <div className="max-w-[640px]">
          <h3 className="font-display text-[clamp(1.5rem,3vw,2.2rem)] tracking-[-0.02em] leading-[1.1] mb-8 transition-colors duration-300">
            {showAfter ? after.title : before.title}
          </h3>
          <div className="space-y-0">
            {(showAfter ? after.items : before.items).map((item, i) => (
              <div
                key={`${showAfter}-${i}`}
                className="py-4 border-b border-border flex items-start gap-4"
                style={{ animation: `fadeIn 0.4s ease-out ${i * 0.05}s both` }}
              >
                <span className={`w-1.5 h-1.5 rounded-full mt-2.5 shrink-0 ${showAfter ? "bg-text" : "bg-text-muted"}`} />
                <span className={`text-[15px] leading-relaxed ${showAfter ? "text-text" : "text-text-muted"}`}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          {showAfter && (
            <div className="mt-10" style={{ animation: "fadeIn 0.5s ease-out 0.3s both" }}>
              <Link href={`/contact?product=${product}`} className="magnetic-btn">
                <span className="relative z-10">Get Started</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
