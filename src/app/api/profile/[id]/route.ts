import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("id, display_name, bio, created_at")
    .eq("id", id)
    .single();

  if (error || !profile) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  // Check if connected
  const { data: connection } = await supabase
    .from("connections")
    .select("id, status")
    .or(
      `and(requester_id.eq.${user.id},addressee_id.eq.${id}),and(requester_id.eq.${id},addressee_id.eq.${user.id})`
    )
    .eq("status", "accepted")
    .maybeSingle();

  let stats = null;
  if (connection) {
    const { count: lessonsCompleted } = await supabase
      .from("progress")
      .select("*", { count: "exact", head: true })
      .eq("user_id", id);

    const { count: quizzesPassed } = await supabase
      .from("quiz_results")
      .select("*", { count: "exact", head: true })
      .eq("user_id", id)
      .eq("passed", true);

    const { data: courseSlugs } = await supabase
      .from("progress")
      .select("course_slug")
      .eq("user_id", id);

    const uniqueCourses = [
      ...new Set((courseSlugs ?? []).map((r) => r.course_slug)),
    ];

    stats = {
      courses: uniqueCourses.length,
      lessons_completed: lessonsCompleted ?? 0,
      quizzes_passed: quizzesPassed ?? 0,
    };
  }

  return NextResponse.json({
    profile,
    connected: !!connection,
    stats,
  });
}
