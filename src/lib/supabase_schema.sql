-- Talent Waitlist Table
CREATE TABLE IF NOT EXISTS talent_waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  source VARCHAR(100) DEFAULT 'landing_page'
);

-- Partner Waitlist Table
CREATE TABLE IF NOT EXISTS partner_waitlist (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  source VARCHAR(100) DEFAULT 'landing_page'
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_talent_email ON talent_waitlist(email);
CREATE INDEX IF NOT EXISTS idx_partner_email ON partner_waitlist(email);
CREATE INDEX IF NOT EXISTS idx_talent_created ON talent_waitlist(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_partner_created ON partner_waitlist(created_at DESC);

-- Enable RLS
ALTER TABLE talent_waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE partner_waitlist ENABLE ROW LEVEL SECURITY;

-- Insert Policy (Public)
CREATE POLICY "Enable insert for all users" ON talent_waitlist
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable insert for all users" ON partner_waitlist
  FOR INSERT WITH CHECK (true);

-- Select Policy (Admin Only - approximated by authenticated role for now, adjust as needed for true admin check)
CREATE POLICY "Enable read for authenticated users only" ON talent_waitlist
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Enable read for authenticated users only" ON partner_waitlist
  FOR SELECT USING (auth.role() = 'authenticated');
