const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://ptgxywmfxiyortrghjaa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0Z3h5d21meGl5b3J0cmdoamFhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTk2OTk0MSwiZXhwIjoxOTk3NTQ1OTQxfQ.lb69J9qhVksk_4WUyCj7c4tvq5mHByu1NYhrgTYhZ-4'
const supabase = createClient(supabaseUrl, supabaseKey)

async function update(){
    
const { data: user, error } = await supabase.auth.admin.updateUserById(
    'a86e7a4e-47ae-40a6-ab56-5638676ed161',
    { email: 'viratkohli16072004@email.com' }
  )
//   return email
//   console.log(email)
  
}
update()
