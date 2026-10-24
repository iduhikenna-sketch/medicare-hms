/* MediCare HMS — Supabase Configuration */

const SUPABASE_URL =
  "https://necpofcmcegzfptagshx.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_RUcPiFnDQAPjGAqBvSDFcw_JnmMJZJd";

/* Create one shared Supabase client */
window.medicareSupabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

/* Make configuration available to other pages */
window.SUPABASE_CONFIG = {
  url: SUPABASE_URL,
  publishableKey: SUPABASE_PUBLISHABLE_KEY
};
