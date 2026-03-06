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

// POST — redeem a code and try to link it to the logged-in user
export async function POST(req: NextRequest) {
  const { code } = await req.json();

  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 });
  }

  // Look up the code first
  const admin = createAdminClient();
  const { data, error } = await admin
    .from("access_codes")
    .select("course_slug, email")
    .eq("code", code)
    .maybeSingle();

  if (error || !data) {
    return NextResponse.json({ course_slug: null });
  }

  // Try to link the code to the logged-in user (best effort)
  try {
    const supabase = await createClient();
    const { data: userData } = await supabase.auth.getUser();
    const userEmail = userData?.user?.email?.toLowerCase();

    if (userEmail && userEmail !== data.email) {
      await admin
        .from("access_codes")
        .update({ email: userEmail })
        .eq("code", code);
    }
  } catch {
    // Auth failed — code still works, just won't link to profile yet
  }

  return NextResponse.json({ course_slug: data.course_slug });
}
