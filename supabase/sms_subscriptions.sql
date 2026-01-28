-- Create the sms_subscriptions table
create table public.sms_subscriptions (
  id uuid not null default gen_random_uuid(),
  shop_slug text not null,
  phone_e164 text not null,
  phone_display text,
  opt_in_updates boolean not null default true,
  opt_in_marketing boolean not null default false,
  created_at timestamptz not null default now(),
  source_url text,
  user_agent text,
  ip text,
  constraint sms_subscriptions_pkey primary key (id),
  constraint sms_subscriptions_shop_slug_phone_e164_key unique (shop_slug, phone_e164)
);

-- Enable Row Level Security (RLS)
alter table public.sms_subscriptions enable row level security;

-- No policies are created intentionally.
-- This ensures that NO anonymous/public access is allowed.
-- Access is restricted to the SERVICE_ROLE key (server-side) only.
