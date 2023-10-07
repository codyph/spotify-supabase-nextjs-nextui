"use client"

import { Button } from "@nextui-org/button"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

const SignInAuth = () => {
  const supabase = createClientComponentClient()

  const scopes = ["user-read-email", "user-read-private", "user-top-read"]

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "spotify",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
        scopes: scopes.join(" "),
      },
    })
  }

  return (
    <Button
      className="w-[110px] bg-[#12A150] font-semibold tracking-wider drop-shadow-md hover:opacity-50"
      onClick={handleSignIn}
    >
      Login
    </Button>
  )
}

export default SignInAuth
