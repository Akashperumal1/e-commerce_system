import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mzsblkylfwxpxxbsdtmp.supabase.co";
const supabaseKey = process.env.VITE_SUPABASE_KEY; // Use an environment variable for security

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
