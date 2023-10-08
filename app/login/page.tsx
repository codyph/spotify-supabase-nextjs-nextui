import SignInAuth from "@/components/SignInAuth"
import { CardylLogo } from "@/public/CardylLogo"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { createClient } from "@supabase/supabase-js"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const dynamic = 'force-dynamic'


const Login = async () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const supabase = createServerComponentClient({ cookies })
  // const supabase = createServerComponentClient({ cookies }, {supabaseUrl, supabaseKey})
    // @ts-ignore
    // const supabase = createClient(supabaseUrl, supabaseKey)
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (session) {
    redirect("/")
  }

  return (
    <div className="">
      <div className="absolute inset-0 m-auto flex flex-col items-center justify-evenly">
        <div className="flex flex-col items-center px-10">
          <CardylLogo width={100} />
          <h1 className="text-center text-6xl drop-shadow-lg md:text-9xl">
            CARDYL
          </h1>
          <br />
          <h2 className="text-left text-2xl sm:w-[75%] md:text-3xl">
            Visualise your favourite albums from{" "}
            <b className="text-[#12A150] drop-shadow-md">Spotify</b> in a new
            and beautiful way.
          </h2>
        </div>
        <SignInAuth />
      </div>
    </div>
  )
}

export default Login
