import PageShell from "@/components/PageShell";
import LeadForm from "@/components/LeadForm";
import RevealOnScroll from "@/components/RevealOnScroll";
import SpotlightCard from "@/components/SpotlightCard";

export default function CareersPage() {
  return (
    <PageShell ctaText="Apply" ctaHref="#apply">
      <section className="min-h-[70vh] flex items-center justify-center text-center relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[700px] mx-auto px-6 relative z-10">
          <p className="text-accent text-[13px] tracking-[0.3em] uppercase mb-6 hero-animate hero-delay-1">
            Careers
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] mb-8 hero-animate hero-delay-2">
            <span className="gradient-text">Build the future of</span>
            <br />
            <span className="gradient-text-blue">AI education.</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-[480px] mx-auto hero-animate hero-delay-3">
            Small team. Moving fast. If you&apos;re hungry and want to be
            part of something big &mdash; keep reading.
          </p>
        </div>
      </section>

      <section className="section-gap">
        <div className="max-w-[800px] mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-semibold tracking-[-0.02em] text-center mb-16">
              Open Roles
            </h2>
          </RevealOnScroll>
          <div className="space-y-4">
            {[
              { title: "Sales Representative", type: "Commission", desc: "Close deals for AI courses and consulting. We bring leads, you close them." },
              { title: "Content Creator", type: "Contract", desc: "Create AI content for social — short-form video, carousels, threads." },
              { title: "Community Manager", type: "Part-time", desc: "Manage the student community. Keep engagement high, help people win." },
            ].map((role, i) => (
              <RevealOnScroll key={role.title} delay={(i % 3) + 1}>
                <SpotlightCard className="skill-card">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-semibold tracking-[-0.02em]">{role.title}</h3>
                    <span className="text-text-muted text-[11px] tracking-[0.15em] uppercase">
                      {role.type}
                    </span>
                  </div>
                  <p className="text-text-secondary text-[14px] leading-relaxed">{role.desc}</p>
                </SpotlightCard>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll>
            <p className="text-text-muted text-[14px] text-center mt-8">
              Don&apos;t see your role? Apply anyway.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section id="apply" className="section-gap">
        <div className="max-w-[480px] mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-center mb-3">
              Apply
            </h2>
            <p className="text-text-secondary text-[14px] text-center mb-10">
              Tell me about yourself and what role interests you.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <LeadForm type="careers" buttonText="Submit Application" />
          </RevealOnScroll>
        </div>
      </section>
    </PageShell>
  );
}
