"use client"

import React, { FC, ReactNode } from "react"
import Link from "next/link"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import {
  BLOCKS,
  Block,
  Document,
  INLINES,
  Inline,
  MARKS,
} from "@contentful/rich-text-types"

import CMSImage from "./cms-image"
import { convertTurkishToEnglish } from "@/lib/utils"

interface Node {
  nodeType: string
  content: Node[]
  data: any
}

type RenderMark = {
  [markType in MARKS]: (text: ReactNode) => ReactNode
}

type RenderNode = {
  [nodeType in BLOCKS | INLINES]: (
    node: Block | Inline | Text,
    children: ReactNode
  ) => ReactNode
}

const options = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => <strong>{text}</strong>,
    [MARKS.ITALIC]: (text: ReactNode) => <i>{text}</i>,
    [MARKS.CODE]: (text: ReactNode) => (
      <pre>
        <code>{text}</code>
      </pre>
    ),
  } as RenderMark,
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: Node, children: ReactNode) => {
      const hasCodeMark = node.content.some((contentNode: any) =>
        contentNode.marks?.some((mark: any) => mark.type === "code")
      )
      if (hasCodeMark) {
        return <div>{children}</div>
      } else {
        return <p> {children} </p>
      }
    },
    [BLOCKS.HEADING_2]: (node: Node, children: ReactNode) => {
      const title = node.content.reduce(
        (text: string, item: any) => text + item.value,
        ""
      )
      const slug = convertTurkishToEnglish(title.toLowerCase()).replace(
        /\s+/g,
        "-"
      )
      return (
        <h2
          id={slug}
          className="text-3xl font-bold text-primary my-5 break-words scroll-mt-20"
        >
          {children}
        </h2>
      )
    },
    [BLOCKS.HEADING_3]: (node: Node, children: ReactNode) => (
      <h3 className="text-2xl font-bold text-primary my-4 break-words">
        {children}
      </h3>
    ),
    [BLOCKS.HEADING_4]: (node: Node, children: ReactNode) => (
      <h4 className="text-xl font-bold text-primary my-3 break-words">
        {children}
      </h4>
    ),
    [BLOCKS.HEADING_5]: (node: Node, children: ReactNode) => (
      <h5 className="text-lg font-bold text-primary my-2 break-words">
        {children}
      </h5>
    ),
    [BLOCKS.HEADING_6]: (node: Node, children: ReactNode) => (
      <h6 className="text-base font-bold text-primary my-2 break-words">
        {children}
      </h6>
    ),
    [INLINES.HYPERLINK]: (node: Node, children: ReactNode) => {
      const url = node.data.uri

      if (url.includes("http://") || url.includes("https://")) {
        return (
          <Link
            href={url}
            target="_blank"
            rel="nofollow noreferrer noopener"
            className="text-primary"
          >
            {children}
          </Link>
        )
      }
      return (
        <Link href={url} target="_blank" className="text-primary">
          {children}
        </Link>
      )
    },
    [BLOCKS.EMBEDDED_ASSET]: (node: Node, children: ReactNode) => {
      const { title, file } = node.data.target.fields
      const imageUrl = file.url
      const imageAlt = title

      return (
        <CMSImage
          width={975}
          height={485}
          src={imageUrl}
          alt={imageAlt}
          className="rounded-md dark:border-[2px] dark:border-border my-10"
        />
      )
    },
    [BLOCKS.HR]: (node: Node, children: ReactNode) => (
      <hr className="border-border" />
    ),
  } as RenderNode,
}

interface RichTextProps {
  content: Document
}
const RichText: FC<RichTextProps> = ({ content }) => {
  return (
    <div className="prose prose-slate prose-h1:text-primary prose-strong:text-slate-900 prose-strong:dark:text-slate-100 prose-p:text-slate-800 prose-p:dark:text-slate-400 prose-th:border-[2px] prose-th:border-border prose-th:text-center prose-td:border-[2px] prose-td:border-border prose-td:text-center w-full max-w-full">
      {documentToReactComponents(content, options)}
    </div>
  )
}

export default RichText
