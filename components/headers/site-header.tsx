"use client"

import Link from "next/link"
import {
  usePathname,
  useSelectedLayoutSegments,
} from "next/navigation"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme/theme-toggle"


export function SiteHeader() {
  const nonProtectedRoutes = siteConfig.routes.filter(
    (route) => !route.protected
  )

  const segments = useSelectedLayoutSegments()
  const pathname = usePathname()
  const showNavbar = !["sign-in", "sign-up", "forgot-password"].includes(
    segments[1]
  )

  const isProtected =
    pathname.includes("/dashboard") || pathname.includes("sign-out")

  return (
    showNavbar &&
    !isProtected ? (
      <header className="container flex items-center sticky top-0 z-40 border-b border-border py-3 backdrop-blur-md ">
        <Link href="/" className="flex items-center space-x-3">
          <Icons.logo />
          <Icons.logoText className="sm:hidden" />
        </Link>
        <div className="flex items-center justify-end flex-1 space-x-4 ">
          <Navigation items={nonProtectedRoutes} />
          <ThemeToggle />
        </div>
      </header>
    ) : null
  )
}
