"use client"

import { Button } from "@nextui-org/button"
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs"

const AuthButton = ({ session }: { session: Session | null }) => {
  const supabase = createClientComponentClient()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "spotify",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
        scopes: scopes,
      },
    })
  }

  return <Button onClick={handleSignIn}>Login</Button>
}

export default AuthButton

const scopes = ["user-read-email", "user-read-private", "user-top-read"].join(
  " ",
)
