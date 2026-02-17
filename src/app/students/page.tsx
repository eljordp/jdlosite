import PageShell from "@/components/PageShell";
import LeadForm from "@/components/LeadForm";

const modules = [
  {
    num: "01",
    title: "AI Fundamentals",
    desc: "How AI actually works. No PhD needed — just the concepts that matter for using it.",
  },
  {
    num: "02",
    title: "Prompt Engineering",
    desc: "Get exactly what you want from AI, every time. Techniques most people will never figure out on their own.",
  },
  {
    num: "03",
    title: "Automation & Workflows",
    desc: "Build systems that do your work for you. Connect tools, create agents, save hours.",
  },
  {
    num: "04",
    title: "Building with AI",
    desc: "Go from user to builder. Ship real projects that prove you know what you're doing.",
  },
  {
    num: "05",
    title: "AI Career Positioning",
    desc: "How to actually land a role or win clients in the AI space. Portfolio, outreach, positioning.",
  },
];

export default function StudentsPage() {
  return (
    <PageShell ctaText="JOIN WAITLIST" ctaHref="#enroll">
      <section className="min-h-[70vh] flex items-center">
        <div className="max-w-4xl mx-auto px-6 pt-16">
          <p className="font-mono text-green text-xs tracking-[0.3em] mb-6 animate-in delay-1">
            {'>'} COURSE // INDIVIDUALS
          </p>
          <h1 className="text-4xl md:text-6xl font-black leading-[0.95] mb-8 animate-in delay-2">
            Learn AI that<br />
            <span className="text-green">gets you hired.</span>
          </h1>
          <p className="text-text-mid text-lg max-w-xl leading-relaxed animate-in delay-3">
            A complete, project-based AI course. Go from zero to building
            real systems — with a community and a mentor behind you.
          </p>
        </div>
      </section>

      <section className="py-28 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-2 h-2 bg-green" />
            <h2 className="font-mono text-xs tracking-[0.3em] text-text-dim">
              CURRICULUM
            </h2>
          </div>
          <div className="space-y-px bg-border">
            {modules.map((mod) => (
              <div
                key={mod.num}
                className="bg-bg p-8 flex gap-6 items-start hover:bg-surface transition-colors"
              >
                <span className="font-mono text-green text-xs mt-1">
                  {mod.num}
                </span>
                <div>
                  <h3 className="font-bold text-lg mb-2">{mod.title}</h3>
                  <p className="text-text-dim text-sm leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-px bg-border">
            {[
              { icon: "▶", title: "Video Modules", desc: "Self-paced HD lessons" },
              { icon: "◆", title: "Community", desc: "Private group of learners" },
              { icon: "■", title: "Certificate", desc: "Proof of completion" },
            ].map((perk) => (
              <div key={perk.title} className="bg-bg p-8 text-center">
                <p className="text-green font-mono text-lg mb-3">{perk.icon}</p>
                <h3 className="font-bold text-sm mb-1">{perk.title}</h3>
                <p className="text-text-dim text-xs font-mono">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enroll" className="py-28 border-t border-border">
        <div className="max-w-lg mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-green" />
            <h2 className="font-mono text-xs tracking-[0.3em] text-text-dim">
              ENROLL
            </h2>
          </div>
          <p className="text-2xl font-bold mb-2">Join the waitlist.</p>
          <p className="text-text-dim text-sm mb-8">
            Get early access and launch pricing.
          </p>
          <LeadForm type="student" buttonText="JOIN WAITLIST" />
        </div>
      </section>
    </PageShell>
  );
}
