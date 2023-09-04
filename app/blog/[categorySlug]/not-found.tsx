"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { buttonVariants } from "@/components/ui/button"

const NotFound = () => {
  const pathname = usePathname()
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-[calc(100vh_-_275px)]">
      <h1 className="text-4xl font-bold text-primary text-center mb-3">404</h1>
      <h2 className="text-2xl font-bold text-slate-700 dark:text-slate-400 text-center mb-6 max-w-[600px]">
        Oops! <span className="text-primary">`{pathname}`</span> sayfasını
        bulamadık.
      </h2>

      <Link href="/blog" className={buttonVariants({ variant: "default" })}>
        Bloglara Dön
      </Link>
    </div>
  )
}

export default NotFound
