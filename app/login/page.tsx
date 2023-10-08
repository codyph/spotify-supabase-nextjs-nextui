import SignInAuth from "@/components/SignInAuth"
import { CardylLogo } from "@/public/CardylLogo"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const dynamic = "force-dynamic"

const Login = async () => {
  const supabase = createServerComponentClient({ cookies })
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
