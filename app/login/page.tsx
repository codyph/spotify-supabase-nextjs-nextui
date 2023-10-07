import SignInAuth from "@/components/SignInAuth"
import { CardylLogo } from "@/public/CardylLogo"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

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
      <div className="relative h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500 via-emerald-900 to-black brightness-75">
        <div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-25 brightness-100 contrast-150"></div>
      </div>
      <div className="absolute inset-0 m-auto flex flex-col items-center justify-evenly">
        <div className="flex flex-col items-center px-10">
          <CardylLogo width={100} />
          <h1 className="text-center text-6xl drop-shadow-lg md:text-9xl">
            CARDYL
          </h1>
          <br />
          <h2 className="text-left text-2xl sm:w-[80%] md:text-3xl">
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
