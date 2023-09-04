/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    loader: "custom",
    loaderFile: "./lib/cms-image-loader.ts",
    disableStaticImages: false,
  },
}

export default nextConfig
