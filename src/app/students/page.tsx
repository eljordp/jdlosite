import PageShell from "@/components/PageShell";
import LeadForm from "@/components/LeadForm";
import RevealOnScroll from "@/components/RevealOnScroll";
import SpotlightCard from "@/components/SpotlightCard";

export default function StudentsPage() {
  return (
    <PageShell ctaText="Join Waitlist" ctaHref="#enroll">
      <section className="min-h-[80vh] flex items-center justify-center text-center relative">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-[700px] mx-auto px-6 relative z-10">
          <p className="text-accent text-[13px] tracking-[0.3em] uppercase mb-6 hero-animate hero-delay-1">
            AI Course
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.03em] mb-8 hero-animate hero-delay-2">
            <span className="gradient-text">Learn AI that gets</span>
            <br />
            <span className="gradient-text-blue">you ahead.</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-[480px] mx-auto hero-animate hero-delay-3">
            A complete, project-based AI course. Go from zero to building
            real systems &mdash; with a community and mentor behind you.
          </p>
        </div>
      </section>

      <section className="section-gap">
        <div className="max-w-[800px] mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.5rem)] font-semibold tracking-[-0.03em] text-center mb-16">
              What You&apos;ll Learn
            </h2>
          </RevealOnScroll>
          <div className="space-y-4">
            {[
              { num: "01", title: "AI Fundamentals", desc: "How AI actually works — the concepts that matter for real-world application." },
              { num: "02", title: "Prompt Engineering", desc: "Advanced techniques that 99% of people don't know. Get exactly what you want from AI." },
              { num: "03", title: "Automation & Workflows", desc: "Build AI-powered systems that save hours every week. Connect tools, build agents." },
              { num: "04", title: "Building with AI", desc: "Go from consumer to creator. Build real projects you can show employers or clients." },
              { num: "05", title: "AI Career & Freelancing", desc: "Position yourself in the AI economy. Land roles, win clients, build products." },
            ].map((mod, i) => (
              <RevealOnScroll key={mod.num} delay={(i % 3) + 1}>
                <SpotlightCard className="skill-card flex gap-6 items-start">
                  <span className="text-text-muted text-xs font-mono mt-1 shrink-0">
                    {mod.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.02em] mb-2">{mod.title}</h3>
                    <p className="text-text-secondary text-[14px] leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                </SpotlightCard>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="enroll" className="section-gap">
        <div className="max-w-[480px] mx-auto px-6">
          <RevealOnScroll>
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-center mb-3">
              Join the Waitlist
            </h2>
            <p className="text-text-secondary text-[14px] text-center mb-10">
              Get early access and a launch discount.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <LeadForm type="student" buttonText="Join Waitlist" />
          </RevealOnScroll>
        </div>
      </section>
    </PageShell>
  );
}
