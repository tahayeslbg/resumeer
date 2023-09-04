"use client"

import React, { FC } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

import { Icons } from "../icons"

interface LoadMoreProps {
  goTo: string
  total: number
  blogCount: number
}

const LoadMore: FC<LoadMoreProps> = ({ goTo, total, blogCount }) => {
  const router = useRouter()

  return (
    <Button
      variant="outline"
      onClick={() => router.replace(goTo, { scroll: false })}
      disabled={blogCount >= total}
    >
      Daha fazla yazı yükle
      <Icons.arrowDown width={20} height={20} className="ml-2" />
    </Button>
  )
}

export default LoadMore
