import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { Image } from "@nextui-org/image"

const AlbumCard = ({ albumContent }: { albumContent: Object[] }) => {
  return (
    <div>
      <Card shadow="none" radius="sm" isPressable className="bg-transparent hover:bg-[#ffffff] hover:bg-opacity-10">
        <CardBody className="relative h-44 w-44 justify-center overflow-visible p-3">
          <Image
            // @ts-ignore
            src={albumContent.images[0].url}
            radius="none"
            width="100%"
            height="144px"
            className="object-cover"
          />
        </CardBody>
        <CardFooter className="flex flex-col justify-center p-0 pb-4">
          <div className="text-white">
            {/* @ts-ignore */}
            <p className="text-center text-sm font-bold">{albumContent.name}</p>
            {/* @ts-ignore */}
            <p className="text-xs font-light">{albumContent.artists[0].name}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default AlbumCard
