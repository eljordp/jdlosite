-- JDLO Admin Migration
-- Run this in Supabase SQL Editor (Dashboard → SQL → New Query → Paste → Run)

-- Lead pipeline
CREATE TABLE IF NOT EXISTS leads (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  type text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  course text,
  message text,
  extra jsonb DEFAULT '{}',
  status text DEFAULT 'new',
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Email logs
CREATE TABLE IF NOT EXISTS email_logs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  to_email text NOT NULL,
  subject text,
  type text,
  status text DEFAULT 'sent',
  resend_id text,
  metadata jsonb DEFAULT '{}',
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_email_logs_to ON email_logs(to_email);
CREATE INDEX IF NOT EXISTS idx_email_logs_resend ON email_logs(resend_id);

-- User notes (CRM)
CREATE TABLE IF NOT EXISTS user_notes (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid NOT NULL,
  note text NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_user_notes_user ON user_notes(user_id);

-- Referral codes
CREATE TABLE IF NOT EXISTS referral_codes (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid,
  code text UNIQUE NOT NULL,
  owner_email text,
  owner_name text,
  discount_percent int DEFAULT 10,
  commission_percent int DEFAULT 10,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_referral_codes_code ON referral_codes(code);

-- Referral tracking
CREATE TABLE IF NOT EXISTS referrals (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  referral_code text NOT NULL REFERENCES referral_codes(code),
  referred_email text NOT NULL,
  status text DEFAULT 'clicked',
  purchase_amount int,
  course_slug text,
  created_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_referrals_code ON referrals(referral_code);

-- Add RLS policies (service role bypasses these, but good practice)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE email_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE referral_codes ENABLE ROW LEVEL SECURITY;
ALTER TABLE referrals ENABLE ROW LEVEL SECURITY;

-- Allow service role full access (admin operations)
CREATE POLICY "Service role full access" ON leads FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full access" ON email_logs FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full access" ON user_notes FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full access" ON referral_codes FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Service role full access" ON referrals FOR ALL USING (true) WITH CHECK (true);
