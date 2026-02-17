import PageShell from "@/components/PageShell";
import LeadForm from "@/components/LeadForm";

const roles = [
  {
    title: "Sales Representative",
    type: "COMMISSION",
    desc: "Close deals for AI courses and consulting. We bring leads, you close them.",
  },
  {
    title: "Content Creator",
    type: "CONTRACT",
    desc: "Create AI content for social — short-form video, carousels, threads.",
  },
  {
    title: "Community Manager",
    type: "PART-TIME",
    desc: "Manage the student community. Keep engagement high, help people win.",
  },
];

export default function CareersPage() {
  return (
    <PageShell ctaText="APPLY" ctaHref="#apply">
      <section className="min-h-[60vh] flex items-center">
        <div className="max-w-4xl mx-auto px-6 pt-16">
          <p className="font-mono text-green text-xs tracking-[0.3em] mb-6 animate-in delay-1">
            {'>'} CAREERS // JOIN THE TEAM
          </p>
          <h1 className="text-4xl md:text-6xl font-black leading-[0.95] mb-8 animate-in delay-2">
            Build the future of<br />
            <span className="text-green">AI education.</span>
          </h1>
          <p className="text-text-mid text-lg max-w-xl leading-relaxed animate-in delay-3">
            Small team. Moving fast. If you&apos;re hungry and want to
            be at the front of AI — keep reading.
          </p>
        </div>
      </section>

      <section className="py-28 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-2 h-2 bg-green" />
            <h2 className="font-mono text-xs tracking-[0.3em] text-text-dim">
              OPEN ROLES
            </h2>
          </div>
          <div className="space-y-px bg-border">
            {roles.map((role) => (
              <div
                key={role.title}
                className="bg-bg p-8 hover:bg-surface transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="font-bold text-lg">{role.title}</h3>
                  <span className="font-mono text-[10px] text-green tracking-wider">
                    {role.type}
                  </span>
                </div>
                <p className="text-text-dim text-sm">{role.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-text-dim text-sm mt-6 font-mono">
            Don&apos;t see your role? Apply anyway.
          </p>
        </div>
      </section>

      <section id="apply" className="py-28 border-t border-border">
        <div className="max-w-lg mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-green" />
            <h2 className="font-mono text-xs tracking-[0.3em] text-text-dim">
              APPLY
            </h2>
          </div>
          <p className="text-2xl font-bold mb-2">Join the team.</p>
          <p className="text-text-dim text-sm mb-8">
            Tell us about yourself and what role interests you.
          </p>
          <LeadForm type="careers" buttonText="SUBMIT" />
        </div>
      </section>
    </PageShell>
  );
}
