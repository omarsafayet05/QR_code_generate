import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vouoktrbsfouymsilgjh.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZvdW9rdHJic2ZvdXltc2lsZ2poIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI1MjkwMTMsImV4cCI6MTk5ODEwNTAxM30.QKSEEyYHj865tc7BRYGkfyh4czojgnyv6lUz5l0Md5E";
export const supabase = createClient(supabaseUrl, supabaseKey);
