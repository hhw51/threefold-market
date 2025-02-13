
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://rqzjhvcxuyydxumkvdhw.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJxempodmN4dXl5ZHh1bWt2ZGh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkzNjIyNTIsImV4cCI6MjA1NDkzODI1Mn0.ZvjJHR0LOuT0i0oWFAVS_SWlDylOF6VehCNp-YHo8E8";

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
