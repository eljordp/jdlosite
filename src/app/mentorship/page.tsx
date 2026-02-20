import PageShell from "@/components/PageShell";
import LeadForm from "@/components/LeadForm";
import RevealOnScroll from "@/components/RevealOnScroll";
import SpotlightCard from "@/components/SpotlightCard";
import Link from "next/link";

export default function MentorshipPage() {
  return (
    <PageShell ctaText="Apply" ctaHref="#apply" activeSlug="mentorship">
      <section className="min-h-[80vh] flex items-center justify-center text-center relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[700px] mx-auto px-6 relative z-10">
          <p className="text-accent text-[13px] tracking-[0.3em] uppercase mb-6 hero-animate hero-delay-1">
            1-on-1 Mentorship
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] mb-8 hero-animate hero-delay-2">
            <span className="gradient-text">Skip the</span>
            <br />
            <span className="gradient-text-blue">learning curve.</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-[480px] mx-auto hero-animate hero-delay-3">
            Direct access to me. Personalized roadmap, weekly calls,
            and accountability. For people who are serious.
          </p>
          <p className="text-text text-[1.75rem] font-bold tracking-tight mt-6 hero-animate hero-delay-4">
            $2,500<span className="text-text-secondary text-xl font-normal">/mo</span>
          </p>
        </div>
      </section>

      <section className="section-gap">
        <div className="max-w-[900px] mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-center mb-16">
              What You Get
            </h2>
          </RevealOnScroll>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { title: "Weekly 1-on-1 Calls", desc: "60 minutes. We work through your challenges, review progress, plan next moves." },
              { title: "Custom AI Roadmap", desc: "A personalized plan based on your goals — career, business, or project." },
              { title: "Direct Access", desc: "Message me between calls. Get answers and feedback so you're never stuck." },
              { title: "Accountability", desc: "Weekly goals, progress tracking, honest feedback. I push you to move faster." },
            ].map((item, i) => (
              <RevealOnScroll key={item.title} delay={(i % 2) + 1}>
                <SpotlightCard className="skill-card h-full">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] mb-3">{item.title}</h3>
                  <p className="text-text-secondary text-[14px] leading-relaxed">{item.desc}</p>
                </SpotlightCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="max-w-[600px] mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-center mb-10">
              This is for you if...
            </h2>
          </RevealOnScroll>
          <div className="space-y-3">
            {[
              "You're serious about mastering AI and willing to put in the work",
              "You want personalized guidance, not generic courses",
              "You're building something and need an edge",
              "You value speed over figuring it out alone",
              "You want someone in your corner who's actually doing this",
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={(i % 3) + 1}>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface/50 p-5 hover:border-border-hover transition-all duration-300">
                  <span className="text-accent text-sm">&rarr;</span>
                  <p className="text-text-secondary text-[14px]">{item}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="max-w-[480px] mx-auto px-6 text-center">
          <RevealOnScroll>
            <p className="text-text-secondary text-[14px] mb-4">Not sure if mentorship is the right move yet?</p>
            <Link
              href="/quiz/mentorship"
              className="inline-flex items-center gap-2 text-accent text-[14px] font-mono hover:opacity-70 transition-opacity duration-200"
            >
              Take the 2-minute qualification quiz →
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      <section id="apply" className="section-gap">
        <div className="max-w-[480px] mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-center mb-3">
              Apply for Mentorship
            </h2>
            <p className="text-text-secondary text-[14px] text-center mb-10">
              Spots are limited. Tell me about yourself and what
              you&apos;re trying to achieve.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <LeadForm type="mentorship" buttonText="Submit Application" />
          </RevealOnScroll>
        </div>
      </section>
    </PageShell>
  );
}
