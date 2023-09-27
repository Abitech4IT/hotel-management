import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://pqzhuidciejcujjgyzyc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxemh1aWRjaWVqY3Vqamd5enljIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQwOTg2NzIsImV4cCI6MjAwOTY3NDY3Mn0.HCkynswWrPYcc_PxGMWMgGYBxAD8KsZwBRBboBPrZOU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
