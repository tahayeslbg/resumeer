"use client"

import React, { FC, ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { buttonVariants } from "../ui/button"

interface ActiveLinkProps {
  href: string
  children: ReactNode
  className?: string
}
const ActiveLink: FC<ActiveLinkProps> = ({ href, children, className }) => {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: "link",
        className: `${pathname === href ? "underline" : ""} ${className}`,
      })}
    >
      {children}
    </Link>
  )
}

export default ActiveLink
