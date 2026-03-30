"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface Lead {
  id: string;
  created_at: string;
  type: string;
  name: string;
  email: string;
  message?: string;
  service?: string;
  budget?: string;
}

interface Analytics {
  totalLeads: number;
  todayLeads: number;
  weekLeads: number;
  byType: Record<string, number>;
  recentLeads: Lead[];
}

interface AIInsight {
  text: string;
  loading: boolean;
}

export default function AdminPage() {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(false);
  const [insight, setInsight] = useState<AIInsight>({ text: "", loading: false });

  // Simple password auth
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "jdlo2026") {
      setAuth(true);
      loadData();
    }
  };

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/analytics");
      if (res.ok) {
        const data = await res.json();
        setAnalytics(data);
      }
    } catch (e) {
      console.error("Failed to load analytics", e);
    }
    setLoading(false);
  }, []);

  const getAIInsight = async () => {
    setInsight({ text: "", loading: true });
    try {
      const res = await fetch("/api/admin/ai-insight", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ analytics }),
      });
      if (res.ok) {
        const data = await res.json();
        setInsight({ text: data.insight, loading: false });
      } else {
        setInsight({ text: "AI analysis unavailable. Add ANTHROPIC_API_KEY to .env.local", loading: false });
      }
    } catch {
      setInsight({ text: "Failed to get AI insight.", loading: false });
    }
  };

  useEffect(() => {
    if (auth) {
      const interval = setInterval(loadData, 30000);
      return () => clearInterval(interval);
    }
  }, [auth, loadData]);

  if (!auth) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center px-6">
        <form onSubmit={handleLogin} className="max-w-[320px] w-full">
          <h1 className="font-display text-[2rem] tracking-[-0.03em] mb-8 text-center">JDLO Admin</h1>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-text text-[16px] placeholder:text-text-muted/50 focus:outline-none focus:border-text/30 mb-4"
          />
          <button type="submit" className="magnetic-btn w-full justify-center">
            <span className="relative z-10">Sign In</span>
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <nav className="border-b border-border">
        <div className="max-w-[1400px] mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-[15px] font-semibold tracking-tight">JDLO</Link>
            <span className="text-text-muted text-[12px] font-mono">Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={loadData} className="text-text-muted text-[12px] font-mono hover:text-text transition-colors">
              {loading ? "Loading..." : "Refresh"}
            </button>
            <Link href="/" className="text-text-muted text-[12px] hover:text-text transition-colors">
              View Site
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-[1400px] mx-auto px-6 py-10">
        {/* Stats Grid */}
        {analytics && (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <StatCard label="Total Leads" value={analytics.totalLeads} />
              <StatCard label="Today" value={analytics.todayLeads} highlight />
              <StatCard label="This Week" value={analytics.weekLeads} />
              <StatCard label="Lead Types" value={Object.keys(analytics.byType).length} />
            </div>

            {/* Lead Types Breakdown */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-[11px] font-mono text-text-muted tracking-[0.3em] uppercase mb-6">Leads by Type</h2>
                <div className="space-y-3">
                  {Object.entries(analytics.byType)
                    .sort(([, a], [, b]) => b - a)
                    .map(([type, count]) => (
                      <div key={type} className="flex items-center justify-between py-3 border-b border-border">
                        <span className="text-[14px] font-medium capitalize">{type.replace(/_/g, " ")}</span>
                        <span className="text-[14px] font-mono text-text-muted">{count}</span>
                      </div>
                    ))}
                </div>
              </div>

              {/* AI Insight */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-[11px] font-mono text-text-muted tracking-[0.3em] uppercase">AI Analysis</h2>
                  <button
                    onClick={getAIInsight}
                    disabled={insight.loading}
                    className="text-[12px] font-mono text-text hover:text-text-secondary transition-colors cursor-pointer"
                  >
                    {insight.loading ? "Analyzing..." : "Run Analysis"}
                  </button>
                </div>
                <div className="bg-surface rounded-2xl border border-border p-6 min-h-[200px]">
                  {insight.text ? (
                    <p className="text-text-secondary text-[14px] leading-relaxed whitespace-pre-wrap">{insight.text}</p>
                  ) : (
                    <p className="text-text-muted text-[14px]">Click &quot;Run Analysis&quot; to get AI-powered recommendations for improving your site.</p>
                  )}
                </div>
              </div>
            </div>

            {/* Recent Leads */}
            <div>
              <h2 className="text-[11px] font-mono text-text-muted tracking-[0.3em] uppercase mb-6">Recent Leads</h2>
              <div className="border border-border rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-surface">
                        <th className="text-left text-[11px] font-mono text-text-muted tracking-wider uppercase px-4 py-3">Date</th>
                        <th className="text-left text-[11px] font-mono text-text-muted tracking-wider uppercase px-4 py-3">Type</th>
                        <th className="text-left text-[11px] font-mono text-text-muted tracking-wider uppercase px-4 py-3">Name</th>
                        <th className="text-left text-[11px] font-mono text-text-muted tracking-wider uppercase px-4 py-3">Email</th>
                        <th className="text-left text-[11px] font-mono text-text-muted tracking-wider uppercase px-4 py-3">Message</th>
                      </tr>
                    </thead>
                    <tbody>
                      {analytics.recentLeads.map((lead) => (
                        <tr key={lead.id} className="border-b border-border last:border-0 hover:bg-surface/50 transition-colors">
                          <td className="px-4 py-3 text-[13px] text-text-muted font-mono whitespace-nowrap">
                            {new Date(lead.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                          </td>
                          <td className="px-4 py-3">
                            <span className="text-[11px] font-mono text-text-muted border border-border rounded-full px-2 py-0.5 capitalize">
                              {lead.type}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-[14px] font-medium">{lead.name}</td>
                          <td className="px-4 py-3 text-[13px] text-text-secondary">{lead.email}</td>
                          <td className="px-4 py-3 text-[13px] text-text-muted max-w-[300px] truncate">{lead.message || "—"}</td>
                        </tr>
                      ))}
                      {analytics.recentLeads.length === 0 && (
                        <tr>
                          <td colSpan={5} className="px-4 py-8 text-center text-text-muted text-[14px]">
                            No leads yet. They&apos;ll show up here as people submit forms.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}

        {!analytics && loading && (
          <div className="text-center py-20">
            <p className="text-text-muted text-[14px] font-mono">Loading analytics...</p>
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, highlight }: { label: string; value: number; highlight?: boolean }) {
  return (
    <div className={`rounded-2xl border ${highlight ? "border-text" : "border-border"} p-6`}>
      <p className="text-text-muted text-[11px] font-mono tracking-wider uppercase mb-2">{label}</p>
      <p className="font-display text-[clamp(2rem,4vw,3rem)] tracking-[-0.03em] leading-none">{value}</p>
    </div>
  );
}
