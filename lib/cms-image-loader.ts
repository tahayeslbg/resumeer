export default function cmsLoader({
  src,
  width,
  quality,
}: {
  src: string
  width: number | string
  quality?: number | string
}) {
  if (src.startsWith("//images.ctfassets.net")) {
    const url = new URL(`https:${src}`)
    url.searchParams.set("fm", "webp")
    url.searchParams.set("w", width.toString())
    url.searchParams.set("q", (quality || 75).toString())
    return url.href
  }
  return src
}
