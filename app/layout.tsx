import "./globals.css"
import { Inter } from "next/font/google"
import NUIProvider from "@/providers/NUIProvider"
import type { Metadata } from "next"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import CustomNavbar from "@/components/NavbarComps/CustomNavbar"

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Cardyl",
}

export const dynamic = "force-dynamic"

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <NUIProvider>
          <div className="relative h-screen overflow-scroll bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500 via-emerald-900 to-black brightness-100">
            <CustomNavbar session={session} user={user} />
            {children}
          </div>
        </NUIProvider>
      </body>
    </html>
  )
}
