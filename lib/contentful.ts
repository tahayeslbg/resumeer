import { notFound } from "next/navigation"
import { EntryCollection, createClient } from "contentful"

import { BlogEntry, CategoryEntry, EditorPicks } from "@/types/blogs"

export const client = createClient({
  space: process.env.NEXT_PUBLIC_CMS_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CMS_ACCESS_TOKEN as string,
})

export const getBlogsEntries = async (
  page?: number
): Promise<EntryCollection<BlogEntry>> => {
  return await client.getEntries<BlogEntry>({
    content_type: "blog",
    select: [
      "fields.title",
      "fields.subTitle",
      "fields.slug",
      "fields.coverImage",
      "fields.category",
      "fields.author",
      "sys.createdAt",
      "sys.updatedAt",
    ],
    limit: page ? page * 6 : 6,
  })
}

export const getBlogEntry = async (slug: string): Promise<BlogEntry> => {
  const entries = await client.getEntries<any>({
    content_type: "blog",
    "fields.slug": slug,
    limit: 1,
  })
  if (entries.items.length > 0) {
    return entries.items[0] as BlogEntry
  }

  return null as any
}

export const getCategoryBySlug = async (
  slug: string
): Promise<CategoryEntry> => {
  const entries = await client.getEntries<any>({
    content_type: "category",
    "fields.slug": slug,
    select: [
      "sys.id",
      "fields.metaTitle",
      "fields.metaDescription",
      "fields.metaKeywords",
      "fields.metaImage",
      "fields.isIndexPage",
      "fields.isFollowPage",
    ],
    include: 10,
    limit: 1,
  })

  if (entries.items.length > 0) {
    return entries.items[0] as CategoryEntry
  }

  return null as any
}

export const getBlogsByCategory = async (
  slug: string,
  page: number = 1
): Promise<EntryCollection<any>> => {
  const category = await getCategoryBySlug(slug)
  if (!category) notFound()
  const categoryId = category.sys.id

  const entries = (await client.getEntries<any>({
    content_type: "blog",
    "fields.category.sys.id": categoryId,
    include: 10,
    limit: page * 6,
  })) as EntryCollection<any>

  return entries
}

export const getEditorPickBlogs = async (): Promise<
  EntryCollection<EditorPicks>
> => {
  const entries = await client.getEntries<EditorPicks>({
    content_type: "editor",
    order: ["-sys.createdAt"],
    limit: 3,
    include: 2,
  })

  return entries
}
