"use client"

import { Button } from "@nextui-org/button"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

const SignInAuth = () => {
  const supabase = createClientComponentClient()

  const scopes = ["user-read-email", "user-read-private", "user-top-read, user-library-read"]

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "spotify",
      options: {
        redirectTo: "https://cardyl.vercel.app/auth/callback",
        scopes: scopes.join(" "),
      },
    })
  }

  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200"></div>
      <Button
        className="group group-hover:text-[#68305e] relative w-[110px] bg-[#12A150] font-semibold hover:scale-95 tracking-wider drop-shadow-md"
        onClick={handleSignIn}
      >
        Login
      </Button>
    </div>
  )
}

export default SignInAuth
