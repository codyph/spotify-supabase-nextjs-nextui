import "./globals.css"
import { Inter } from "next/font/google"
import NUIProvider from "@/providers/NUIProvider"
import type { Metadata } from "next"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import CustomNavbar from "@/components/CustomNavbar"

const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Cardyl",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const supabase = createServerComponentClient({ cookies })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { data: { user } } = await supabase.auth.getUser()

  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <NUIProvider>
          <CustomNavbar session={session} user={user}/>
          {children}
        </NUIProvider>
      </body>
    </html>
  )
}
