import React from "react"
import { Metadata } from "next"

import {
  client,
  getBlogsByCategory,
  getCategoryBySlug,
  getEditorPickBlogs,
} from "@/lib/contentful"
import Blogs from "@/components/blog/blogs"
import EditorPicks from "@/components/blog/editor-picks"
import LoadMore from "@/components/blog/load-more"

export async function generateMetadata({
  params,
}: {
  params: { categorySlug: string }
}): Promise<Metadata> {
  const category = await getCategoryBySlug(params.categorySlug)

  return {
    title: category.fields.metaTitle,
    description: category.fields.metaDescription,
    keywords: category.fields.metaKeywords,
    alternates: {
      canonical:
        process.env.NODE_ENV !== "production"
          ? `http://localhost:3000/blog/${params.categorySlug}`
          : `https://www.resumeer.app/blog/${params.categorySlug}`,
    },
    openGraph: {
      url:
        process.env.NODE_ENV !== "production"
          ? `http://localhost:3000/blog/${params.categorySlug}`
          : `https://www.resumeer.app/blog/${params.categorySlug}`,
      title: category.fields.metaTitle,
      description: category.fields.metaDescription,
      siteName: "Resumeer",
      images: [
        {
          url: `https://${category.fields.metaImage.fields.file.url}`,
          width: 1200,
          height: 630,
          alt: category.fields.metaImage.fields.title,
        },
      ],
    },
    robots: {
      index: category.fields.isIndexPage,
      follow: category.fields.isFollowPage,
    },
  }
}

const CategoryPage = async ({
  params,
  searchParams,
}: {
  params: { categorySlug: string }
  searchParams: { page: number }
}) => {
  const page = Number(searchParams.page) || 1
  const blogs = await getBlogsByCategory(params.categorySlug, page)

  const editor = await getEditorPickBlogs()
  const editorPickBlogs = editor.items[0] as Pick<EditorPicks, "fields">

  return (
    <div className="blog_container my-20 min-h-[calc(100vh_-_435px)]">
      <Blogs blogs={{ items: blogs.items as any }} />

      {blogs.items.length >= 6 ? (
        <div className="flex justify-center my-14">
          <LoadMore
            goTo={`/blog/${params.categorySlug}?page=${page + 1}`}
            total={blogs.total}
            blogCount={blogs.items.length}
          />
        </div>
      ) : null}

      <EditorPicks
        editorPickBlogs={editorPickBlogs}
        pathname={`${params.categorySlug}`}
      />
    </div>
  )
}

export default CategoryPage
