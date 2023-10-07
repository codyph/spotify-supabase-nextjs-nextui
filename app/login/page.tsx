import SignInAuth from "@/components/SignInAuth"
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
      <div className="absolute inset-0 m-auto flex flex-col justify-evenly items-center">
        <div className="px-10 flex flex-col items-center">
          <h1 className="text-6xl md:text-9xl text-center drop-shadow-lg">CARDYL</h1>
          <br />
          <h2 className="text-2xl md:text-3xl text-left sm:w-[80%]">
            Visualise your favourite albums from{" "}
            <b className="text-[#12A150] drop-shadow-md">Spotify</b> in a new and beautiful way.
          </h2>
        </div>
        <SignInAuth />
      </div>
    </div>
  )
}

export default Login
