const supabaseUrl = 'https://ptgxywmfxiyortrghjaa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0Z3h5d21meGl5b3J0cmdoamFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5Njk5NDEsImV4cCI6MTk5NzU0NTk0MX0.soeHPWauHLaWOjJyQKzIXhS-Pn8gxNchWG5UkE2LN3s'

const { createClient }=require( '@supabase/supabase-js')

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Access auth admin api
const adminAuthClient = supabase.auth.admin
