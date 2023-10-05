"use client"

import { Button } from "@nextui-org/button"
import { Session } from "@supabase/auth-helpers-nextjs"

const DataLoader = ({ session }: { session: Session }) => {

    console.log("User: ", session.user)

  const handleLoadDataClick = async () => {
    const res = await fetch(
      "https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5",
        // "https://api.spotify.com/v1/me",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      }
    ).then((res) => res.json())
    console.log(res)
  }

  return (
    <>
      <Button onClick={handleLoadDataClick}>Load Your Data</Button>
    </>
  )
}

export default DataLoader
