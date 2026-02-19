import PageShell from "@/components/PageShell";
import LeadForm from "@/components/LeadForm";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function BusinessesPage() {
  return (
    <PageShell ctaText="Book a Call" ctaHref="https://calendar.app.google/uZVeQYHLMe5croEn8" ctaExternal>
      <section className="min-h-[80vh] flex items-center justify-center text-center relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[700px] mx-auto px-6 relative z-10">
          <p className="text-accent text-[13px] tracking-[0.3em] uppercase mb-6 hero-animate hero-delay-1">
            For Businesses & Teams
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] mb-8 hero-animate hero-delay-2">
            <span className="gradient-text">Your team is leaving</span>
            <br />
            <span className="gradient-text-blue">money on the table.</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-[480px] mx-auto hero-animate hero-delay-3">
            Most businesses use AI at 10% of its potential.
            I find the gaps, train your team, and build the systems.
          </p>
        </div>
      </section>

      <section className="section-gap">
        <div className="max-w-[900px] mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-center mb-16">
              How It Works
            </h2>
          </RevealOnScroll>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Audit", desc: "I analyze your workflows and find where AI saves the most time and money." },
              { num: "02", title: "Train", desc: "Custom training on the specific tools and workflows that matter for your operation." },
              { num: "03", title: "Implement", desc: "I build and deploy the systems — automations, agents, integrations — and make sure they stick." },
            ].map((step, i) => (
              <RevealOnScroll key={step.num} delay={i + 1}>
                <div className="text-center">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border text-text-muted text-sm font-mono mb-6">
                    {step.num}
                  </span>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] mb-3">{step.title}</h3>
                  <p className="text-text-secondary text-[14px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="section-gap">
        <div className="max-w-[600px] mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-center mb-10">
              What Your Team Gets
            </h2>
          </RevealOnScroll>
          <div className="space-y-3">
            {[
              "AI workflow audit & strategy report",
              "Custom team training (live or recorded)",
              "Implementation & integration support",
              "Ongoing advisory as needed",
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={(i % 3) + 1}>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-surface/50 p-5 hover:border-border-hover transition-all duration-300">
                  <span className="text-accent text-sm">&rarr;</span>
                  <span className="text-text-secondary text-[14px]">{item}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-gap">
        <div className="max-w-[480px] mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-center mb-3">
              Apply to Work With Me
            </h2>
            <p className="text-text-secondary text-[14px] text-center mb-10">
              Complete the form and I&apos;ll be in touch within 48 hours.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <LeadForm type="business" buttonText="Submit Application" />
          </RevealOnScroll>
        </div>
      </section>
    </PageShell>
  );
}
