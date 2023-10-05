import AuthButton from "@/components/AuthButton"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const Login = async () => {

    const supabase = createServerComponentClient({ cookies })    
    const { data: { session }} = await supabase.auth.getSession()

    if (session) {
      redirect('/')
    }

  return <AuthButton session={session} />
}

export default Login