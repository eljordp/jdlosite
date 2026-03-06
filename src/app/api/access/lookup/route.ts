import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

// GET — just look up a code
export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 });
  }

  const admin = createAdminClient();
  const { data, error } = await admin
    .from("access_codes")
    .select("course_slug")
    .eq("code", code)
    .maybeSingle();

  if (error || !data) {
    return NextResponse.json({ course_slug: null });
  }

  return NextResponse.json({ course_slug: data.course_slug });
}

// POST — redeem a code and link it to the logged-in user
export async function POST(req: NextRequest) {
  const { code } = await req.json();

  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 });
  }

  // Verify user is logged in
  const supabase = await createClient();
  const { data: userData } = await supabase.auth.getUser();
  const userEmail = userData?.user?.email?.toLowerCase();

  if (!userEmail) {
    return NextResponse.json({ error: "Not logged in" }, { status: 401 });
  }

  // Look up the code
  const admin = createAdminClient();
  const { data, error } = await admin
    .from("access_codes")
    .select("course_slug, email")
    .eq("code", code)
    .maybeSingle();

  if (error || !data) {
    return NextResponse.json({ course_slug: null });
  }

  // Link the code to this user's email
  if (userEmail !== data.email) {
    await admin
      .from("access_codes")
      .update({ email: userEmail })
      .eq("code", code);
  }

  return NextResponse.json({ course_slug: data.course_slug });
}
