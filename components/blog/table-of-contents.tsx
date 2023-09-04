"use client"

import { useEffect, useRef, useState } from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, Block, Document } from "@contentful/rich-text-types"

import { convertTurkishToEnglish } from "@/lib/utils"

function extractHeadings(
  richText: Document
): { title: string; slug: string }[] {
  const headings: { title: string; slug: string }[] = []

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node: Block) => {
        const title = node.content.reduce(
          (text: string, item: any) => text + item.value,
          ""
        )
        const slug = convertTurkishToEnglish(title.toLowerCase()).replace(
          /\s+/g,
          "-"
        )
        headings.push({ title, slug })
        return <h2 id={slug}>{title}</h2>
      },
    } as any,
  }

  documentToReactComponents(richText, options)

  return headings
}

interface TableOfContentsProps {
  content: Document
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content }) => {
  const headings = extractHeadings(content)

  const observer = useRef<any>()
  const [activeId, setActiveId] = useState("")

  useEffect(() => {
    const handleObserver = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.id)
        }
      })
    }

    observer.current = new IntersectionObserver(handleObserver, {
      rootMargin: "0% 0% -80% 0px",
    })

    const elements = document.querySelectorAll("h2")
    elements.forEach((elem) => observer.current.observe(elem))
    return () => observer.current?.disconnect()
  }, [])

  return (
    <div className="space-y-4">
      <h2 className="font-medium uppercase text-primary">İçindekiler</h2>
      <ul className="space-y-2 text-sm">
        {headings.map((heading, index) => (
          <li key={index}>
            <a
              href={`#${heading.slug}`}
              className={
                activeId === heading.slug
                  ? "text-primary relative before:absolute before:top-1/2 before:-left-8 before:-translate-y-1/2 before:w-5 before:h-0.5 before:bg-primary before:rounded-full"
                  : "text-slate-500 dark:text-slate-400"
              }
            >
              {heading.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TableOfContents
