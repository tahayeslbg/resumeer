"use client"

import "@/styles/editor.css"
import React, { useState } from "react"
import { Color } from "@tiptap/extension-color"
import ListItem from "@tiptap/extension-list-item"
import TextAlign from "@tiptap/extension-text-align"
import TextStyle from "@tiptap/extension-text-style"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"

import AIGenerator from "./ai-generator"
import { Icons } from "./icons"
import { Separator } from "./ui/separator"

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null
  }

  return (
    <div className="space-x-3 flex flex-wrap items-center border-b border-slate-300 dark:border-slate-700 pb-3">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`p-1 rounded-md ${
          editor.isActive("bold") ? "bg-slate-200 dark:bg-slate-700" : ""
        }`}
      >
        <Icons.bold width={16} height={16} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`p-1 rounded-md ${
          editor.isActive("italic") ? "bg-slate-200 dark:bg-slate-700" : ""
        }`}
      >
        <Icons.italic width={16} height={16} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`p-1 rounded-md ${
          editor.isActive("strike") ? "bg-slate-200 dark:bg-slate-700" : ""
        }`}
      >
        <Icons.strike width={16} height={16} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`p-1 rounded-md ${
          editor.isActive("code") ? "bg-slate-200 dark:bg-slate-700" : ""
        }`}
      >
        <Icons.code width={16} height={16} />
      </button>
      <Separator
        orientation="vertical"
        className="w-[1px] h-3 bg-slate-300 dark:bg-slate-700"
      />
      <button
        type="button"
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className="p-1 rounded-md"
      >
        <Icons.clearMarks width={16} height={16} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().clearNodes().run()}
        className="p-1 rounded-md"
      >
        <Icons.clearNodes width={16} height={16} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-1 rounded-md ${
          editor.isActive("bulletList") ? "bg-slate-200 dark:bg-slate-700" : ""
        }`}
      >
        <Icons.bulletList width={16} height={16} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-1 rounded-md ${
          editor.isActive("orderedList") ? "bg-slate-200 dark:bg-slate-700" : ""
        }`}
      >
        <Icons.orderedList width={16} height={16} />
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className={`p-1 rounded-md ${
          editor.isActive({ textAlign: "left" })
            ? "bg-slate-200 dark:bg-slate-700"
            : ""
        }`}
      >
        <Icons.alignLeft width={16} height={16} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className={`p-1 rounded-md ${
          editor.isActive({ textAlign: "center" })
            ? "bg-slate-200 dark:bg-slate-700"
            : ""
        }`}
      >
        <Icons.alignCenter width={16} height={16} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className={`p-1 rounded-md ${
          editor.isActive({ textAlign: "right" })
            ? "bg-slate-200 dark:bg-slate-700"
            : ""
        }`}
      >
        <Icons.alignRight width={16} height={16} />
      </button>

      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className="p-1 rounded-md"
      >
        <Icons.undo width={16} height={16} />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className="p-1 rounded-md"
      >
        <Icons.redo width={16} height={16} />
      </button>
    </div>
  )
}

type EditorProps = {
  content: string
  onUpdate: (params: { editor: any }) => void
}

const Editor: React.FC<EditorProps> = ({ content, onUpdate}) => {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      //@ts-ignore
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content,
    onUpdate,
  })

  return (
    <div className="relative bg-slate-100 text-primary dark:bg-slate-800 pt-3 pb-5 px-5 rounded-md">
      <MenuBar editor={editor} />

      <EditorContent className="text-sm " editor={editor} />

      <AIGenerator
        content={content}
        generatedContent={(value) => editor?.commands.insertContent(value)}
      />
    </div>
  )
}

export default Editor
