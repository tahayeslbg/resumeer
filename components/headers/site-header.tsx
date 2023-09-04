"use client"

import Link from "next/link"
import { usePathname, useSelectedLayoutSegments } from "next/navigation"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { Navigation } from "@/components/navigation"
import { ThemeToggle } from "@/components/theme/theme-toggle"

import { buttonVariants } from "../ui/button"
import { Separator } from "../ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet"

function SiteHeaderMobile() {
  const nonProtectedRoutes = siteConfig.routes.filter(
    (route) => !route.protected
  )

  return (
    <Sheet>
      <SheetTrigger className="hidden lg:block md:block sm:block">
        <Icons.menu width={32} height={32} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center">
              <Icons.logo className="mr-2" />
              <Icons.logoText />
            </div>
            <ThemeToggle />
          </div>
        </SheetHeader>
        <Separator orientation="horizontal" className="my-4" />
        <div className="space-y-5">
          <SheetTitle>Özgeçmişini oluştur ve iş aramaya başla</SheetTitle>
          <Navigation items={nonProtectedRoutes} />
        </div>
        <Separator orientation="horizontal" className="mt-4" />
        <div className="flex flex-col w-full text-xl font-semibold text-slate-800 dark:text-slate-200">
          <Link href="/blog" className="py-4 border-b border-border">
            Blog
          </Link>
          {/* <Link href="/features" className="py-4 border-b border-border">
            Özellikler
          </Link>
          <Link href="/pricing" className="py-4 border-b border-border">
            Fiyatlar
          </Link>
          <Link href="/contact" className="py-4 border-b border-border">
            İletişim
          </Link> */}
        </div>
      </SheetContent>
    </Sheet>
  )
}

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

  return showNavbar && !isProtected ? (
    <header className="container flex items-center sticky top-0 z-40 border-b border-border py-3 backdrop-blur-md ">
      <div className="flex justify-between items-center space-x-12 w-full">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo />
          <Icons.logoText className="sm:hidden" />
        </Link>

        <div className="flex justify-between w-full lg:hidden md:hidden sm:hidden">
          <div className="flex items-center">
            <Link
              href="/blog"
              className={buttonVariants({
                variant: "link",
                className:
                  "relative before:absolute before:right-2 before:top-2.5 before:w-1 before:h-1 before:rounded-full before:bg-slate-500 before:dark:bg-slate-400 ",
              })}
            >
              Blog
            </Link>
            {/* <Link
              href="/features"
              className={buttonVariants({ variant: "link" })}
            >
              Özellikler
            </Link>
            <Link
              href="/pricing"
              className={buttonVariants({ variant: "link" })}
            >
              Fiyatlar
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({ variant: "link" })}
            >
              İletişim
            </Link> */}
          </div>
          <div className="flex items-center space-x-4">
            <Navigation items={nonProtectedRoutes} />
            <ThemeToggle />
          </div>
        </div>

        <SiteHeaderMobile />
      </div>
    </header>
  ) : null
}
