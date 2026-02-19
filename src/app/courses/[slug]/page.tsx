import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourse, getAllSlugs, courses } from "@/lib/courses";
import RevealOnScroll from "@/components/RevealOnScroll";
import PageShell from "@/components/PageShell";
import { GlowLink } from "@/components/GlowButton";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return {};
  return {
    title: `${course.title} — JDLO`,
    description: course.description,
  };
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const courseIdx = courses.findIndex((c) => c.slug === slug);
  const prevCourse = courseIdx > 0 ? courses[courseIdx - 1] : null;
  const nextCourse = courseIdx < courses.length - 1 ? courses[courseIdx + 1] : null;

  return (
    <PageShell ctaText="Enroll Now" ctaHref="#enroll" activeSlug={course.slug}>
      {/* ── Hero ── */}
      <section className="min-h-[80vh] flex flex-col justify-end relative px-6 md:px-10 pb-[10vh]">
        <div className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-6 hero-animate hero-delay-1">
            Course
          </p>
          <h1 className="text-[clamp(3rem,9vw,7.5rem)] font-bold leading-[0.9] tracking-[-0.05em] hero-animate hero-delay-2">
            <span className="text-text">{course.title.split(" ")[0]}</span>
            <br />
            <span className="gradient-text-blue">
              {course.title.split(" ").slice(1).join(" ") || "."}
            </span>
          </h1>
          <div className="mt-10 hero-animate hero-delay-3 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <p className="text-text-secondary text-xl leading-relaxed max-w-[480px]">
              {course.tagline}
            </p>
            <div className="flex flex-col items-start md:items-end gap-4">
              <div className="flex items-center gap-8 text-[13px] font-mono text-text-muted">
                <span>{course.duration}</span>
                <span className="w-px h-4 bg-border" />
                <span>{course.level}</span>
                <span className="w-px h-4 bg-border" />
                <span className="text-text">{course.price}</span>
              </div>
              {/* ── Course nav arrows ── */}
              <div className="flex items-center gap-5">
                {prevCourse && (
                  <Link
                    href={`/courses/${prevCourse.slug}`}
                    className="flex items-center gap-2 group"
                  >
                    <span className="bounce-left text-accent text-base leading-none">←</span>
                    <span className="text-[11px] font-mono text-text-muted group-hover:text-accent transition-colors duration-300">
                      {prevCourse.title}
                    </span>
                  </Link>
                )}
                {prevCourse && nextCourse && (
                  <span className="w-px h-3 bg-border" />
                )}
                {nextCourse && (
                  <Link
                    href={`/courses/${nextCourse.slug}`}
                    className="flex items-center gap-2 group"
                  >
                    <span className="text-[11px] font-mono text-text-muted group-hover:text-accent transition-colors duration-300">
                      {nextCourse.title}
                    </span>
                    <span className="bounce-right text-accent text-base leading-none">→</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-[1fr_400px] gap-16">
            <RevealOnScroll>
              <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
                Overview
              </p>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-[580px]">
                {course.description}
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono mb-6">
                What You&apos;ll Be Able To Do
              </p>
              <div className="space-y-4">
                {course.outcomes.map((outcome, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="text-accent text-[11px] font-mono mt-1 shrink-0">
                      0{i + 1}
                    </span>
                    <p className="text-[15px] text-text-secondary leading-snug">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── Curriculum ── */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <div className="flex items-baseline justify-between mb-12">
              <p className="text-text-muted text-[11px] tracking-[0.5em] uppercase font-mono">
                Curriculum
              </p>
              <p className="text-text-muted text-[11px] font-mono hidden md:block">
                {course.modules.length} modules
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-0">
            {course.modules.map((mod, i) => (
              <RevealOnScroll key={mod.num} delay={(i % 3) + 1}>
                <details className="group border-b border-border first:border-t">
                  <summary className="flex items-center justify-between py-7 cursor-pointer">
                    <div className="flex items-center gap-6">
                      <span className="text-accent text-[11px] font-mono shrink-0">
                        {mod.num}
                      </span>
                      <span className="text-[clamp(1.1rem,2.5vw,1.6rem)] font-semibold tracking-[-0.03em]">
                        {mod.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-text-muted text-[12px] font-mono hidden md:block">
                        {mod.lessons.length} lessons
                      </span>
                      <span className="text-text-muted group-open:rotate-45 transition-transform duration-500 text-xl shrink-0">
                        +
                      </span>
                    </div>
                  </summary>
                  <div className="pb-8 pl-12 md:pl-16">
                    <div className="space-y-4">
                      {mod.lessons.map((lesson, j) => (
                        <div key={j} className="flex items-start gap-4">
                          <span className="text-border-hover text-[11px] font-mono mt-1 shrink-0">
                            {String(j + 1).padStart(2, "0")}
                          </span>
                          <p className="text-text-secondary text-[14px] leading-snug">
                            {lesson}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Pipeline ── */}
      <section className="section-gap border-t border-border">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <RevealOnScroll>
            <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-4">
              What Comes After
            </p>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.04em] leading-[0.95] mb-20">
              Finish the course.
              <br />
              <span className="text-text-secondary">Earn your shot.</span>
            </h2>
          </RevealOnScroll>

          <div className="grid md:grid-cols-3 gap-0 border border-border rounded-[20px] overflow-hidden">
            {[
              {
                num: "01",
                title: "Complete the Course",
                desc: "Go through every module. Do the work. Not everyone finishes — the ones who do stand out.",
                tag: "You are here",
              },
              {
                num: "02",
                title: "Paid Project",
                desc: "High performers get first access to real paid projects from my network and business operations. This is where you prove it in the field.",
                tag: "Real money",
              },
              {
                num: "03",
                title: "Team Placement",
                desc: "Top performers from paid projects get the opportunity to join my team directly. Not everyone gets here — but it's there for the right person.",
                tag: "By invite only",
              },
            ].map((step, i) => (
              <RevealOnScroll key={step.num} delay={i + 1}>
                <div
                  className={`p-10 md:p-12 flex flex-col gap-4 ${
                    i < 2 ? "md:border-r border-b md:border-b-0 border-border" : ""
                  } group hover:bg-surface/50 transition-colors duration-500`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-accent text-[11px] font-mono">{step.num}</span>
                    <span className="text-[10px] tracking-[0.15em] uppercase font-mono text-text-muted border border-border px-3 py-1 rounded-full">
                      {step.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] leading-[1.1] mt-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-[14px] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll>
            <p className="text-text-muted text-[13px] leading-relaxed max-w-[600px] mt-10">
              This isn&apos;t a certificate program. This is a direct pipeline into real work.
              If you have what it takes, I&apos;ll know — and I&apos;ll reach out.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── Enroll ── */}
      <section id="enroll" className="section-gap relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-[600px] mx-auto px-6 md:px-10 text-center relative z-10">
          <RevealOnScroll>
            <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.04em] leading-[0.95] mb-6">
              Ready to
              <br />
              <span className="gradient-text-blue">get started?</span>
            </h2>
            <p className="text-text-secondary text-lg mb-4">
              {course.price} &middot; {course.duration}
            </p>
            <p className="text-text-muted text-[13px] mb-10">
              Enrollment is reviewed. Not everyone gets in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlowLink href="/students">
                Apply to Enroll
              </GlowLink>
              <Link href="/mentorship" className="ghost-btn">
                Want 1:1 instead?
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </PageShell>
  );
}
