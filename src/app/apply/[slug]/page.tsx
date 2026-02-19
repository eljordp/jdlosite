import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourse, getAllSlugs } from "@/lib/courses";
import LeadForm from "@/components/LeadForm";
import CustomCursor from "@/components/CustomCursor";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function ApplyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <main className="cursor-none min-h-screen flex flex-col justify-center px-6 py-20 relative">
      <CustomCursor />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-[520px] mx-auto w-full relative z-10">
        {/* Back link */}
        <Link
          href={`/courses/${slug}`}
          className="inline-flex items-center gap-2 text-text-muted text-[12px] font-mono hover:text-text transition-colors duration-300 mb-12"
        >
          ← {course.title}
        </Link>

        {/* Header */}
        <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-4">
          Apply to Enroll
        </p>
        <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-bold tracking-[-0.04em] leading-[1] mb-3">
          {course.title}
        </h1>
        <p className="text-text-muted text-[13px] font-mono mb-10">
          {course.price} · {course.duration} · Enrollment reviewed
        </p>

        {/* Form — immediately visible, no scrolling */}
        <LeadForm type="student" course={course.title} buttonText="Submit Application" />
      </div>
    </main>
  );
}
