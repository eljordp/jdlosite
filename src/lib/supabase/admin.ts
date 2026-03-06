import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Service role client — bypasses RLS, use only in server API routes
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let admin: SupabaseClient<any> | null = null;

export function createAdminClient() {
  if (admin) return admin;
  admin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
  return admin;
}
