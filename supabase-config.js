/* MediCare HMS — Supabase Configuration */

const SUPABASE_URL = "https://necpofcmcegzfptagshx.supabase.co";

/* Replace the text below with your Supabase Publishable key */
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_RUcPiFnDQAPjGAqBvSDFcw_JnmMJZJd";

const medicareSupabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
