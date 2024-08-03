import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ukxokdpvopsdujjnvcdw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVreG9rZHB2b3BzZHVqam52Y2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI0MTIwMDEsImV4cCI6MjAzNzk4ODAwMX0.n-y7P81afEBzDxGAdh6SfuiR1VAxk2f6ep0kI7_rewA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
