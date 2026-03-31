'use client';

import { useState } from 'react';
import Link from 'next/link';

const niches = [
  {
    key: 'restaurant',
    label: 'Restaurant / Food',
    revenue: '$18K–$60K/mo',
    margin: '3–9%',
    opportunity: '$4K–$12K/mo',
    wins: [
      'Online ordering system with upsells built in',
      'Automated review follow-up (avg +0.6 stars)',
      'Reservation + waitlist automation',
      'Weekly promo campaigns on autopilot',
    ],
    stat: 'Restaurants using AI upsells see avg 22% higher ticket size.',
  },
  {
    key: 'ecommerce',
    label: 'E-Commerce',
    revenue: '$8K–$80K/mo',
    margin: '20–45%',
    opportunity: '$6K–$25K/mo',
    wins: [
      'Abandoned cart recovery sequences',
      'AI-powered product descriptions + SEO',
      'Automated customer support (24/7)',
      'Upsell + cross-sell flows post-purchase',
    ],
    stat: 'Automated cart recovery alone recovers 15–25% of lost revenue.',
  },
  {
    key: 'realestate',
    label: 'Real Estate',
    revenue: '$10K–$100K/mo',
    margin: '25–40%',
    opportunity: '$8K–$30K/mo',
    wins: [
      'Lead capture + instant follow-up (< 5 min)',
      'AI-generated listing descriptions',
      'Automated showing scheduler',
      'CRM pipeline with auto-nurture sequences',
    ],
    stat: 'Speed-to-lead matters: 78% of deals go to the first agent who responds.',
  },
  {
    key: 'nightlife',
    label: 'Nightlife / Events',
    revenue: '$15K–$120K/mo',
    margin: '30–60%',
    opportunity: '$5K–$20K/mo',
    wins: [
      'Guest list + RSVP automation via DM',
      'Ticket sales funnels with upsells',
      'VIP table booking system',
      'Promoter tracking + payout automation',
    ],
    stat: 'Automated guest lists cut no-show rates by up to 35%.',
  },
  {
    key: 'cannabis',
    label: 'Cannabis / Dispensary',
    revenue: '$40K–$300K/mo',
    margin: '15–30%',
    opportunity: '$10K–$40K/mo',
    wins: [
      'SMS loyalty + reorder campaigns',
      'Menu + inventory automation',
      'Age-gated lead capture funnels',
      'Staff scheduling + compliance tracking',
    ],
    stat: 'Loyalty programs in cannabis drive 40–60% repeat purchase rates.',
  },
  {
    key: 'service',
    label: 'Service Business',
    revenue: '$5K–$50K/mo',
    margin: '50–75%',
    opportunity: '$3K–$15K/mo',
    wins: [
      'Automated intake + proposal delivery',
      'Review + referral request sequences',
      'Booking and reminder flows',
      'Content system for consistent leads',
    ],
    stat: 'Service businesses with automated follow-up close 3x more referrals.',
  },
  {
    key: 'fashion',
    label: 'Fashion / Apparel',
    revenue: '$5K–$60K/mo',
    margin: '40–70%',
    opportunity: '$4K–$18K/mo',
    wins: [
      'Drop launch funnels with waitlist hype',
      'AI-written product copy at scale',
      'Influencer outreach automation',
      'Restock + loyalty SMS sequences',
    ],
    stat: 'Waitlist-based drops convert 4–6x higher than cold launches.',
  },
  {
    key: 'fitness',
    label: 'Fitness / Wellness',
    revenue: '$6K–$40K/mo',
    margin: '35–60%',
    opportunity: '$3K–$12K/mo',
    wins: [
      'Lead magnet + trial booking funnels',
      'Class reminder + churn prevention flows',
      'Automated check-in + progress tracking',
      'Referral program on autopilot',
    ],
    stat: 'Gyms with automated onboarding keep members 2x longer on average.',
  },
];

export default function NicheCalculator() {
  const [selected, setSelected] = useState<string | null>(null);

  const active = niches.find((n) => n.key === selected);

  return (
    <section className="section-gap border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
          The numbers
        </p>
        <h2 className="font-display text-[clamp(2rem,5vw,4rem)] tracking-[-0.03em] leading-[0.95] mb-4 max-w-[700px]">
          Pick a niche. See what's possible.
        </h2>
        <p className="text-text-secondary text-[14px] mb-12 max-w-[500px]">
          For your business, a client's, or someone you know. These are real numbers from real industries.
        </p>

        {/* Niche grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-10">
          {niches.map((n) => (
            <button
              key={n.key}
              onClick={() => setSelected(selected === n.key ? null : n.key)}
              className={`px-4 py-3 rounded-xl text-left text-[13px] font-medium transition-all duration-200 border ${
                selected === n.key
                  ? 'border-text text-text bg-text/[0.06]'
                  : 'border-border text-text-muted hover:border-text/30 hover:text-text'
              }`}
            >
              {n.label}
            </button>
          ))}
        </div>

        {/* Results panel */}
        {active && (
          <div className="border border-border rounded-2xl overflow-hidden">
            {/* Top stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">
              <div className="bg-bg p-8">
                <p className="text-text-muted text-[11px] font-mono tracking-widest uppercase mb-3">
                  Avg monthly revenue
                </p>
                <p className="font-display text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.03em] leading-none">
                  {active.revenue}
                </p>
              </div>
              <div className="bg-bg p-8">
                <p className="text-text-muted text-[11px] font-mono tracking-widest uppercase mb-3">
                  Profit margin
                </p>
                <p className="font-display text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.03em] leading-none">
                  {active.margin}
                </p>
              </div>
              <div className="bg-bg p-8">
                <p className="text-text-muted text-[11px] font-mono tracking-widest uppercase mb-3">
                  AI + systems upside
                </p>
                <p className="font-display text-[clamp(1.8rem,4vw,2.8rem)] tracking-[-0.03em] leading-none gradient-text">
                  {active.opportunity}
                </p>
              </div>
            </div>

            {/* Wins + stat */}
            <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-10 bg-surface">
              <div>
                <p className="text-text-muted text-[11px] font-mono tracking-widest uppercase mb-5">
                  Where the money is
                </p>
                <ul className="space-y-3">
                  {active.wins.map((w, i) => (
                    <li key={i} className="flex items-start gap-3 text-[14px] text-text-secondary">
                      <span className="text-text shrink-0 mt-0.5">—</span>
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col justify-between gap-8">
                <div className="p-6 border border-border rounded-xl bg-bg">
                  <p className="text-text-muted text-[11px] font-mono tracking-widest uppercase mb-3">
                    The stat
                  </p>
                  <p className="text-text text-[15px] leading-relaxed">
                    {active.stat}
                  </p>
                </div>
                <div>
                  <p className="text-text-secondary text-[13px] mb-4">
                    I build these systems for businesses like this. Let me show you what's possible for yours.
                  </p>
                  <Link
                    href="/contact"
                    className="magnetic-btn inline-flex"
                  >
                    <span className="relative z-10">Start a Project →</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {!active && (
          <div className="border border-border border-dashed rounded-2xl p-12 text-center">
            <p className="text-text-muted text-[14px]">
              Select a niche above to see the numbers.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
