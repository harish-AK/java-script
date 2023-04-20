const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://ptgxywmfxiyortrghjaa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0Z3h5d21meGl5b3J0cmdoamFhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTk2OTk0MSwiZXhwIjoxOTk3NTQ1OTQxfQ.lb69J9qhVksk_4WUyCj7c4tvq5mHByu1NYhrgTYhZ-4'


const supabase = createClient(supabaseUrl, supabaseKey)
async function retrieve() {
    try {
      const { data: { users }, error } = await supabase.auth.admin.listUsers()
      console.log(users)
      console.log(error)
    } catch (error) {
      console.error(error)
    }
  }
  retrieve()
//   retrieve()
