import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "jordanlopezbusiness@gmail.com";

type AcademyUser = {
  id: string;
  created_at: string;
  trial_start: string | null;
  subscription_status: string | null;
};

type AuthUser = {
  id: string;
  email?: string;
};

function getStatusInfo(academyUser: AcademyUser): {
  label: string;
  badge: string;
  detail: string;
} {
  const status = academyUser.subscription_status;
  const trialStart = academyUser.trial_start
    ? new Date(academyUser.trial_start)
    : new Date(academyUser.created_at);
  const trialEnd = new Date(trialStart);
  trialEnd.setDate(trialEnd.getDate() + 7);
  const now = new Date();
  const trialActive = now < trialEnd;
  const daysLeft = trialActive
    ? Math.ceil((trialEnd.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
    : 0;

  if (status === "active") {
    return {
      label: "Active",
      badge: "bg-green-100 text-green-700",
      detail: "Subscribed",
    };
  }
  if (status === "canceled") {
    return {
      label: "Canceled",
      badge: "bg-red-100 text-red-700",
      detail: "Canceled",
    };
  }
  if (status === "past_due") {
    return {
      label: "Past Due",
      badge: "bg-orange-100 text-orange-700",
      detail: "Payment failed",
    };
  }
  if (trialActive) {
    return {
      label: "Trial",
      badge: "bg-blue-100 text-blue-700",
      detail: `${daysLeft} day${daysLeft !== 1 ? "s" : ""} left`,
    };
  }
  return {
    label: "Expired",
    badge: "bg-[#f0f0f0] text-[#666]",
    detail: "Trial ended",
  };
}

export default async function AdminStudentsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user || user.email !== ADMIN_EMAIL) {
    redirect("/academy");
  }

  const admin = createAdminClient();

  const { data: academyUsers } = await admin
    .from("academy_users")
    .select("*")
    .order("created_at", { ascending: false });

  const {
    data: { users: authUsers },
  } = await admin.auth.admin.listUsers();

  const emailMap = new Map<string, string>(
    (authUsers as AuthUser[]).map((u) => [u.id, u.email || "—"])
  );

  const rows = (academyUsers as AcademyUser[] | null) ?? [];

  // Stats
  const total = rows.length;
  const active = rows.filter((r) => r.subscription_status === "active").length;
  const canceled = rows.filter((r) => r.subscription_status === "canceled").length;
  const inTrial = rows.filter((r) => {
    if (r.subscription_status === "active" || r.subscription_status === "canceled") return false;
    const start = r.trial_start ? new Date(r.trial_start) : new Date(r.created_at);
    const end = new Date(start);
    end.setDate(end.getDate() + 7);
    return new Date() < end;
  }).length;

  return (
    <main className="min-h-screen bg-white text-[#1a1a1a] pt-14 px-6 md:px-10 pb-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="py-14 border-b border-[#e5e5e5] mb-10">
          <p className="text-[11px] font-mono tracking-[0.5em] uppercase text-[#888] mb-4">
            Admin
          </p>
          <div className="flex items-baseline gap-6">
            <h1 className="font-display text-[clamp(2rem,4vw,3rem)] tracking-[-0.03em] leading-[0.95] text-[#1a1a1a]">
              Academy — Students
            </h1>
            <Link
              href="/academy/admin/content"
              className="text-[13px] text-[#888] hover:text-[#1a1a1a] transition-colors"
            >
              Content →
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Total signups", value: total },
            { label: "Active subscribers", value: active },
            { label: "In trial", value: inTrial },
            { label: "Canceled", value: canceled },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border border-[#e5e5e5] rounded-xl p-5"
            >
              <p className="text-[28px] font-semibold tracking-tight text-[#1a1a1a]">
                {stat.value}
              </p>
              <p className="text-[12px] text-[#888] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        {rows.length === 0 ? (
          <p className="text-[#888] text-sm">No signups yet.</p>
        ) : (
          <div className="border border-[#e5e5e5] rounded-xl overflow-hidden">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#e5e5e5] bg-[#fafafa]">
                  <th className="text-left text-[11px] font-mono tracking-[0.3em] uppercase text-[#888] px-5 py-3">
                    Email
                  </th>
                  <th className="text-left text-[11px] font-mono tracking-[0.3em] uppercase text-[#888] px-5 py-3">
                    Joined
                  </th>
                  <th className="text-left text-[11px] font-mono tracking-[0.3em] uppercase text-[#888] px-5 py-3">
                    Status
                  </th>
                  <th className="text-left text-[11px] font-mono tracking-[0.3em] uppercase text-[#888] px-5 py-3">
                    Trial / Sub
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => {
                  const email = emailMap.get(row.id) || "—";
                  const joined = new Date(row.created_at).toLocaleDateString(
                    "en-US",
                    { month: "short", day: "numeric", year: "numeric" }
                  );
                  const statusInfo = getStatusInfo(row);
                  const isLast = i === rows.length - 1;

                  return (
                    <tr
                      key={row.id}
                      className={`${!isLast ? "border-b border-[#f0f0f0]" : ""} hover:bg-[#fafafa] transition-colors`}
                    >
                      <td className="px-5 py-4 text-[14px] text-[#1a1a1a]">
                        {email}
                      </td>
                      <td className="px-5 py-4 text-[13px] text-[#555]">
                        {joined}
                      </td>
                      <td className="px-5 py-4">
                        <span
                          className={`inline-block text-[11px] font-medium px-2.5 py-1 rounded-full ${statusInfo.badge}`}
                        >
                          {statusInfo.label}
                        </span>
                      </td>
                      <td className="px-5 py-4 text-[13px] text-[#555]">
                        {statusInfo.detail}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
