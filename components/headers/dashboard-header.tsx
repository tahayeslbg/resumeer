"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import { siteConfig } from "@/config/site"

import { Icons } from "../icons"
import { ThemeToggle } from "../theme/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

const DashboardHeader = () => {
  const protectedRoutes = siteConfig.routes.filter((route) => route.protected)
  const me = useAppSelector((state: RootState) => state.user)

  const pathname = usePathname()
  const isEditOrCreatePage =
    pathname.includes("edit") || pathname.includes("create")

  return !isEditOrCreatePage ? (
    <header className="container flex items-center sticky top-0 z-40 border-b border-border py-3 backdrop-blur-md ">
      <Link href="/" className="flex items-center space-x-3">
        <Icons.logo />
        <Icons.logoText className="sm:hidden" />
      </Link>
      <div className="flex items-center justify-end flex-1 space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="rounded-full w-10 h-10 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900">
            {me.fullName.split(" ")[0].slice(0, 1).toUpperCase() +
              me.fullName.split(" ")[1].slice(0, 1).toUpperCase()}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-52">
            <DropdownMenuLabel>{me.fullName}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {protectedRoutes.map((protectedRoute, i) => (
              <DropdownMenuItem key={i}>
                <Link
                  href={protectedRoute.href}
                  className="flex items-center w-full"
                >
                  {protectedRoute.title}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <Link href="/sign-out" className="flex items-center w-full">
                Çıkış yap
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <ThemeToggle />
      </div>
    </header>
  ) : null
}

export default DashboardHeader
