
import React from "react"
import { BlogEntry, EditorPicks } from "@/types/blogs"

import BlogCard from "./blog-card"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import CallToAction from "../blog/call-to-action"

const EditorPicks = ({editorPickBlogs, pathname}: {editorPickBlogs: Pick<EditorPicks, "fields">, pathname?: string}) => {
  return (
    <div>
      
      <div className="flex w-full space-x-8 lg:space-x-0 lg:gap-y-8 lg:flex-col-reverse md:space-x-0 md:gap-y-8 md:flex-col-reverse sm:space-x-0 sm:gap-y-8 sm:flex-col-reverse">
        <div className="flex flex-col space-y-6 w-2/3 lg:w-full md:w-full sm:w-full">
            <h4 className="text-3xl font-bold text-primary sm:text-2xl">
            {editorPickBlogs.fields.title}
            </h4>
            <div className="border-t border-border pt-6 space-y-6">
            {editorPickBlogs.fields.pickBlogs.map((blog: BlogEntry, i: number) => (
                <BlogCard
                key={i}
                author={blog.fields.author.fields}
                blogCategory={{
                    title: blog.fields.category.fields.title,
                    slug: blog.fields.category.fields.slug,
                }}
                blogCreatedAt={blog.sys.createdAt}
                blogUpdatedAt={blog.sys.updatedAt}
                blogTitle={blog.fields.title}
                blogHref={blog.fields.slug}
                blogDescription={blog.fields.subTitle}
                blogTitleAs="h3"
                blogImage={blog.fields.coverImage.fields}
                layout="horizontal"
                blogImagePlace="left"
                />
            ))}
            </div>
        </div>
        <div className="h-min w-1/3 lg:w-full md:w-full sm:w-full text-center">
         <CallToAction redirectUrl={pathname} />
        </div>
      </div>
    </div>
  )
}

export default EditorPicks
