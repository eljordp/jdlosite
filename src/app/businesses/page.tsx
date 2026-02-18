import PageShell from "@/components/PageShell";
import LeadForm from "@/components/LeadForm";

export default function BusinessesPage() {
  return (
    <PageShell ctaText="Book a Call" ctaHref="#contact">
      <section className="min-h-[70vh] flex items-center justify-center text-center">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-text-muted text-xs tracking-[0.2em] uppercase mb-6 animate-in delay-1">
            For Businesses & Teams
          </p>
          <h1 className="font-serif text-4xl md:text-7xl leading-[1.05] mb-8 animate-in delay-2">
            Your team is leaving<br />money on the table.
          </h1>
          <p className="text-text-secondary text-lg max-w-lg mx-auto animate-in delay-3">
            Most businesses use AI at 10% of its potential.
            We find the gaps, train your team, and build the systems.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-20">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-16 text-center">
            {[
              { num: "01", title: "Audit", desc: "We analyze your workflows and find where AI saves the most time and money." },
              { num: "02", title: "Train", desc: "Custom training on the specific tools and workflows that matter for your operation." },
              { num: "03", title: "Implement", desc: "We build and deploy the systems — automations, agents, integrations — and make sure they stick." },
            ].map((step) => (
              <div key={step.num}>
                <span className="text-text-muted text-xs font-mono">{step.num}</span>
                <h3 className="font-serif text-xl mt-3 mb-3">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-2xl mx-auto px-8">
          <h2 className="font-serif text-3xl text-center mb-12">
            What Your Team Gets
          </h2>
          <div className="space-y-px">
            {[
              "AI workflow audit & strategy report",
              "Custom team training (live or recorded)",
              "Implementation & integration support",
              "Ongoing advisory as needed",
            ].map((item) => (
              <div key={item} className="border border-border p-5 flex items-center gap-4">
                <span className="text-text-muted text-xs">&rarr;</span>
                <span className="text-text-secondary text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32">
        <div className="max-w-lg mx-auto px-8">
          <h2 className="font-serif text-3xl text-center mb-4">
            Apply to Work With Us
          </h2>
          <p className="text-text-secondary text-sm text-center mb-12">
            Complete the form below and we&apos;ll be in touch within 48 hours.
          </p>
          <LeadForm type="business" buttonText="Submit Application" />
        </div>
      </section>
    </PageShell>
  );
}
