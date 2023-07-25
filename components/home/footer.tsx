import React from "react"
import Link from "next/link"

import { Icons } from "../icons"

const Footer = () => {
  return (
    <footer className="py-10 flex justify-center border-t border-border">
      <div className="space-y-4 text-slate-500 dark:text-slate-400">
        <div className="flex items-center text-sm">
          <Icons.logo width={20} height={20} className="mr-2" />
          Resumeer - Bütün hakları saklıdır
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/" className="text-sm hover:underline">
            Gizlilik Politikası
          </Link>
          <Link href="/" className="text-sm hover:underline">
            Kullanım Koşulları
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
