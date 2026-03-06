import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { course_slug, module_num, passed, score, answers } = await req.json();
  if (!course_slug || !module_num) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const { error } = await supabase.from("quiz_results").upsert(
    {
      user_id: user.id,
      course_slug,
      module_num,
      passed: passed ?? false,
      score: score ?? 0,
      answers: answers ?? {},
    },
    { onConflict: "user_id,course_slug,module_num" }
  );

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
