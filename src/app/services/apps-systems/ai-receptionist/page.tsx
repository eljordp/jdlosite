import Link from "next/link";
import PageShell from "@/components/PageShell";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata = {
  title: "AI Receptionist | JDLO",
  description: "An AI-powered phone system that answers calls, qualifies leads, books appointments, and follows up — 24/7.",
};

export default function ProductPage() {
  const includes = [
    "24/7 call answering",
    "Lead qualification",
    "Appointment booking",
    "Follow-up messages",
    "Call routing",
    "Custom voice + script",
    "Admin dashboard",
    "Analytics + reporting",
  ];

  return (
    <PageShell>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-end pb-16 pt-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
          <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-8 hero-animate hero-delay-1">
            Apps & Systems
          </p>
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] tracking-[-0.03em] leading-[0.95] mb-6 hero-animate hero-delay-2">
            Never miss a call again.
          </h1>
          <p className="text-text-secondary text-xl leading-relaxed max-w-[540px] hero-animate hero-delay-3">
            An AI-powered phone system that answers calls, qualifies leads, books appointments, and follows up — 24/7, while you sleep.
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
              <p className="font-display text-[clamp(2.5rem,5vw,4.5rem)] tracking-[-0.03em] leading-[0.95] mb-6">From $1,500</p>
              <p className="text-text-secondary text-[16px] leading-relaxed mb-8">That&apos;s the setup fee. Here&apos;s what you&apos;re getting: an AI that answers every call to your business 24/7 — qualifies whether the person is worth your time, books appointments directly on your calendar, sends confirmation texts, follows up with no-shows, and gives you a dashboard showing every call, every lead, every booking. The alternative is hiring a receptionist at $3K/month who still misses calls and takes lunch breaks. This pays for itself in the first month.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact?product=ai-receptionist" className="magnetic-btn">
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
