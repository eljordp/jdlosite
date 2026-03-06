-- ============================================================
-- ACCESS CODES (course purchases)
-- ============================================================
create table public.access_codes (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  email text not null,
  course_slug text not null,
  session_id text,
  created_at timestamptz not null default now()
);

alter table public.access_codes enable row level security;

-- Allow anyone to validate a code (used by GET /api/access)
create policy "Anyone can validate access codes"
  on public.access_codes for select
  using (true);

-- Insert only via service role (API routes use service key)
-- No insert policy for anon — only service role can write

create index idx_access_codes_code on public.access_codes(code);
create index idx_access_codes_email on public.access_codes(lower(email));
create index idx_access_codes_email_course on public.access_codes(lower(email), course_slug);
