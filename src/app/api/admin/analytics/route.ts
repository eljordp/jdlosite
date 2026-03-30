import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function GET() {
  try {
    const supabase = createAdminClient();

    // Get all leads
    const { data: leads, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
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
      recentLeads: allLeads.slice(0, 20),
    });
  } catch (e) {
    return NextResponse.json({ error: "Failed to load analytics" }, { status: 500 });
  }
}
