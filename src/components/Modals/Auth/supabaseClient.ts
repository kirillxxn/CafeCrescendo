import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zudrciwwfoxusllasxsw.supabase.co'
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1ZHJjaXd3Zm94dXNsbGFzeHN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxNzQ0OTAsImV4cCI6MjA2OTc1MDQ5MH0.4ayM_yEkfxVdLhavkp0k2FO8QopOr_vlXBLHSCY6k1k'

export const supabase = createClient(supabaseUrl, supabaseKey, {
	auth: {
		persistSession: true,
		autoRefreshToken: true,
		detectSessionInUrl: true,
	},
})
