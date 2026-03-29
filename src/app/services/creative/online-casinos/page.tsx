import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "Online Casinos | JDLO",
  description: "Real-time multiplayer platforms with slots, table games, house edge management, and compliance-ready architecture.",
};

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
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">This is the most complex thing I build. A full online casino includes: multiple game types (slots, blackjack, crash, poker, dice, roulette — you pick which ones), real-time multiplayer so players see each other, player accounts with wallets and transaction history, house edge management so the math works, admin panel with full control over games/players/promotions, compliance-ready architecture, leaderboards and social features, and a promotional system for bonuses and rewards. I built Quanta — a full casino with 23 game types — from scratch. This is not a template. This is a real platform.</p>
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
    </PageShell>
  );
}
