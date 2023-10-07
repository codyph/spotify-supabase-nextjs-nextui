import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

const SignOut = ({}) => {
  const supabase = createClientComponentClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return handleSignOut()
}

export default SignOut