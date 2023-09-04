"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/navigation"

import { buttonVariants } from "./ui/button"

interface NavigationProps {
  items?: NavItem[]
}

export function Navigation({ items }: NavigationProps) {
  const pathname = usePathname()

  return (
    <>
      <nav className="flex gap-6">
        {items?.map(
          (item, index) =>
            item.href && (
              <Link
                key={index}
                href={item.href + "?redirectUrl=" + pathname}
                className={buttonVariants({
                  variant: item.variant ? item.variant : "link",
                  className: "lg:w-full md:w-full sm:w-full",
                })}
              >
                {item.title}
              </Link>
            )
        )}
      </nav>
    </>
  )
}
