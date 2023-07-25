"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const AccountPageLinks = () => {
  const pathname = usePathname()
  return (
    <div className="mt-4 mb-10 border-b border-border flex space-x-8 font-medium pb-2 text-slate-900 dark:text-slate-100">
      <Link
        href="/dashboard/account"
        className={`relative ${
          pathname.endsWith("/dashboard/account") &&
          "after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-slate-900 after:dark:bg-slate-100 "
        }`}
      >
        Profil
      </Link>
      <Link
        href="/dashboard/account/notification"
        className={`relative ${
          pathname.endsWith("/dashboard/account/notification") &&
          "after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-slate-900 after:dark:bg-slate-100 "
        }`}
      >
        Bildirimler
      </Link>
    </div>
  )
}

export default AccountPageLinks
