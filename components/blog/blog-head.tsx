"use client"

import React, { FC } from "react"
import Link from "next/link"

import Author from "./author"
import CMSImage from "./cms-image"
import DisplayDate from "./display-date"

interface BlogHeadProps {
  author: {
    fullName: string
    profilePhoto: {
      fields: {
        title: string
        file: {
          url: string
        }
      }
    }
  }
  createdAt: string
  updatedAt: string
  title: string
  subTitle: string
  category: {
    slug: string
    title: string
  }
  imageSrc: string
  imageAlt: string
}

const BlogHead: FC<BlogHeadProps> = ({
  author,
  category,
  title,
  subTitle,
  createdAt,
  updatedAt,
  imageSrc,
  imageAlt,
}) => {
  return (
    <>
      <div className="flex flex-col space-y-8">
        <div className="flex items-center space-x-3">
          <Author
            authorImageSrc={author.profilePhoto.fields.file.url}
            authorImageAlt={author.profilePhoto.fields.title}
            authorImageWidth={40}
            authorImageHeight={40}
            authorFullName={author.fullName}
          />
          <div className="w-1 h-1 bg-slate-900 dark:bg-slate-100 rounded-full" />
          <DisplayDate createdAt={createdAt} updatedAt={updatedAt} />
        </div>
        <h1 className="text-4xl text-primary font-bold break-words">{title}</h1>
        <Link
          href={`/blog/${category.slug}`}
          className="text-xl font-semibold text-primary w-max"
        >
          {category.title}
        </Link>
        <p className="text-lg text-slate-800 dark:text-slate-400 break-words">
          {subTitle}
        </p>
      </div>
      <CMSImage
        width={970}
        height={485}
        src={imageSrc}
        alt={imageAlt}
        className="my-10 rounded-md object-cover border dark:border-2 border-border opacity-0 transition-opacity duration-700 ease-linear"
        onLoadingComplete={(img) => img.classList.remove("opacity-0")}
      />
    </>
  )
}

export default BlogHead
