import Content from "@/components/Content"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export const dynamic = "force-dynamic"

const Home = async () => {
  const supabase = createServerComponentClient({ cookies })
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
