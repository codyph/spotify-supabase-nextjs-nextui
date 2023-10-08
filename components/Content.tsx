import { Session } from "@supabase/supabase-js"
import AlbumRow from "./AlbumRow"

const Content = async ({ session }: { session: Session }) => {
  /*
    Sections to show
    User's saved albums:
        - Title: "You're Saved Albums"
        - Scope/s: user-library-read
        - Endpoint: https://api.spotify.com/v1/me/albums



    */

  const userSavedAlbums = await fetch("https://api.spotify.com/v1/me/albums", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${session.provider_token}`,
    },
  }).then((res) => res.json())

  return (
    <div className="">
      <AlbumRow
        rowTitle="Your Favourite Albums"
        rowContent={userSavedAlbums.items}
      />
    </div>
  )
}

export default Content
