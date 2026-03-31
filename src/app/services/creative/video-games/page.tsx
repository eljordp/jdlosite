"use client";

import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import IsThisForYou from "@/components/IsThisForYou";
import BeforeAfter from "@/components/BeforeAfter";

export default function ProductPage() {
  const includes = [
    "Original story + world design",
    "Character design + sprites",
    "Multiple levels/chapters",
    "Boss battles + minigames",
    "Save system + progression",
    "Sound design + music",
    "Cutscenes + dialogue",
    "Playtesting + polish",
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
            Real games people actually play.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[540px] hero-animate hero-delay-3">
            Full playable games with stories, characters, progression systems, and original art. Not demos. Finished products.
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
              <p className="font-display text-[clamp(2.5rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">Custom quote</p>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">Every game is different. A simple web game might be $5K. A full RPG with 7 chapters, cutscenes, and original art could be $25K+. Tell me your vision and I&apos;ll scope it honestly.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?product=video-games" className="magnetic-btn">
                  <span className="relative z-10">Get Started</span>
                </Link>
                <a href="https://instagram.com/jdlo" target="_blank" rel="noopener noreferrer" className="ghost-btn">DM @jdlo</a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>
      <BeforeAfter
        product="video-games"
        before={{
          title: "Without a real game",
          items: [
            "You have a game idea stuck in your head",
            "Mockups that never become playable",
            "No one takes the concept seriously",
            "Developers quote $100K and 12 months",
            "The idea dies in a Google Doc",
            "You settle for something generic",
          ],
        }}
        after={{
          title: "With a JDLO game",
          items: [
            "Fully playable game people can actually play",
            "Original characters, story, and world",
            "Shipped in weeks, not years",
            "Something you can show investors and audiences",
            "A portfolio piece that makes people stop scrolling",
            "Built by someone who shipped a 7-chapter RPG",
          ],
        }}
      />

      <IsThisForYou
        product="video-games"
        statements={[
          "I have a game concept or story I want to bring to life",
          "I want a playable game, not just a mockup or demo",
          "I have a budget set aside for this project",
          "I want original characters, art, and world design",
          "I'm building this for my audience, portfolio, or business",
          "I want someone who's actually shipped a full game before",
        ]}
        threshold={3}
      />

      {/* Case Study */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">Related Work</p>
            <div className="py-10 border-b border-border">
              <p className="text-[11px] font-mono text-text-muted tracking-[0.15em] uppercase mb-2">Game</p>
              <h3 className="font-display text-[clamp(1.4rem,3vw,2.2rem)] tracking-[-0.02em] leading-[1.1] mb-3">JDLO The Game</h3>
              <p className="text-text-secondary text-[15px] leading-relaxed mb-6 max-w-[500px]">Full RPG with 7 chapters, 20+ characters, original story and art</p>
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {[{ v: "7", l: "chapters" }, { v: "222+", l: "interactables" }, { v: "Full", l: "RPG" }].map(s => (
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
                <Link href="/contact?product=video-games" className="magnetic-btn">
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
