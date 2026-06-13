/* JOTCHUA site configuration
   ---------------------------------------------------------------
   Paste your Supabase project values between the quotes below.
   This file is SEPARATE from index.html on purpose: when the site's
   HTML is updated, this file is left untouched, so the wall keeps
   working without re-entering keys.

   Where to find these:
     Supabase dashboard -> your project -> Connect (top of page),
     or Project Settings -> Data API (URL) and API Keys (anon key).

   The anon/publishable key is safe to expose in client code — the
   database security policies enforce what anonymous visitors can do.
   Do NOT paste the service_role / secret key here.
   --------------------------------------------------------------- */
window.JOTCHUA_CONFIG = {
  SUPABASE_URL: "https://slrrvtnbeyjwjeeubkjk.supabase.co",          // e.g. https://abcd1234.supabase.co
  SUPABASE_ANON_KEY: "sb_publishable_36M_E8kk1JGd02bFfAwGgw_IyAbDceN" // anon public / publishable key
};
