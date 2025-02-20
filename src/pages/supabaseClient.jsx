import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mzsblkylfwxpxxbsdtmp.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16c2Jsa3lsZnd4cHh4YnNkdG1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NjAxNzYsImV4cCI6MjA1NTUzNjE3Nn0.gyj1YAmoQaosfUWNsuloHF9Fo79Jxm6-lEsZdsmey04";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
