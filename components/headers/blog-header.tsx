import React, { FC } from "react"

import ActiveLink from "../blog/active-link"
import { SearchBlog } from "../blog/search-blog"

interface BlogHeaderProps {
  categories: any
}
const BlogHeader: FC<BlogHeaderProps> = ({ categories }) => {
  return (
    <nav className="py-4 bg-slate-50 dark:bg-slate-900 border-b border-border">
      <div className="blog_container flex items-center justify-between gap-x-10 sm:gap-x-5">
        <span className="py-1.5 px-2.5 bg-slate-900 text-slate-50 rounded-md dark:bg-slate-50 dark:text-slate-900 font-medium text-sm select-none lg:hidden md:hidden sm:hidden">
          Blog
        </span>
        <div className="flex overflow-x-auto items-center">
          <ul className="flex items-center lg:space-x-5 md:space-x-5 sm:space-x-5">
            <li>
              <ActiveLink
                href="/blog"
                className="whitespace-nowrap lg:px-0 md:px-0 sm:px-0"
              >
                Son Yazılar
              </ActiveLink>
            </li>
            {categories.map((category: any, i: number) => (
              <li key={i}>
                <ActiveLink
                  href={`/blog/${category.fields.slug}`}
                  className="whitespace-nowrap lg:px-0 md:px-0 sm:px-0"
                >
                  {category.fields.title}
                </ActiveLink>
              </li>
            ))}
          </ul>
        </div>

        <SearchBlog />
      </div>
    </nav>
  )
}

export default BlogHeader
