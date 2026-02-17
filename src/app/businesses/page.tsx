import PageShell from "@/components/PageShell";
import LeadForm from "@/components/LeadForm";

export default function BusinessesPage() {
  return (
    <PageShell ctaText="BOOK A CALL" ctaHref="#contact">
      <section className="min-h-[70vh] flex items-center">
        <div className="max-w-4xl mx-auto px-6 pt-16">
          <p className="font-mono text-green text-xs tracking-[0.3em] mb-6 animate-in delay-1">
            {'>'} ENTERPRISE // TEAMS
          </p>
          <h1 className="text-4xl md:text-6xl font-black leading-[0.95] mb-8 animate-in delay-2">
            Your team is leaving<br />
            <span className="text-green">money on the table.</span>
          </h1>
          <p className="text-text-mid text-lg max-w-xl leading-relaxed animate-in delay-3">
            Most businesses use AI at 10% of its potential. We find the gaps,
            train your team, and build the systems.
          </p>
        </div>
      </section>

      <section className="py-28 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-2 h-2 bg-green" />
            <h2 className="font-mono text-xs tracking-[0.3em] text-text-dim">
              PROCESS
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              {
                num: "01",
                title: "Audit",
                desc: "We analyze your current workflows and identify where AI saves the most time and money.",
              },
              {
                num: "02",
                title: "Train",
                desc: "Custom training for your team on the specific AI tools and workflows that matter for your operation.",
              },
              {
                num: "03",
                title: "Implement",
                desc: "We build and deploy the systems — automations, agents, integrations — and make sure they stick.",
              },
            ].map((step) => (
              <div key={step.num} className="bg-bg p-10">
                <span className="font-mono text-green text-xs">{step.num}</span>
                <h3 className="text-2xl font-bold mt-3 mb-4">{step.title}</h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-border">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-2 h-2 bg-green" />
            <h2 className="font-mono text-xs tracking-[0.3em] text-text-dim">
              WHAT YOUR TEAM GETS
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              "AI workflow audit & strategy report",
              "Custom team training (live or recorded)",
              "Implementation & integration support",
              "Ongoing advisory as needed",
            ].map((item) => (
              <div key={item} className="bg-bg p-6 flex items-center gap-3">
                <span className="text-green font-mono text-xs">→</span>
                <span className="text-text-mid text-sm font-mono">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-28 border-t border-border">
        <div className="max-w-lg mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-green" />
            <h2 className="font-mono text-xs tracking-[0.3em] text-text-dim">
              CONTACT
            </h2>
          </div>
          <p className="text-2xl font-bold mb-2">Talk to our team.</p>
          <p className="text-text-dim text-sm mb-8">
            Fill this out and we&apos;ll reach out within 24 hours to schedule a strategy call.
          </p>
          <LeadForm type="business" buttonText="REQUEST A CALL" />
        </div>
      </section>
    </PageShell>
  );
}
