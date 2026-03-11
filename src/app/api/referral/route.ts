import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

function makeCode(name: string): string {
  // Turn display name into a clean referral code
  const base = name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 12);
  return base || "ref";
}

function getSupabaseFromAuth(req: NextRequest) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) return null;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { global: { headers: { Authorization: `Bearer ${token}` } } }
  );
  return supabase;
}

// GET — fetch or auto-create the user's referral code + stats
export async function GET(req: NextRequest) {
  const supabase = getSupabaseFromAuth(req);
  if (!supabase) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const admin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  // Check if user already has a referral code
  const { data: existing } = await admin
    .from("referral_codes")
    .select("*")
    .eq("user_id", user.id)
    .single();

  let code = existing;

  if (!code) {
    // Get profile for name
    const { data: profile } = await admin
      .from("profiles")
      .select("display_name, email")
      .eq("id", user.id)
      .single();

    const baseName = profile?.display_name || user.email?.split("@")[0] || "user";
    let codeStr = makeCode(baseName);

    // Check uniqueness, append random if taken
    const { data: taken } = await admin
      .from("referral_codes")
      .select("code")
      .eq("code", codeStr)
      .single();

    if (taken) {
      codeStr = `${codeStr}${Math.floor(Math.random() * 999)}`;
    }

    const { data: newCode } = await admin
      .from("referral_codes")
      .insert({
        user_id: user.id,
        code: codeStr,
        owner_email: user.email?.toLowerCase(),
        owner_name: profile?.display_name || baseName,
        discount_percent: 10,
        commission_percent: 10,
        active: true,
      })
      .select()
      .single();

    code = newCode;
  }

  if (!code) {
    return NextResponse.json(
      { error: "Failed to create referral code" },
      { status: 500 }
    );
  }

  // Get referral stats for this code
  const { data: referrals } = await admin
    .from("referrals")
    .select("*")
    .eq("referral_code", code.code)
    .order("created_at", { ascending: false });

  const allRefs = referrals ?? [];
  const clicks = allRefs.length;
  const conversions = allRefs.filter((r) => r.status === "purchased").length;
  const revenue = allRefs
    .filter((r) => r.status === "purchased")
    .reduce((sum, r) => sum + (r.purchase_amount ?? 0), 0);
  const commission = Math.round(revenue * ((code.commission_percent ?? 10) / 100));

  return NextResponse.json({
    code: code.code,
    discount_percent: code.discount_percent,
    commission_percent: code.commission_percent,
    stats: { clicks, conversions, revenue, commission },
    referrals: allRefs,
  });
}
