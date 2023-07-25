"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Icons } from "@/components/icons"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme/theme-toggle"

import SiteHeaderProvider from "./site-header-provider"

export function SiteHeader({ me, token }: { me?: any; token?: string }) {
  const nonProtectedRoutes = siteConfig.routes.filter(
    (route) => !route.protected
  )
  const protectedRoutes = siteConfig.routes.filter((route) => route.protected)

  return token ? (
    <SiteHeaderProvider>
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
                {protectedRoutes.map((protectedRoute) => (
                  <DropdownMenuItem>
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
    </SiteHeaderProvider>
  ) : (
    <SiteHeaderProvider>
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
    </SiteHeaderProvider>
  )
}
