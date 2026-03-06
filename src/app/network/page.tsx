"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomCursor from "@/components/CustomCursor";
import { createClient } from "@/lib/supabase/client";

type ProfileResult = {
  id: string;
  display_name: string;
  email: string;
};

type ConnectionData = {
  id: string;
  requester_id: string;
  addressee_id: string;
  status: string;
  created_at: string;
  requester: ProfileResult;
  addressee: ProfileResult;
};

export default function NetworkPage() {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(null);
  const [connections, setConnections] = useState<ConnectionData[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<ProfileResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [sending, setSending] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) {
        router.push("/sign-in");
        return;
      }
      setUserId(data.user.id);
      loadConnections();
    });
  }, [router]);

  async function loadConnections() {
    try {
      const res = await fetch("/api/connections");
      const data = await res.json();
      setConnections(data.connections ?? []);
    } catch {
      // ignore
    }
    setLoaded(true);
  }

  async function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setSearching(true);
    setMessage("");
    try {
      const res = await fetch(
        `/api/profile/search?q=${encodeURIComponent(searchQuery.trim())}`
      );
      const data = await res.json();
      setSearchResults(data.profiles ?? []);
      if ((data.profiles ?? []).length === 0) {
        setMessage("No users found with that email.");
      }
    } catch {
      setMessage("Search failed.");
    }
    setSearching(false);
  }

  async function handleConnect(profileId: string) {
    const profile = searchResults.find((p) => p.id === profileId);
    if (!profile) return;
    setSending(profileId);
    setMessage("");
    try {
      const res = await fetch("/api/connections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ addressee_email: profile.email }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage("Connection request sent!");
        setSearchResults((prev) => prev.filter((p) => p.id !== profileId));
        loadConnections();
      } else {
        setMessage(data.error || "Failed to send request.");
      }
    } catch {
      setMessage("Failed to send request.");
    }
    setSending(null);
  }

  async function handleAccept(connectionId: string) {
    try {
      await fetch(`/api/connections/${connectionId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "accepted" }),
      });
      loadConnections();
    } catch {
      // ignore
    }
  }

  async function handleDecline(connectionId: string) {
    try {
      await fetch(`/api/connections/${connectionId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "declined" }),
      });
      loadConnections();
    } catch {
      // ignore
    }
  }

  async function handleRemove(connectionId: string) {
    try {
      await fetch(`/api/connections/${connectionId}`, { method: "DELETE" });
      loadConnections();
    } catch {
      // ignore
    }
  }

  const pendingReceived = connections.filter(
    (c) => c.status === "pending" && c.addressee_id === userId
  );
  const pendingSent = connections.filter(
    (c) => c.status === "pending" && c.requester_id === userId
  );
  const accepted = connections.filter((c) => c.status === "accepted");

  if (!loaded) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center cursor-none">
        <CustomCursor />
        <p className="text-text-secondary text-sm font-mono">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] cursor-none">
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
            Connections
          </h1>
          <p className="text-text-secondary text-[15px]">
            Connect with other students and professionals.
          </p>
        </div>

        {/* Search */}
        <div className="border border-border rounded-2xl bg-surface/30 p-6 mb-8">
          <h2 className="text-lg font-semibold text-text tracking-[-0.02em] mb-4">
            Add Connection
          </h2>
          <form onSubmit={handleSearch} className="flex gap-3">
            <input
              type="email"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by email..."
              className="flex-1 bg-[#111] border border-border rounded-xl px-4 py-3 text-text text-sm focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              disabled={searching}
              className="py-3 px-6 rounded-xl font-semibold text-white text-sm transition-all hover:scale-[1.02] disabled:opacity-50 shrink-0"
              style={{
                background: "linear-gradient(135deg, #2997ff, #0a84ff)",
              }}
            >
              {searching ? "..." : "Search"}
            </button>
          </form>

          {message && (
            <p className="text-text-muted text-[12px] font-mono mt-3">
              {message}
            </p>
          )}

          {searchResults.length > 0 && (
            <div className="mt-4 space-y-2">
              {searchResults.map((profile) => (
                <div
                  key={profile.id}
                  className="flex items-center justify-between p-3 rounded-xl border border-border bg-[#111]"
                >
                  <div>
                    <p className="text-text text-sm font-semibold">
                      {profile.display_name}
                    </p>
                    <p className="text-text-muted text-[12px]">
                      {profile.email}
                    </p>
                  </div>
                  <button
                    onClick={() => handleConnect(profile.id)}
                    disabled={sending === profile.id}
                    className="text-accent text-[13px] font-mono hover:text-accent/80 transition-colors disabled:opacity-50"
                  >
                    {sending === profile.id ? "Sending..." : "Connect"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Pending Received */}
        {pendingReceived.length > 0 && (
          <div className="mb-8">
            <h2 className="text-text font-semibold text-lg tracking-[-0.02em] mb-4">
              Pending Requests
            </h2>
            <div className="space-y-3">
              {pendingReceived.map((c) => (
                <div
                  key={c.id}
                  className="flex items-center justify-between p-5 rounded-2xl border border-border bg-surface/30"
                >
                  <div>
                    <p className="text-text font-semibold">
                      {c.requester.display_name}
                    </p>
                    <p className="text-text-muted text-[12px]">
                      {c.requester.email}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleAccept(c.id)}
                      className="py-2 px-4 rounded-lg text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                      style={{
                        background:
                          "linear-gradient(135deg, #2997ff, #0a84ff)",
                      }}
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleDecline(c.id)}
                      className="py-2 px-4 rounded-lg text-sm font-mono text-text-muted hover:text-red-400 transition-colors border border-border"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Pending Sent */}
        {pendingSent.length > 0 && (
          <div className="mb-8">
            <h2 className="text-text font-semibold text-lg tracking-[-0.02em] mb-4">
              Sent Requests
            </h2>
            <div className="space-y-3">
              {pendingSent.map((c) => (
                <div
                  key={c.id}
                  className="flex items-center justify-between p-5 rounded-2xl border border-border bg-surface/30"
                >
                  <div>
                    <p className="text-text font-semibold">
                      {c.addressee.display_name}
                    </p>
                    <p className="text-text-muted text-[12px]">
                      {c.addressee.email}
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemove(c.id)}
                    className="text-text-muted text-[13px] font-mono hover:text-red-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Accepted */}
        <div>
          <h2 className="text-text font-semibold text-lg tracking-[-0.02em] mb-4">
            Your Network{" "}
            <span className="text-text-muted text-sm font-normal">
              ({accepted.length})
            </span>
          </h2>
          {accepted.length === 0 ? (
            <div className="text-center py-16 border border-border rounded-2xl bg-surface/30">
              <p className="text-text-secondary text-[15px]">
                No connections yet. Search by email to connect with others.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {accepted.map((c) => {
                const other =
                  c.requester_id === userId ? c.addressee : c.requester;
                return (
                  <div
                    key={c.id}
                    className="flex items-center justify-between p-5 rounded-2xl border border-border bg-surface/30 group hover:border-border-hover transition-all duration-500"
                  >
                    <Link href={`/network/${other.id}`} className="flex-1">
                      <p className="text-text font-semibold group-hover:text-accent transition-colors duration-300">
                        {other.display_name}
                      </p>
                      <p className="text-text-muted text-[12px]">
                        {other.email}
                      </p>
                    </Link>
                    <div className="flex items-center gap-4">
                      <Link
                        href={`/network/${other.id}`}
                        className="text-accent text-sm group-hover:translate-x-1 transition-transform duration-300"
                      >
                        View &rarr;
                      </Link>
                      <button
                        onClick={() => handleRemove(c.id)}
                        className="text-text-muted text-[11px] font-mono hover:text-red-400 transition-colors"
                      >
                        Remove
                      </button>
                    </div>
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
