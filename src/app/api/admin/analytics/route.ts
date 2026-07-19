import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET(req: NextRequest) {
  try {
    const key = process.env.ANALYTICS_API_KEY;
    const authorization = req.headers.get("authorization");
    if (!key || authorization !== `Bearer ${key}`) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    const supabase = createAdminClient();

    // Get all leads
    const { data: leads, error } = await supabase
      .from("leads")
      .select("type,created_at")
      .order("created_at", { ascending: false });

    if (error) {
      // Return empty state if DB is unreachable
      return NextResponse.json({
        totalLeads: 0,
        todayLeads: 0,
        weekLeads: 0,
        byType: {},
        error: error.message,
      });
    }

    const allLeads = leads || [];

    const now = new Date();
    const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
    const weekStart = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();

    const todayLeads = allLeads.filter((l) => l.created_at >= todayStart).length;
    const weekLeads = allLeads.filter((l) => l.created_at >= weekStart).length;

    // Count by type
    const byType: Record<string, number> = {};
    for (const lead of allLeads) {
      const t = lead.type || "unknown";
      byType[t] = (byType[t] || 0) + 1;
    }

    return NextResponse.json({
      totalLeads: allLeads.length,
      todayLeads,
      weekLeads,
      byType,
    });
  } catch (e) {
    return NextResponse.json({ error: "Failed to load analytics" }, { status: 500 });
  }
}
