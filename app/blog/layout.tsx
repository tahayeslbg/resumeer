import { client } from "@/lib/contentful"
import BlogHeader from "@/components/headers/blog-header"
import Footer from "@/components/home/footer"

export const revalidate = 60

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const categories = await client.getEntries({
    content_type: "category",
    select: ["fields.title", "fields.slug"],
    order: ["fields.title"],
  })
  return (
    <>
      <BlogHeader categories={categories.items} />
      {children}
      <Footer />
    </>
  )
}
