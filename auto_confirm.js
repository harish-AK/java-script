// const { createClient } = require('@supabase/supabase-js')

// const supabaseUrl = 'https://ptgxywmfxiyortrghjaa.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0Z3h5d21meGl5b3J0cmdoamFhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODE5Njk5NDEsImV4cCI6MTk5NzU0NTk0MX0.soeHPWauHLaWOjJyQKzIXhS-Pn8gxNchWG5UkE2LN3s'

// const supabase = createClient(supabaseUrl, supabaseKey)

// // Now you can use the `supabase` variable to interact with Supabase.

// async function createUser() {
//     const { data, error } = await supabase.auth.admin.createUser({
//       email: 'ragnorlothbrok@email.com',
//       password: '123456',
//       user_metadata: { name: 'ragnor' }
//     })
//     if (error) {
//       console.error(error)
//     } else {
//       console.log('User created successfully:')
//       console.log(data)
//     }
//   }
//   createUser();

const { createClient } = require('@supabase/supabase-js')

const supabaseUrl = 'https://ptgxywmfxiyortrghjaa.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB0Z3h5d21meGl5b3J0cmdoamFhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MTk2OTk0MSwiZXhwIjoxOTk3NTQ1OTQxfQ.lb69J9qhVksk_4WUyCj7c4tvq5mHByu1NYhrgTYhZ-4'
const supabase = createClient(supabaseUrl, supabaseKey)

async function createUser(email,email_confirm) {
try {
  const { user, error } = await supabase.auth.admin.createUser({
    email: email,
    // password: password,
    email_confirm:email_confirm
    // data: { name: name }
  })
  if (error) {
    throw error
  }
  console.log(user)
} catch (error) {
  console.error(error)
}
}
createUser('viratkohli16072004@gmail.com',true)
// mail received sucessfully
