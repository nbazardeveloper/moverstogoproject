-- Allow admin users (flagged via app_metadata.is_admin) to read quote_requests.
-- Run this once in the Supabase SQL Editor (or via `supabase db push`).

GRANT SELECT ON public.quote_requests TO authenticated;

CREATE POLICY "Admins can view quote requests"
ON public.quote_requests FOR SELECT
TO authenticated
USING (
  coalesce((auth.jwt() -> 'app_metadata' ->> 'is_admin')::boolean, false)
);

-- Mark your existing Supabase Auth user as an admin.
-- Replace the email below with the one you signed up with, then run this block too.
UPDATE auth.users
SET raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"is_admin": true}'::jsonb
WHERE email = 'YOUR_ADMIN_EMAIL_HERE';
