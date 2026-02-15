// supabase-client-triangles.js
const SUPABASE_URL = "https://xsmhhduixpyotdhsjizr.supabase.co";
const SUPABASE_ANON_KEY = "YOUR_PUBLIC_ANON_KEY_HERE";

window.supabaseTriangleClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
