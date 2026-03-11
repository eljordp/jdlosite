"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomCursor from "@/components/CustomCursor";
import { createClient } from "@/lib/supabase/client";
import type { Profile, ConnectionWithProfile } from "@/lib/supabase/types";

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "Just now";
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  const days = Math.floor(hrs / 24);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}

type ReferralData = {
  code: string;
  discount_percent: number;
  commission_percent: number;
  stats: { clicks: number; conversions: number; revenue: number; commission: number };
  referrals: { id: string; referred_email: string; status: string; purchase_amount: number | null; created_at: string }[];
};

export default function NetworkPage() {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [connections, setConnections] = useState<ConnectionWithProfile[]>([]);
  const [incoming, setIncoming] = useState<ConnectionWithProfile[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Profile[]>([]);
  const [searching, setSearching] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [pendingSent, setPendingSent] = useState<string[]>([]);
  const [referral, setReferral] = useState<ReferralData | null>(null);
  const [copied, setCopied] = useState(false);

  // Load user + connections + referral
  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) {
        router.push("/sign-in");
        return;
      }
      setUserId(data.user.id);
      await loadConnections(data.user.id);

      // Load referral data
      const session = await supabase.auth.getSession();
      const token = session.data.session?.access_token;
      if (token) {
        try {
          const res = await fetch("/api/referral", {
            headers: { Authorization: `Bearer ${token}` },
          });
          if (res.ok) {
            setReferral(await res.json());
          }
        } catch {
          // silently fail
        }
      }

      setLoaded(true);
    });
  }, [router]);

  const loadConnections = useCallback(async (uid: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const supabase = createClient() as any;

    const { data: rows } = await supabase
      .from("connections")
      .select("*, requester:requester_id(id, display_name, email, bio, created_at, updated_at), addressee:addressee_id(id, display_name, email, bio, created_at, updated_at)")
      .or(`requester_id.eq.${uid},addressee_id.eq.${uid}`);

    if (!rows) return;

    const accepted: ConnectionWithProfile[] = [];
    const pending: ConnectionWithProfile[] = [];
    const sentIds: string[] = [];

    for (const row of rows as ConnectionWithProfile[]) {
      if (row.status === "accepted") {
        accepted.push(row);
      } else if (row.status === "pending") {
        if (row.addressee_id === uid) {
          pending.push(row);
        } else {
          sentIds.push(row.addressee_id);
        }
      }
    }

    setConnections(accepted);
    setIncoming(pending);
    setPendingSent(sentIds);
  }, []);

  async function handleSearch() {
    if (!searchQuery.trim() || !userId) return;
    setSearching(true);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const supabase = createClient() as any;

    const { data } = await supabase
      .from("profiles")
      .select("*")
      .or(`display_name.ilike.%${searchQuery.trim()}%,email.ilike.%${searchQuery.trim()}%`)
      .neq("id", userId)
      .limit(10);

    setSearchResults((data as Profile[]) ?? []);
    setSearching(false);
  }

  async function sendRequest(targetId: string) {
    if (!userId) return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const supabase = createClient() as any;
    await supabase.from("connections").insert({
      requester_id: userId,
      addressee_id: targetId,
    });
    setPendingSent((prev) => [...prev, targetId]);
  }

  async function acceptRequest(connectionId: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const supabase = createClient() as any;
    await supabase
      .from("connections")
      .update({ status: "accepted" })
      .eq("id", connectionId);
    if (userId) await loadConnections(userId);
  }

  async function declineRequest(connectionId: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const supabase = createClient() as any;
    await supabase.from("connections").delete().eq("id", connectionId);
    if (userId) await loadConnections(userId);
  }

  async function removeConnection(connectionId: string) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const supabase = createClient() as any;
    await supabase.from("connections").delete().eq("id", connectionId);
    if (userId) await loadConnections(userId);
  }

  function getOtherProfile(conn: ConnectionWithProfile): Profile {
    return conn.requester_id === userId ? conn.addressee : conn.requester;
  }

  function isAlreadyConnected(profileId: string): boolean {
    return connections.some(
      (c) => c.requester_id === profileId || c.addressee_id === profileId
    );
  }

  function hasPendingIncoming(profileId: string): boolean {
    return incoming.some((c) => c.requester_id === profileId);
  }

  function copyReferralLink() {
    if (!referral) return;
    navigator.clipboard.writeText(`https://jdlo.site?ref=${referral.code}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  if (!loaded) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <CustomCursor />
        <p className="text-text-secondary text-sm font-mono">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505]">
      <CustomCursor />
      <div className="max-w-[800px] mx-auto px-6 py-10">
        <Link
          href="/profile"
          className="text-text-muted text-[12px] font-mono hover:text-accent transition-colors"
        >
          &larr; Profile
        </Link>

        <div className="mt-6 mb-10">
          <p className="text-accent text-[11px] tracking-[0.5em] uppercase font-mono mb-3">
            Network
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-text tracking-[-0.03em] mb-2">
            Your Network
          </h1>
          <p className="text-text-secondary text-[15px]">
            Connect with other students and professionals
          </p>
        </div>

        {/* Referral Section */}
        {referral && (
          <div className="mb-10 border border-border rounded-2xl overflow-hidden">
            <div className="px-6 py-5 bg-surface/30 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-text tracking-[-0.02em]">
                  Your Referral Link
                </h2>
                <p className="text-text-muted text-[12px] mt-0.5">
                  Share and earn {referral.commission_percent}% commission on every sale
                </p>
              </div>
            </div>
            <div className="px-6 py-5">
              <div className="flex gap-2 mb-5">
                <div className="flex-1 bg-[#111] border border-border rounded-xl px-4 py-3 text-accent text-sm font-mono truncate">
                  jdlo.site?ref={referral.code}
                </div>
                <button
                  onClick={copyReferralLink}
                  className="px-5 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:scale-[1.02] shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #2997ff, #0a84ff)",
                  }}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="border border-border rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-text">{referral.stats.clicks}</p>
                  <p className="text-text-muted text-[11px] font-mono mt-1">Clicks</p>
                </div>
                <div className="border border-border rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-text">{referral.stats.conversions}</p>
                  <p className="text-text-muted text-[11px] font-mono mt-1">Sales</p>
                </div>
                <div className="border border-border rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-accent">
                    ${(referral.stats.commission / 100).toFixed(0)}
                  </p>
                  <p className="text-text-muted text-[11px] font-mono mt-1">Earned</p>
                </div>
              </div>

              {/* Referral history */}
              {referral.referrals.length > 0 && (
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-text-muted text-[11px] font-mono mb-3">
                    Recent Referrals
                  </p>
                  <div className="space-y-2">
                    {referral.referrals.slice(0, 5).map((r) => (
                      <div
                        key={r.id}
                        className="flex items-center justify-between text-[13px]"
                      >
                        <span className="text-text-secondary truncate">
                          {r.referred_email}
                        </span>
                        <div className="flex items-center gap-3 shrink-0 ml-4">
                          <span
                            className={`text-[11px] font-mono ${
                              r.status === "purchased"
                                ? "text-green-400"
                                : "text-text-muted"
                            }`}
                          >
                            {r.status === "purchased"
                              ? `$${((r.purchase_amount ?? 0) / 100).toFixed(0)}`
                              : r.status}
                          </span>
                          <span className="text-text-muted text-[11px] font-mono">
                            {timeAgo(r.created_at)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Search */}
        <div className="mb-10">
          <div className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="Search by name or email..."
              className="flex-1 bg-[#111] border border-border rounded-xl px-4 py-3 text-text text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <button
              onClick={handleSearch}
              disabled={searching || !searchQuery.trim()}
              className="px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all hover:scale-[1.02] disabled:opacity-50"
              style={{
                background: "linear-gradient(135deg, #2997ff, #0a84ff)",
              }}
            >
              {searching ? "..." : "Search"}
            </button>
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="mt-4 border border-border rounded-2xl overflow-hidden divide-y divide-border">
              {searchResults.map((person) => {
                const connected = isAlreadyConnected(person.id);
                const sent = pendingSent.includes(person.id);
                const pendingIn = hasPendingIncoming(person.id);

                return (
                  <div
                    key={person.id}
                    className="flex items-center justify-between px-5 py-4"
                  >
                    <div className="min-w-0">
                      <p className="text-text text-[14px] font-medium truncate">
                        {person.display_name || "Unnamed"}
                      </p>
                      {person.bio && (
                        <p className="text-text-muted text-[12px] truncate mt-0.5">
                          {person.bio}
                        </p>
                      )}
                    </div>
                    <div className="shrink-0 ml-4">
                      {connected ? (
                        <span className="text-accent text-[11px] font-mono">
                          Connected
                        </span>
                      ) : sent ? (
                        <span className="text-text-muted text-[11px] font-mono">
                          Pending
                        </span>
                      ) : pendingIn ? (
                        <span className="text-accent text-[11px] font-mono">
                          Wants to connect
                        </span>
                      ) : (
                        <button
                          onClick={() => sendRequest(person.id)}
                          className="text-accent text-[12px] font-mono hover:underline"
                        >
                          + Connect
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Incoming Requests */}
        {incoming.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-semibold text-text tracking-[-0.02em] mb-4">
              Pending Requests
              <span className="ml-2 text-accent text-[12px] font-mono">
                {incoming.length}
              </span>
            </h2>
            <div className="border border-border rounded-2xl overflow-hidden divide-y divide-border">
              {incoming.map((conn) => {
                const person = conn.requester;
                return (
                  <div
                    key={conn.id}
                    className="flex items-center justify-between px-5 py-4"
                  >
                    <div className="min-w-0">
                      <p className="text-text text-[14px] font-medium truncate">
                        {person.display_name || "Unnamed"}
                      </p>
                      <p className="text-text-muted text-[11px] font-mono mt-0.5">
                        Sent {timeAgo(conn.created_at)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0 ml-4">
                      <button
                        onClick={() => acceptRequest(conn.id)}
                        className="text-accent text-[12px] font-mono hover:underline"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => declineRequest(conn.id)}
                        className="text-text-muted text-[12px] font-mono hover:text-red-400 transition-colors"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Connections List */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-text tracking-[-0.02em] mb-4">
            Connections
            <span className="ml-2 text-text-muted text-[12px] font-mono">
              {connections.length}
            </span>
          </h2>
          {connections.length === 0 ? (
            <div className="border border-border rounded-2xl bg-surface/30 p-8 text-center">
              <p className="text-text-muted text-[14px]">
                No connections yet. Search for people above to start building
                your network.
              </p>
            </div>
          ) : (
            <div className="border border-border rounded-2xl overflow-hidden divide-y divide-border">
              {connections.map((conn) => {
                const person = getOtherProfile(conn);
                return (
                  <div
                    key={conn.id}
                    className="flex items-center justify-between px-5 py-4 group"
                  >
                    <div className="min-w-0">
                      <p className="text-text text-[14px] font-medium truncate">
                        {person.display_name || "Unnamed"}
                      </p>
                      <p className="text-text-muted text-[11px] font-mono mt-0.5">
                        Connected {timeAgo(conn.created_at)}
                      </p>
                    </div>
                    <button
                      onClick={() => removeConnection(conn.id)}
                      className="text-text-muted text-[11px] font-mono opacity-0 group-hover:opacity-100 hover:text-red-400 transition-all shrink-0 ml-4"
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
