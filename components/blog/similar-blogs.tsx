"use client"

import React, { FC } from "react"
import Carousel, { ArrowProps } from "react-multi-carousel"

import "react-multi-carousel/lib/styles.css"
import Link from "next/link"

import { Icons } from "../icons"
import CMSImage from "./cms-image"

const CustomRightArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      className="bg-slate-300 dark:bg-slate-800 h-min absolute top-1/2 right-0 -translate-y-1/2 p-1.5 rounded-full group disabled:bg-slate-100 dark:disabled:bg-slate-600"
      onClick={() => onClick && onClick()}
    >
      <Icons.chevronRight
        width={20}
        height={20}
        className="group-disabled:stroke-slate-500 dark:group-disabled:stroke-slate-400"
      />
    </button>
  )
}

const CustomLeftArrow: FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      className="bg-slate-300 dark:bg-slate-800 h-min absolute top-1/2 left-0 -translate-y-1/2 p-1.5 rounded-full group disabled:bg-slate-100 dark:disabled:bg-slate-600"
      onClick={() => onClick && onClick()}
    >
      <Icons.chevronLeft
        width={20}
        height={20}
        className="group-disabled:stroke-slate-500 dark:group-disabled:stroke-slate-400"
      />
    </button>
  )
}

interface SimilarBlog {
  title: string
  slug: string
  coverImage: {
    altText: string
    url: string
  }
  category: {
    title: string
    slug: string
  }
}

interface SimilarBlogsProps {
  similarBlogs?: SimilarBlog[]
}
const SimilarBlogs: FC<SimilarBlogsProps> = ({ similarBlogs }) => {
  return (
    <>
      <h5 className="text-2xl font-bold text-primary mb-10">
        İlginizi Çekecek Benzer Yazılar
      </h5>
      {similarBlogs ? (
        <Carousel
          arrows
          renderArrowsWhenDisabled={true}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
          draggable={false}
          autoPlay
          pauseOnHover
          autoPlaySpeed={5000}
          infinite
          swipeable
          responsive={{
            desktop: {
              breakpoint: {
                max: 1920,
                min: 768,
              },
              items: 2,
              partialVisibilityGutter: 24,
            },
            mobile: {
              breakpoint: {
                max: 768,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 0,
            },
          }}
          showDots={false}
          slidesToSlide={1}
        >
          {similarBlogs.map((similarBlog, i) => (
            <Link
              href={`/blog/${similarBlog.category.slug}/${similarBlog.slug}`}
              key={i}
            >
              <div className="px-4 space-y-5">
                <CMSImage
                  width={768}
                  height={384}
                  src={similarBlog.coverImage.url}
                  alt={similarBlog.coverImage.altText}
                  className="rounded-md object-cover border dark:border-2 border-border opacity-0 transition-opacity duration-700 ease-linear "
                  onLoadingComplete={(img) => img.classList.remove("opacity-0")}
                />
                <h5 className="text-xl font-semibold text-primary">
                  {similarBlog.title}
                </h5>
              </div>
            </Link>
          ))}
        </Carousel>
      ) : (
        <p className="text-slate-700 dark:text-slate-400">
          Şu anda size önerilebilecek benzer yazılar bulunmuyor. Ancak
          endişelenmeyin, sürekli yeni ve ilginç içerikler ekliyoruz. Lütfen
          daha sonra tekrar kontrol edin!
        </p>
      )}
    </>
  )
}

export default SimilarBlogs
