"use client"

import React from "react"
import Link from "next/link"

import { BlogCardProps } from "@/types/blog-card"

import CMSImage from "./cms-image"

const BlogCard: React.FC<BlogCardProps> = ({
  author,
  blogCreatedAt,
  blogUpdatedAt,
  blogCategory,
  blogTitle,
  blogTitleAs = "h1",
  blogDescription,
  blogHref,
  layout,
  blogImage,
  blogImagePlace,
}) => {
  if (
    layout === "horizontal" &&
    (blogImagePlace === "top" || blogImagePlace === "bottom")
  ) {
    throw new Error(
      'Invalid prop: For horizontal layout, blogImagePlace should be either "left" or "right".'
    )
  } else if (
    layout === "vertical" &&
    (blogImagePlace === "left" || blogImagePlace === "right")
  ) {
    throw new Error(
      'Invalid prop: For vertical layout, blogImagePlace should be either "top" or "bottom".'
    )
  }

  const blogTitleClassName =
    blogTitleAs === "h1"
      ? "text-3xl font-bold"
      : blogTitleAs === "h2"
      ? "text-2xl font-semibold"
      : blogTitleAs === "h3"
      ? "text-xl font-semibold"
      : "text-3xl font-bold"
  const BlogTitle = blogTitleAs

  const displayDate =
    blogCreatedAt === blogUpdatedAt
      ? new Date(blogCreatedAt).toLocaleDateString()
      : new Date(blogUpdatedAt).toLocaleDateString()

  return (
    <article
      className={`flex ${
        layout === "horizontal"
          ? "max-w-full flex-row gap-x-6 lg:gap-y-5 md:gap-y-5 sm:gap-y-5 lg:items-center md:items-center sm:items-center lg:flex-col-reverse md:flex-col-reverse sm:flex-col-reverse"
          : "flex-col gap-y-5"
      } ${
        blogImagePlace === "left"
          ? "flex-row-reverse"
          : blogImagePlace === "top"
          ? "flex-col-reverse"
          : ""
      }`}
    >
      <div
        id="cardContent"
        className="flex space-y-4 flex-col w-full max-w-[600px]"
      >
        <div id="cardInfo" className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <CMSImage
              width={32}
              height={32}
              src={author.profilePhoto.fields.file.url}
              alt={author.profilePhoto.fields.title}
              className="rounded-full object-cover"
            />
            <div className="flex items-center space-x-3 sm:flex-col sm:space-x-0 sm:items-start">
              <span className="text-sm text-primary">{author.fullName}</span>
              <div className="w-1 h-1 rounded-full bg-primary lg:hidden md:hidden sm:hidden" />
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {displayDate}
              </span>
            </div>
          </div>
          <Link
            href={`/blog/${blogCategory.slug}`}
            className="text-sm text-primary font-medium"
          >
            {blogCategory.title}
          </Link>
        </div>
        <Link
          href={`/blog/${blogCategory.slug}/${blogHref}`}
          id="cardBody"
          className={`space-y-4 ${
            layout === "horizontal"
              ? "lg:text-center md:text-center sm:text-center"
              : ""
          }`}
        >
          <BlogTitle
            className={`${blogTitleClassName} text-primary line-clamp-2 break-words`}
          >
            {blogTitle}
          </BlogTitle>
          <p className="line-clamp-3 text-slate-700 dark:text-slate-400 break-words">
            {blogDescription}
          </p>
        </Link>
      </div>
      <Link href={`/blog/${blogCategory.slug}/${blogHref}`} id="cardImage">
        <CMSImage
          width={600}
          height={300}
          src={blogImage.file.url}
          alt={blogImage.title}
          className="rounded-md object-cover border dark:border-2 border-border opacity-0 transition-opacity duration-700 ease-linear "
          onLoadingComplete={(img) => img.classList.remove("opacity-0")}
        />
      </Link>
    </article>
  )
}

export default BlogCard
