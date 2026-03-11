import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const admin = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

// POST — track referral events (click, signed_up, purchased)
export async function POST(req: NextRequest) {
  try {
    const { code, email, event, amount, course_slug } = await req.json();

    if (!code) {
      return NextResponse.json({ error: "Missing code" }, { status: 400 });
    }

    const db = admin();

    // Verify the referral code exists
    const { data: refCode } = await db
      .from("referral_codes")
      .select("code")
      .eq("code", code)
      .eq("active", true)
      .single();

    if (!refCode) {
      return NextResponse.json({ error: "Invalid code" }, { status: 404 });
    }

    if (event === "click") {
      // Record a click — only if no recent click from this session
      await db.from("referrals").insert({
        referral_code: code,
        referred_email: email || "anonymous",
        status: "clicked",
      });
      return NextResponse.json({ ok: true });
    }

    if (event === "signed_up" && email) {
      // Update existing clicked row to signed_up, or insert new
      const { data: existing } = await db
        .from("referrals")
        .select("id")
        .eq("referral_code", code)
        .eq("referred_email", email)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (existing) {
        await db
          .from("referrals")
          .update({ status: "signed_up", referred_email: email })
          .eq("id", existing.id);
      } else {
        await db.from("referrals").insert({
          referral_code: code,
          referred_email: email,
          status: "signed_up",
        });
      }
      return NextResponse.json({ ok: true });
    }

    if (event === "purchased" && email) {
      // Update to purchased with amount
      const { data: existing } = await db
        .from("referrals")
        .select("id")
        .eq("referral_code", code)
        .eq("referred_email", email)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (existing) {
        await db
          .from("referrals")
          .update({
            status: "purchased",
            purchase_amount: amount || 0,
            course_slug: course_slug || null,
          })
          .eq("id", existing.id);
      } else {
        await db.from("referrals").insert({
          referral_code: code,
          referred_email: email,
          status: "purchased",
          purchase_amount: amount || 0,
          course_slug: course_slug || null,
        });
      }
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Referral track error:", err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
