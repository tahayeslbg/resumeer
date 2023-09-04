import React, { FC } from "react"

import { BlogEntry } from "@/types/blogs"

import BlogCard from "./blog-card"

interface BlogsProps {
  blogs: {
    items: BlogEntry[]
  }
}

const Blogs: FC<BlogsProps> = ({ blogs }) => {
  const firstBlog = blogs.items[0]
  const secondAndThirdBlogs = blogs.items.slice(1, 3)
  const otherBlogs = blogs.items.slice(3)

  return (
    <>
      <div className="flex justify-center px-10 mb-20 lg:px-0 md:px-0 sm:px-0">
        {firstBlog && (
          <BlogCard
            author={firstBlog.fields.author.fields}
            blogCategory={{
              title: firstBlog.fields.category.fields.title,
              slug: firstBlog.fields.category.fields.slug,
            }}
            blogCreatedAt={firstBlog.sys.createdAt}
            blogUpdatedAt={firstBlog.sys.updatedAt}
            blogTitle={firstBlog.fields.title}
            blogHref={firstBlog.fields.slug}
            blogDescription={firstBlog.fields.subTitle}
            blogTitleAs="h1"
            blogImage={firstBlog.fields.coverImage.fields}
            layout="horizontal"
            blogImagePlace="right"
          />
        )}
      </div>
      {secondAndThirdBlogs && (
        <div className="flex space-x-12 items-start mb-[100px] lg:mb-6 md:mb-6 sm:mb-6 md:items-center sm:items-center md:space-x-0 sm:space-x-0 md:flex-col sm:flex-col md:space-x-0 sm:space-x-0 md:space-y-6 sm:space-y-6">
          {secondAndThirdBlogs.map((blog, i) => (
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
              blogTitleAs="h2"
              blogImage={blog.fields.coverImage.fields}
              layout="vertical"
              blogImagePlace="top"
            />
          ))}
        </div>
      )}
      {otherBlogs && (
        <div className="grid grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 md:place-items-center sm:place-items-center gap-6 ">
          {otherBlogs.map((blog, i) => (
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
              layout="vertical"
              blogImagePlace="top"
            />
          ))}
        </div>
      )}
    </>
  )
}

export default Blogs
