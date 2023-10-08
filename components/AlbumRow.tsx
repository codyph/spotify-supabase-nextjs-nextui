import { ScrollShadow } from "@nextui-org/scroll-shadow"
import AlbumCard from "./AlbumCard"

type AlbumRowProps = {
  rowTitle: string
  rowContent: Object[]
}

const AlbumRow = ({ rowTitle, rowContent }: AlbumRowProps) => {
  return (
    <div className="">
      <h1 className="py-4 text-2xl">{rowTitle}</h1>
      <ScrollShadow
        orientation="horizontal"
        hideScrollBar
        size={25}
        className="flex flex-row pl-2 pb-4"
      >
        {/* <div className="no-scrollbar flex flex-row gap-x-8 overflow-x-scroll"> */}
        {rowContent.map((albumContent, i) => {
          // @ts-ignore
          return <AlbumCard key={i} albumContent={albumContent.album} />
        })}
        {/* </div> */}
      </ScrollShadow>
    </div>
  )
}

export default AlbumRow
