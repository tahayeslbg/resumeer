import React from "react"
import { Metadata } from "next"
import OpenGraphImage from "@/public/images/resumeer_blog_open_graph.png"

import { getBlogsEntries, getEditorPickBlogs } from "@/lib/contentful"
import Blogs from "@/components/blog/blogs"
import EditorPicks from "@/components/blog/editor-picks"
import LoadMore from "@/components/blog/load-more"

export const metadata: Metadata = {
  title: "CV, İş Arama ve Kariyer Rehberleri | Resumeer",
  description:
    "Kariyeri yükseltmek için Resumeer Blog'u ziyaret edin! CV hazırlama, iş arama ve kariyer rehberleriyle güncel bilgilere ulaşın. Potansiyelinizi açığa çıkarın.",
  keywords: [
    "cv",
    "cv hazırlama",
    "iş arama",
    "iş dünyası",
    "kariyer gelişimi",
    "kişisel gelişim",
    "kariyer",
  ],
  openGraph: {
    url:
      process.env.NODE_ENV !== "production"
        ? "http://localhost:3000/blog"
        : "https://www.resumeer.app/blog",
    title: "CV, İş Arama ve Kariyer Rehberleri | Resumeer",
    description:
      "Kariyeri yükseltmek için Resumeer Blog'u ziyaret edin! CV hazırlama, iş arama ve kariyer rehberleriyle güncel bilgilere ulaşın. Potansiyelinizi açığa çıkarın.",
    siteName: "Resumeer",
    images: [
      {
        url: OpenGraphImage.src,
        width: 1200,
        height: 630,
        alt: "CV, İş Arama ve Kariyer Rehberleri | Resumeer",
      },
    ],
  },
  alternates: {
    canonical:
      process.env.NODE_ENV !== "production"
        ? "http://localhost:3000/blog"
        : "https://www.resumeer.app/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
}

const BlogPage = async ({ searchParams }: { searchParams: any }) => {
  const page = Number(searchParams.page) || 1

  const blogs = await getBlogsEntries(page)

  const editor = await getEditorPickBlogs()
  const editorPickBlogs = editor.items[0] as Pick<EditorPicks, "fields">

  return (
    <div className="blog_container my-20">
      <Blogs blogs={blogs as any} />

      {blogs.items.length >= 6 ? (
        <div className="flex justify-center my-14">
          <LoadMore
            goTo={`/blog?page=${page + 1}`}
            total={blogs.total}
            blogCount={blogs.items.length}
          />
        </div>
      ) : null}

      <EditorPicks editorPickBlogs={editorPickBlogs} />
    </div>
  )
}

export default BlogPage
