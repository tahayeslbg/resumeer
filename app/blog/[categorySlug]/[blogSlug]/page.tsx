import React from "react"
import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { getBlogEntry, getBlogsEntries } from "@/lib/contentful"
import { buttonVariants } from "@/components/ui/button"
import Author from "@/components/blog/author"
import BlogHead from "@/components/blog/blog-head"
import CallToAction from "@/components/blog/call-to-action"
import DisplayDate from "@/components/blog/display-date"
import RichText from "@/components/blog/rich-text"
import SimilarBlogs from "@/components/blog/similar-blogs"
import SocialShareButtons from "@/components/blog/social-share-buttons"
import TableOfContents from "@/components/blog/table-of-contents"

export const revalidate = 60

export async function generateMetadata({
  params,
}: {
  params: { blogSlug: string }
}): Promise<Metadata> {
  const blog = await getBlogEntry(params.blogSlug)
  if (!blog)
    return {
      title: "Üzgünüz, Böyle bir sayfa bulunamadı!",
    }
  return {
    title: blog.fields.metaTitle,
    description: blog.fields.metaDescription,
    keywords: blog.fields.metaKeywords,
    alternates: {
      canonical:
        process.env.NODE_ENV !== "production"
          ? `http://localhost:3000/blog/${blog.fields.category.fields.slug}/${blog.fields.slug}`
          : `https://www.resumeer.app/blog/${blog.fields.category.fields.slug}/${blog.fields.slug}`,
    },
    openGraph: {
      url:
        process.env.NODE_ENV !== "production"
          ? `http://localhost:3000/blog/${blog.fields.category.fields.slug}/${blog.fields.slug}`
          : `https://www.resumeer.app/blog/${blog.fields.category.fields.slug}/${blog.fields.slug}`,
      title: blog.fields.metaTitle,
      description: blog.fields.metaDescription,
      authors: blog.fields.author.fields.fullName,
      publishedTime: `${new Date(blog.sys.createdAt)}`,
      siteName: "Resumeer",
      images: [
        {
          url: `https://${blog.fields.metaImage?.fields.file.url}`,
          width: 1200,
          height: 630,
          alt: blog.fields.metaImage?.fields.title,
        },
      ],
    },
    robots: {
      index: blog.fields.isIndexPage,
      follow: blog.fields.isFollowPage,
    },
  }
}

export async function generateStaticParams() {
  const blogs = await getBlogsEntries()
  return blogs.items.map((blog) => ({
    blogSlug: blog.fields.slug,
  }))
}

const BlogPage = async ({ params }: { params: { blogSlug: string } }) => {
  const blog = await getBlogEntry(params.blogSlug)

  if (!blog) {
    return notFound()
  }

  const similarBlogs = blog.fields.similarBlogs?.map((blog) => {
    return {
      coverImage: {
        url: blog.fields.coverImage.fields.file.url,
        altText: blog.fields.coverImage.fields.title,
      },
      title: blog.fields.title,
      slug: blog.fields.slug,
      category: {
        title: blog.fields.category.fields.title,
        slug: blog.fields.category.fields.slug,
      },
    }
  })

  return (
    <main className="my-20 container grid grid-cols-12 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 gap-x-14 xl:gap-x-10">
      <div className="col-span-3 lg:col-span-full md:col-span-full sm:col-span-full">
        <div className="sticky top-24 space-y-10 lg:static lg:w-full lg:mb-10 md:static md:w-full md:mb-10 sm:static sm:w-full sm:mb-10">
          <TableOfContents content={blog.fields.content} />
          <CallToAction
            redirectUrl={`${blog.fields.category.fields.slug}/${blog.fields.slug}`}
          />
        </div>
      </div>
      <div className="col-span-7 col-start-4 xl:col-span-9 lg:col-span-full md:col-span-full sm:col-span-full">
        <section className="pb-10 border-b border-border">
          <BlogHead
            author={blog.fields.author.fields}
            category={{
              slug: blog.fields.category.fields.slug,
              title: blog.fields.category.fields.title,
            }}
            title={blog.fields.title}
            subTitle={blog.fields.subTitle}
            createdAt={blog.sys.createdAt}
            updatedAt={blog.sys.updatedAt}
            imageSrc={blog.fields.coverImage.fields.file.url}
            imageAlt={blog.fields.coverImage.fields.title}
          />
          <RichText content={blog.fields.content} />
        </section>
        <div className="flex justify-between items-center my-10 flex-wrap sm:space-y-5">
          <div className="flex items-center space-x-3">
            <Author
              authorImageSrc={
                blog.fields.author.fields.profilePhoto.fields.file.url
              }
              authorImageAlt={
                blog.fields.author.fields.profilePhoto.fields.title
              }
              authorImageWidth={40}
              authorImageHeight={40}
              authorFullName={blog.fields.author.fields.fullName}
            />
            <div className="w-1 h-1 bg-slate-900 dark:bg-slate-100 rounded-full" />
            <DisplayDate
              createdAt={blog.sys.createdAt}
              updatedAt={blog.sys.updatedAt}
            />
          </div>
          <SocialShareButtons
            shareTitle={blog.fields.title}
            shareUrl={`${blog.fields.category.fields.slug}/${blog.fields.slug}`}
            hashtags={blog.fields.metaKeywords}
          />
        </div>
        <SimilarBlogs similarBlogs={similarBlogs} />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blog.fields.structuredData),
        }}
      />
    </main>
  )
}

export default BlogPage
