import type { ReactNode } from "react";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";
import { GlowLink } from "@/components/GlowButton";

type Proof = { name: string; result: string; href: string };

export default function RevenueServicePage({
  eyebrow,
  title,
  intro,
  problems,
  deliverables,
  outcomes,
  proof,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  problems: string[];
  deliverables: { title: string; body: string }[];
  outcomes: string[];
  proof: Proof[];
  children?: ReactNode;
}) {
  return (
    <PageShell activeSlug="services">
      <section className="min-h-[84vh] flex items-end pb-[10vh] px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto w-full pt-28">
          <RevealOnScroll>
            <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-9">{eyebrow}</p>
            <h1 className="font-display text-[clamp(3rem,7.4vw,7.2rem)] tracking-[-0.045em] leading-[0.9] max-w-[1100px] mb-10">{title}</h1>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-[680px] mb-10">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-3"><GlowLink href="/contact?ref=service" className="w-full sm:w-auto">Discuss This System</GlowLink><Link href="#included" className="ghost-btn w-full sm:w-auto">What’s included</Link></div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="section-gap border-t border-border bg-surface">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24">
          <RevealOnScroll><p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono">When this is the bottleneck</p></RevealOnScroll>
          <div className="space-y-0">
            {problems.map((problem, i) => <RevealOnScroll key={problem} delay={(i % 4) + 1}><p className="font-display text-[clamp(1.5rem,3vw,2.6rem)] tracking-[-0.025em] leading-[1.08] py-6 border-b border-border"><span className="text-accent text-xs font-mono mr-5">0{i + 1}</span>{problem}</p></RevealOnScroll>)}
          </div>
        </div>
      </section>

      <section className="section-gap border-t border-border" id="included">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll><p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">What I build</p><h2 className="font-display text-[clamp(2.4rem,5vw,4.8rem)] tracking-[-0.035em] leading-[0.95] mb-16">The pieces are chosen around the outcome.</h2></RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-px bg-border rounded-2xl overflow-hidden">
            {deliverables.map((item, i) => <RevealOnScroll key={item.title} delay={(i % 2) + 1}><div className="bg-bg p-8 md:p-10 h-full"><h3 className="font-display text-3xl tracking-[-0.02em] mb-4">{item.title}</h3><p className="text-text-secondary text-[15px] leading-relaxed">{item.body}</p></div></RevealOnScroll>)}
          </div>
        </div>
      </section>

      <section className="section-gap border-t border-border bg-surface">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll><p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-10">Business outcomes</p></RevealOnScroll>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {outcomes.map((outcome, i) => <RevealOnScroll key={outcome} delay={(i % 3) + 1}><div className="border border-border rounded-xl p-6 h-full"><span className="text-accent text-xs font-mono">0{i + 1}</span><p className="text-lg mt-8 leading-snug">{outcome}</p></div></RevealOnScroll>)}
          </div>
          {children}
        </div>
      </section>

      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll><p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-10">Relevant systems</p></RevealOnScroll>
          <div className="grid md:grid-cols-3 gap-4">
            {proof.map((item) => <Link key={item.name} href={item.href} className="group border border-border rounded-xl p-6 hover:bg-surface transition-colors"><p className="font-display text-2xl mb-4">{item.name}</p><p className="text-text-secondary text-sm leading-relaxed mb-8">{item.result}</p><span className="text-xs font-mono group-hover:text-accent">View case study →</span></Link>)}
          </div>
        </div>
      </section>

      <section className="section-gap border-t border-border text-center">
        <div className="max-w-[850px] mx-auto px-6"><RevealOnScroll><h2 className="font-display text-[clamp(3rem,6vw,5.7rem)] tracking-[-0.04em] leading-[0.92] mb-8">Start with the business problem.</h2><p className="text-text-secondary text-lg mb-10">Tell me what is costing you leads, time, or visibility. I’ll tell you what system is worth building.</p><GlowLink href="/contact?ref=service-bottom">Start a Project</GlowLink></RevealOnScroll></div>
      </section>
    </PageShell>
  );
}
