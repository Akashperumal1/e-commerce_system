import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://guzsiyrsgthaoayqstay.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1enNpeXJzZ3RoYW9heXFzdGF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk4NjgwMTAsImV4cCI6MjA1NTQ0NDAxMH0.59JeVkoKZYcPEKGZLv-RovuXgFA4Ng3mjXOcEOXFK2k";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
