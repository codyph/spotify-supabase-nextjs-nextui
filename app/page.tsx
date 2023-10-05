import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import AuthButtonServer from "@/components/AuthButton-Server"
import { redirect } from "next/navigation"
import DataLoader from "@/components/DataLoader"

const Home = async () => {

  const supabase = createServerComponentClient({ cookies })
  const { data: { session }} = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="flex flex-col p-10">
      <p className="text-center">Home Page</p>
      <AuthButtonServer />
      <DataLoader session={session} />
    </div>
  )
}

export default Home