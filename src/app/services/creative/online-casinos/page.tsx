"use client";

import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import IsThisForYou from "@/components/IsThisForYou";
import BeforeAfter from "@/components/BeforeAfter";

export default function ProductPage() {
  const includes = [
    "Multiple game types (slots, blackjack, crash, etc.)",
    "Real-time multiplayer",
    "Player accounts + wallets",
    "House edge management",
    "Admin panel + analytics",
    "Promotional systems + bonuses",
    "Compliance-ready architecture",
    "Leaderboards + social features",
  ];

  return (
    <PageShell>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-end pb-16 pt-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8 hero-animate hero-delay-1">
            Creative & Custom
          </p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] tracking-[-0.03em] leading-[0.95] mb-6 hero-animate hero-delay-2">
            The whole operation, from scratch.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[540px] hero-animate hero-delay-3">
            Real-time multiplayer platforms with slots, table games, house edge management, and compliance-ready architecture.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">What&apos;s Included</p>
          </RevealOnScroll>
          <div className="max-w-[640px]">
            {includes.map((item, i) => (
              <RevealOnScroll key={i} delay={(i % 4) + 1}>
                <div className="py-4 border-b border-border flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-text mt-2.5 shrink-0" />
                  <span className="text-text-secondary text-[15px] leading-relaxed">{item}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <div className="max-w-[600px]">
              <p className="font-display text-[clamp(2.5rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">From $25,000</p>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">This is the most complex thing I build. A full online casino includes: multiple game types (slots, blackjack, crash, poker, dice, roulette, you pick which ones), real-time multiplayer so players see each other, player accounts with wallets and transaction history, house edge management so the math works, admin panel with full control over games/players/promotions, compliance-ready architecture, leaderboards and social features, and a promotional system for bonuses and rewards. I built Quanta, a full casino with 23 game types, from scratch. This is not a template. This is a real platform.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?product=online-casinos" className="magnetic-btn">
                  <span className="relative z-10">Get Started</span>
                </Link>
                <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="ghost-btn">DM @jdlo</a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <BeforeAfter
        product="online-casinos"
        before={{
          title: "Without a custom casino",
          items: [
            "White-label platform that looks like every other one",
            "Monthly licensing fees that never end",
            "No control over games or house edge",
            "Generic UI that doesn&apos;t match your brand",
            "Limited to whatever games they offer",
            "Players leave for platforms with better UX",
          ],
        }}
        after={{
          title: "With a JDLO casino",
          items: [
            "Fully custom platform with your branding",
            "Original games built for your players",
            "You own the code — no licensing fees",
            "Real-time multiplayer that actually works",
            "Admin panel to manage everything",
            "Built by someone who shipped a 23-game casino",
          ],
        }}
      />

      <IsThisForYou
        product="online-casinos"
        statements={[
          "I want a real casino platform, not a template",
          "I need real-time multiplayer, players see each other",
          "I need house edge management that actually works",
          "I want multiple game types (slots, blackjack, crash, etc.)",
          "I need an admin panel to manage players and promotions",
          "I have $25K+ budgeted for this project",
          "I need compliance-ready architecture",
        ]}
        threshold={4}
        yesMessage="You're serious. Let's build your casino."
      />

      {/* Case Study */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">Related Work</p>
            <div className="py-10 border-b border-border">
              <p className="text-[11px] font-mono text-text-muted tracking-[0.15em] uppercase mb-2">Casino</p>
              <h3 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] tracking-[-0.02em] leading-[1.1] mb-3">Quanta Casino</h3>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6 max-w-[500px]">Full online casino with 23 games, real-time multiplayer, and admin controls</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[{ v: "23", l: "games" }, { v: "Real-time", l: "multiplayer" }, { v: "$50K+", l: "platform" }].map(s => (
                  <div key={s.l} className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-text/20 shrink-0" />
                    <span className="text-text font-medium text-[14px]">{s.v} {s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <div className="max-w-[600px]">
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">
                Ready to build yours?
              </h2>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">
                Tell me about your project and I&apos;ll give you a clear plan, timeline, and price within 24 hours.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?product=online-casinos" className="magnetic-btn">
                  <span className="relative z-10">Get Started</span>
                </Link>
                <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="ghost-btn">
                  DM @jdlo
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageShell>
  );
}
