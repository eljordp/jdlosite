'use client';

import { useState } from 'react';
import Link from 'next/link';

const plans = [
  {
    key: 'monthly',
    label: 'Monthly',
    price: '$97',
    per: '/month — cancel anytime',
    features: ['All 4 modules', 'Weekly drops', 'Community access'],
    highlight: false,
  },
  {
    key: 'lifetime',
    label: 'Lifetime',
    price: '$497',
    per: 'one-time — own it forever',
    features: ['Everything in monthly', 'Lifetime updates', 'Direct access to JP'],
    highlight: true,
  },
];

export default function SubscribePage() {
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState('');

  async function checkout(plan: string) {
    setLoading(plan);
    setError('');
    const res = await fetch('/api/academy/create-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      setError(data.error ?? 'Something went wrong. Try again.');
      setLoading(null);
    }
  }

  return (
    <main className="pt-14 min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="w-full max-w-[760px]">
        <p className="text-[#525252] text-[11px] tracking-[0.5em] uppercase font-mono mb-4 text-center">
          Trial ended
        </p>
        <h1 className="font-display text-[clamp(2rem,5vw,4rem)] tracking-[-0.03em] leading-[0.95] text-center mb-4">
          Keep the access.
        </h1>
        <p className="text-[#525252] text-[14px] text-center mb-14 max-w-[400px] mx-auto">
          Your 7-day trial is over. Pick a plan to continue — everything you&apos;ve started stays with you.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`p-8 rounded-2xl border ${plan.highlight ? 'border-[#f5f5f5]' : 'border-[rgba(255,255,255,0.08)]'}`}
            >
              {plan.highlight && (
                <span className="inline-block text-[11px] font-mono bg-[#f5f5f5] text-[#0a0a0a] px-2.5 py-1 rounded-full mb-4">
                  Best value
                </span>
              )}
              <p className="text-[#525252] text-[11px] font-mono tracking-widest uppercase mb-3">
                {plan.label}
              </p>
              <p className="font-display text-[3rem] tracking-[-0.04em] leading-none mb-1">{plan.price}</p>
              <p className="text-[#525252] text-[13px] mb-6">{plan.per}</p>
              <ul className="space-y-2 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[14px] text-[#a3a3a3]">
                    <span className="text-[#f5f5f5]">—</span> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => checkout(plan.key)}
                disabled={!!loading}
                className={`w-full py-3 rounded-xl text-[14px] font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                  plan.highlight
                    ? 'bg-[#f5f5f5] text-[#0a0a0a] hover:bg-white'
                    : 'border border-[rgba(255,255,255,0.15)] text-[#f5f5f5] hover:bg-[rgba(255,255,255,0.06)]'
                }`}
              >
                {loading === plan.key ? 'Redirecting...' : `Get ${plan.label}`}
              </button>
            </div>
          ))}
        </div>

        {error && <p className="text-red-400 text-[13px] font-mono text-center mt-6">{error}</p>}

        <p className="text-center mt-8">
          <Link href="/academy" className="text-[#525252] text-[12px] hover:text-[#a3a3a3] transition-colors">
            ← Back to Academy
          </Link>
        </p>
      </div>
    </main>
  );
}
