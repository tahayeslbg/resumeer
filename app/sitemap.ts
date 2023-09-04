import { MetadataRoute } from "next"

import { client, getBlogsEntries } from "@/lib/contentful"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const SITE_URL =
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000"
      : "https://www.resumeer.app"

  const blogs = await getBlogsEntries(99)
  const blogsUrl = blogs.items.map((blog: any) => {
    return {
      url: `${SITE_URL}/blog/${blog.fields.category.fields.slug}/${blog.fields.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    }
  })

  const categories = await client.getEntries({
    content_type: "category",
    select: ["fields.title", "fields.slug"],
    order: ["fields.title"],
  })
  const categoriesUrl = categories.items.map((category) => {
    return {
      url: `${SITE_URL}/blog/${category.fields.slug}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    }
  })
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/gizlilik-politikasi`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    ...blogsUrl,
    ...categoriesUrl,
  ]
}
