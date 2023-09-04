import { ComponentProps } from "react"
import Image from "next/image"

import cmsLoader from "@/lib/cms-image-loader"

type CMSImageProps = ComponentProps<typeof Image>

const CMSImage = (props: CMSImageProps) => {
  return <Image loader={cmsLoader} {...props} />
}

export default CMSImage
