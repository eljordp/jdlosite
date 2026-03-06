import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 });
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("access_codes")
    .select("course_slug")
    .eq("code", code)
    .maybeSingle();

  if (error || !data) {
    return NextResponse.json({ course_slug: null });
  }

  return NextResponse.json({ course_slug: data.course_slug });
}
