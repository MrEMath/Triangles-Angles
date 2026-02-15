// supabase-client-triangles.js
const SUPABASE_URL = "https://xsmhhduixpyotdhsjizr.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhzbWhoZHVpeHB5b3RkaHNqaXpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2NDU0NTYsImV4cCI6MjA4NjIyMTQ1Nn0.BKVW6GfqJfDfp1UKPMNjehZ4UcF_D7ivLYmrXY12_60";

window.supabaseTriangleClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
