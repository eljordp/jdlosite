"use client";

import { useState } from "react";
import Link from "next/link";

interface IsThisForYouProps {
  product: string;
  statements: string[];
  threshold?: number;
  yesMessage?: string;
  noMessage?: string;
}

export default function IsThisForYou({ product, statements, threshold = 3, yesMessage, noMessage }: IsThisForYouProps) {
  const [checked, setChecked] = useState<boolean[]>(new Array(statements.length).fill(false));

  const toggle = (i: number) => {
    setChecked(prev => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  const count = checked.filter(Boolean).length;
  const qualified = count >= threshold;

  return (
    <section className="section-gap bg-surface">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
          Is This For You?
        </p>
        <p className="text-text-secondary text-[15px] leading-relaxed max-w-[500px] mb-12">
          Check the ones that apply to you.
        </p>

        <div className="max-w-[640px]">
          {statements.map((statement, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className="w-full text-left py-5 border-b border-border flex items-start gap-4 group cursor-pointer transition-colors hover:bg-bg/50 -mx-4 px-4 rounded-lg"
            >
              <span className={`w-5 h-5 rounded-md border-2 shrink-0 mt-0.5 flex items-center justify-center transition-all duration-200 ${
                checked[i] ? "bg-text border-text" : "border-border group-hover:border-text/30"
              }`}>
                {checked[i] && (
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </span>
              <span className={`text-[15px] leading-relaxed transition-colors ${checked[i] ? "text-text" : "text-text-secondary"}`}>
                {statement}
              </span>
            </button>
          ))}

          {/* Result */}
          {count > 0 && (
            <div className="mt-10 py-8 text-center" style={{ animation: "fadeIn 0.3s ease-out" }}>
              {qualified ? (
                <>
                  <p className="font-display text-[clamp(1.3rem,2.5vw,1.8rem)] tracking-[-0.02em] mb-3">
                    {yesMessage || `You checked ${count}. Let\u2019s build this.`}
                  </p>
                  <p className="text-text-secondary text-[14px] mb-8">
                    You&apos;re exactly the kind of person I build for. Let&apos;s talk.
                  </p>
                  <div className="flex flex-wrap gap-4 justify-center">
                    <Link href={`/contact?product=${product}`} className="magnetic-btn">
                      <span className="relative z-10">Get Started</span>
                    </Link>
                    <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="ghost-btn">
                      DM @jdlo
                    </a>
                  </div>
                </>
              ) : (
                <p className="text-text-muted text-[14px]">
                  {noMessage || `${count} so far. Check ${threshold - count} more and we should talk.`}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
