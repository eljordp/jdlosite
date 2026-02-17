import PageShell from "@/components/PageShell";
import LeadForm from "@/components/LeadForm";

export default function MentorshipPage() {
  return (
    <PageShell ctaText="APPLY" ctaHref="#apply">
      <section className="min-h-[70vh] flex items-center">
        <div className="max-w-4xl mx-auto px-6 pt-16">
          <p className="font-mono text-green text-xs tracking-[0.3em] mb-6 animate-in delay-1">
            {'>'} MENTORSHIP // 1-ON-1
          </p>
          <h1 className="text-4xl md:text-6xl font-black leading-[0.95] mb-8 animate-in delay-2">
            Skip the learning curve.<br />
            <span className="text-green">Get a guide.</span>
          </h1>
          <p className="text-text-mid text-lg max-w-xl leading-relaxed animate-in delay-3">
            Direct access to me. Personalized roadmap, weekly calls, and
            accountability. For people who are serious about moving fast.
          </p>
        </div>
      </section>

      <section className="py-28 border-t border-border">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-2 h-2 bg-green" />
            <h2 className="font-mono text-xs tracking-[0.3em] text-text-dim">
              WHAT YOU GET
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {[
              {
                title: "Weekly 1-on-1 Calls",
                desc: "60 minutes. We work through your specific challenges, review progress, plan next moves.",
              },
              {
                title: "Custom AI Roadmap",
                desc: "Personalized plan based on your goals — career, business, or project.",
              },
              {
                title: "Direct Access",
                desc: "Message me between calls. Get answers and feedback so you're never stuck.",
              },
              {
                title: "Accountability",
                desc: "Weekly goals, progress tracking, honest feedback. I push you to move faster.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-bg p-8 hover:bg-surface transition-colors">
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-text-dim text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-12">
            <span className="w-2 h-2 bg-green" />
            <h2 className="font-mono text-xs tracking-[0.3em] text-text-dim">
              THIS IS FOR YOU IF
            </h2>
          </div>
          <div className="space-y-px bg-border">
            {[
              "You're serious about mastering AI and willing to put in the work",
              "You want personalized guidance, not generic courses",
              "You're building something and need an edge",
              "You value speed over figuring it out alone",
              "You want someone in your corner who's actually doing this",
            ].map((item) => (
              <div key={item} className="bg-bg p-5 flex items-center gap-3">
                <span className="text-green font-mono text-xs">→</span>
                <p className="text-text-mid text-sm">{item}</p>
              </div>
            ))}
          </div>
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
          <p className="text-2xl font-bold mb-2">Apply for mentorship.</p>
          <p className="text-text-dim text-sm mb-8">
            Spots are limited. Tell me about yourself and what you&apos;re
            trying to achieve.
          </p>
          <LeadForm type="mentorship" buttonText="SUBMIT APPLICATION" />
        </div>
      </section>
    </PageShell>
  );
}
