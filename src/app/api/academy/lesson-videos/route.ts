import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient } from "@/lib/supabase/server";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "jordanlopezbusiness@gmail.com";

export async function GET() {
  try {
    const admin = createAdminClient();
    const { data, error } = await admin
      .from("lesson_videos")
      .select("lesson_key, video_url");

    if (error) {
      // Table might not exist yet — return empty gracefully
      console.error("[lesson-videos GET]", error.message);
      return NextResponse.json({ videos: {} });
    }

    const videos: Record<string, string> = {};
    for (const row of data ?? []) {
      videos[row.lesson_key] = row.video_url;
    }

    return NextResponse.json({ videos });
  } catch (err) {
    console.error("[lesson-videos GET] unexpected error", err);
    return NextResponse.json({ videos: {} });
  }
}

export async function POST(req: NextRequest) {
  // Auth check
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.email !== ADMIN_EMAIL) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { lesson_key, video_url } = body as {
    lesson_key: string;
    video_url: string;
  };

  if (!lesson_key || !video_url) {
    return NextResponse.json(
      { error: "lesson_key and video_url are required" },
      { status: 400 }
    );
  }

  const admin = createAdminClient();
  const { error } = await admin.from("lesson_videos").upsert(
    { lesson_key, video_url, updated_at: new Date().toISOString() },
    { onConflict: "lesson_key" }
  );

  if (error) {
    console.error("[lesson-videos POST]", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
