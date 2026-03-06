import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { kv } from "@vercel/kv";

type UserCourseEntry = {
  code: string;
  course: string;
  created: string;
};

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

  if (!process.env.KV_REST_API_URL) {
    return NextResponse.json({ courses: [] });
  }

  try {
    const entries =
      (await kv.get<UserCourseEntry[]>(`user-courses:${email}`)) ?? [];
    return NextResponse.json({ courses: entries });
  } catch {
    return NextResponse.json({ courses: [] });
  }
}
