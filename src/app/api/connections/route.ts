import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data, error } = await supabase
    .from("connections")
    .select(
      "id, requester_id, addressee_id, status, created_at, requester:profiles!connections_requester_id_fkey(id, display_name, email), addressee:profiles!connections_addressee_id_fkey(id, display_name, email)"
    )
    .or(`requester_id.eq.${user.id},addressee_id.eq.${user.id}`)
    .neq("status", "declined");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ connections: data ?? [] });
}

export async function POST(req: NextRequest) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { addressee_email } = await req.json();
  if (!addressee_email || typeof addressee_email !== "string") {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const email = addressee_email.trim().toLowerCase();

  // Find the user by email
  const { data: addressee } = await supabase
    .from("profiles")
    .select("id")
    .eq("email", email)
    .single();

  if (!addressee) {
    return NextResponse.json(
      { error: "No user found with that email" },
      { status: 404 }
    );
  }

  if (addressee.id === user.id) {
    return NextResponse.json(
      { error: "Cannot connect with yourself" },
      { status: 400 }
    );
  }

  // Check if connection already exists in either direction
  const { data: existing } = await supabase
    .from("connections")
    .select("id, status")
    .or(
      `and(requester_id.eq.${user.id},addressee_id.eq.${addressee.id}),and(requester_id.eq.${addressee.id},addressee_id.eq.${user.id})`
    )
    .maybeSingle();

  if (existing) {
    return NextResponse.json(
      { error: "Connection already exists", status: existing.status },
      { status: 409 }
    );
  }

  const { data, error } = await supabase
    .from("connections")
    .insert({
      requester_id: user.id,
      addressee_id: addressee.id,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ connection: data }, { status: 201 });
}
