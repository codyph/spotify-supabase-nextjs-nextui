import Content from "@/components/Content"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

const Home = async () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  const supabase = createServerComponentClient({ cookies }, {supabaseUrl, supabaseKey})
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/login")
  }

  return (
    <div>
      <div className="m-auto flex max-w-5xl flex-col">
        <div className="">
          <Content session={session} />
        </div>
      </div>
    </div>
  )
}

export default Home
