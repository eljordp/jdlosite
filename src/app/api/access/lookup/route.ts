import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.json({ error: "Missing code" }, { status: 400 });
  }

  const admin = createAdminClient();
  const { data, error } = await admin
    .from("access_codes")
    .select("course_slug, email")
    .eq("code", code)
    .maybeSingle();

  if (error || !data) {
    return NextResponse.json({ course_slug: null });
  }

  // If user is logged in, link this code to their account email
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
    // Not logged in or cookie issue — fine, just skip linking
  }

  return NextResponse.json({ course_slug: data.course_slug });
}
