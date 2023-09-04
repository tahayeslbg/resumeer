"use client"

import { FC, useCallback, useState } from "react"
import Link from "next/link"
import { Entry, EntryCollection } from "contentful"
import debounce from "lodash.debounce"

import { client } from "@/lib/contentful"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

import { Icons } from "../icons"
import { Separator } from "../ui/separator"
import CMSImage from "./cms-image"

interface SearchBlogEntry extends Entry<any> {
  fields: {
    title: string
    slug: string
    category: {
      fields: {
        slug: string
      }
    }
    coverImage: {
      fields: {
        title: string
        file: {
          url: string
        }
      }
    }
  }
}

export const SearchBlog: FC = () => {
  const [searchBlog, setSearchBlog] = useState("")
  const [data, setData] = useState<SearchBlogEntry[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)

  const searchFunction = useCallback(
    debounce(async (searchTerm: string) => {
      setIsLoading(true)
      if (searchTerm) {
        const data: EntryCollection<any> = await client.getEntries({
          "fields.title[match]": searchTerm,
          content_type: "blog",
          select: [
            "fields.title",
            "fields.coverImage",
            "fields.category",
            "fields.slug",
          ],
        })

        setData(data.items as SearchBlogEntry[])
      } else {
        setData([])
      }
      setIsLoading(false)
    }, 500),
    []
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value
    setSearchBlog(searchTerm)
    searchFunction(searchTerm)
  }

  const highlightSearchTerm = (title: string, searchTerm: string) => {
    // RegExp ile arama terimini kullanarak başlığı parçalara ayırıyoruz.
    // 'gi' flagları, aramanın büyük/küçük harf duyarlı olmadan ve tüm title üzerinde gerçekleşmesini sağlar.
    const parts = title.split(new RegExp(`(${searchTerm})`, "gi"))

    return (
      // Her bir parçayı döngüye alıyoruz
      <span>
        {parts.map((part, i) =>
          // Eğer parça, arama terimi ile aynıysa (büyük/küçük harf duyarlı olmadan)...
          part.toLowerCase() === searchTerm.toLowerCase() ? (
            // ...parçayı sarı bir arka planla vurguluyoruz
            <span
              key={i}
              className="bg-slate-900 text-slate-100 dark:bg-slate-100 dark:text-slate-900"
            >
              {part}
            </span>
          ) : (
            // ...değilse, parçayı olduğu gibi bırakıyoruz
            part
          )
        )}
      </span>
    )
  }

  return (
    <>
      <Button
        variant={"outline"}
        size={"default"}
        className="shrink-0 bg-white dark:bg-slate-950 dark:hover:bg-slate-800"
        onClick={() => setOpenDialog((prev) => !prev)}
      >
        <Icons.search
          width={16}
          height={16}
          className=" mr-2 lg:mr-0 md:mr-0 sm:mr-0"
        />
        <span className="lg:hidden md:hidden sm:hidden">Blog Ara</span>
      </Button>
      <Dialog
        open={openDialog}
        onOpenChange={() => setOpenDialog((prev) => !prev)}
      >
        <DialogContent className="pt-5 px-3 flex-1">
          <DialogHeader>
            <DialogTitle>Blog Ara</DialogTitle>
          </DialogHeader>
          <Input
            value={searchBlog}
            onChange={handleInputChange}
            placeholder="Blog ara..."
          />
          {data.length !== 0 ? <Separator orientation="horizontal" /> : null}
          <div className="flex flex-col max-h-96 overflow-y-auto">
            {isLoading ? (
              <Icons.loader
                width={20}
                height={20}
                className="animate-spin justify-self-center self-center"
              />
            ) : (
              data.map((blog, i) => (
                <Link
                  href={`/blog/${blog.fields.category.fields.slug}/${blog.fields.slug}`}
                  onClick={() => setOpenDialog((prev) => !prev)}
                  className="p-3 flex items-start space-x-3 border-b border-border last:border-none"
                  key={i}
                >
                  <CMSImage
                    width={104}
                    height={52}
                    src={blog.fields.coverImage.fields.file.url}
                    alt={blog.fields.coverImage.fields.title}
                    className="object-cover rounded-sm border border-border"
                  />
                  <span className="text-primary font-medium overflow-hidden overflow-ellipsis line-clamp-2">
                    {highlightSearchTerm(blog.fields.title, searchBlog)}
                  </span>
                </Link>
              ))
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
