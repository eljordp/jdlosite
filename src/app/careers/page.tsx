import PageShell from "@/components/PageShell";
import LeadForm from "@/components/LeadForm";

export default function CareersPage() {
  return (
    <PageShell ctaText="Apply" ctaHref="#apply">
      <section className="min-h-[60vh] flex items-center justify-center text-center">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-text-muted text-xs tracking-[0.2em] uppercase mb-6 animate-in delay-1">
            Careers
          </p>
          <h1 className="font-serif text-4xl md:text-7xl leading-[1.05] mb-8 animate-in delay-2">
            Build the future of<br />AI education.
          </h1>
          <p className="text-text-secondary text-lg max-w-lg mx-auto animate-in delay-3">
            Small team. Moving fast. If you&apos;re hungry and want to be
            part of something big — keep reading.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-20">
            Open Roles
          </h2>
          <div className="space-y-px">
            {[
              { title: "Sales Representative", type: "Commission", desc: "Close deals for AI courses and consulting. We bring leads, you close them." },
              { title: "Content Creator", type: "Contract", desc: "Create AI content for social — short-form video, carousels, threads." },
              { title: "Community Manager", type: "Part-time", desc: "Manage the student community. Keep engagement high, help people win." },
            ].map((role) => (
              <div
                key={role.title}
                className="border border-border hover:border-border-hover p-8 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="font-serif text-lg">{role.title}</h3>
                  <span className="text-text-muted text-xs tracking-[0.15em] uppercase">
                    {role.type}
                  </span>
                </div>
                <p className="text-text-secondary text-sm">{role.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-text-muted text-sm text-center mt-8">
            Don&apos;t see your role? Apply anyway.
          </p>
        </div>
      </section>

      <section id="apply" className="py-32">
        <div className="max-w-lg mx-auto px-8">
          <h2 className="font-serif text-3xl text-center mb-4">Apply</h2>
          <p className="text-text-secondary text-sm text-center mb-12">
            Tell us about yourself and what role interests you.
          </p>
          <LeadForm type="careers" buttonText="Submit Application" />
        </div>
      </section>
    </PageShell>
  );
}
