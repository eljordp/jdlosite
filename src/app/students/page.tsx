import PageShell from "@/components/PageShell";
import LeadForm from "@/components/LeadForm";

export default function StudentsPage() {
  return (
    <PageShell ctaText="Join Waitlist" ctaHref="#enroll">
      <section className="min-h-[70vh] flex items-center justify-center text-center">
        <div className="max-w-3xl mx-auto px-8">
          <p className="text-text-muted text-xs tracking-[0.2em] uppercase mb-6 animate-in delay-1">
            AI Course
          </p>
          <h1 className="font-serif text-4xl md:text-7xl leading-[1.05] mb-8 animate-in delay-2">
            Learn AI that gets<br />you ahead.
          </h1>
          <p className="text-text-secondary text-lg max-w-lg mx-auto animate-in delay-3">
            A complete, project-based AI course. Go from zero to building
            real systems — with a community and mentor behind you.
          </p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-20">
            What You&apos;ll Learn
          </h2>
          <div className="space-y-px">
            {[
              { num: "01", title: "AI Fundamentals", desc: "How AI actually works — the concepts that matter for real-world application." },
              { num: "02", title: "Prompt Engineering", desc: "Advanced techniques that 99% of people don't know. Get exactly what you want from AI." },
              { num: "03", title: "Automation & Workflows", desc: "Build AI-powered systems that save hours every week. Connect tools, build agents." },
              { num: "04", title: "Building with AI", desc: "Go from consumer to creator. Build real projects you can show employers or clients." },
              { num: "05", title: "AI Career & Freelancing", desc: "Position yourself in the AI economy. Land roles, win clients, build products." },
            ].map((mod) => (
              <div
                key={mod.num}
                className="border border-border hover:border-border-hover p-8 flex gap-8 items-start transition-colors"
              >
                <span className="text-text-muted text-xs font-mono mt-1">
                  {mod.num}
                </span>
                <div>
                  <h3 className="font-serif text-lg mb-2">{mod.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enroll" className="py-32">
        <div className="max-w-lg mx-auto px-8">
          <h2 className="font-serif text-3xl text-center mb-4">
            Join the Waitlist
          </h2>
          <p className="text-text-secondary text-sm text-center mb-12">
            Get early access and a launch discount.
          </p>
          <LeadForm type="student" buttonText="Join Waitlist" />
        </div>
      </section>
    </PageShell>
  );
}
