import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const email = user.email?.toLowerCase();
  if (!email) {
    return NextResponse.json({ courses: [] });
  }

  const admin = createAdminClient();
  const { data, error } = await admin
    .from("access_codes")
    .select("code, course_slug, created_at")
    .eq("email", email)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("My courses error:", error);
    return NextResponse.json({ courses: [] });
  }

  const courses = (data ?? []).map((row) => ({
    code: row.code,
    course: row.course_slug,
    created: row.created_at,
  }));

  return NextResponse.json({ courses });
}
