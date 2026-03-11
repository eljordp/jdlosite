"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomCursor from "@/components/CustomCursor";
import { createClient } from "@/lib/supabase/client";
import type { Profile, ConnectionWithProfile } from "@/lib/supabase/types";

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

  // Load user + connections
  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) {
        router.push("/sign-in");
        return;
      }
      setUserId(data.user.id);
      await loadConnections(data.user.id);
      setLoaded(true);
    });
  }, [router]);

  const loadConnections = useCallback(async (uid: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const supabase = createClient() as any;

    // Get all connections involving this user
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
                      {person.bio && (
                        <p className="text-text-muted text-[12px] truncate mt-0.5">
                          {person.bio}
                        </p>
                      )}
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
                      {person.bio && (
                        <p className="text-text-muted text-[12px] truncate mt-0.5">
                          {person.bio}
                        </p>
                      )}
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
