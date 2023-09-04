import React, { FC } from "react"
import Link from "next/link"

import { buttonVariants } from "../ui/button"

interface CallToActionProps {
  redirectUrl?: string
}

const CallToAction: FC<CallToActionProps> = ({ redirectUrl }) => {
  return (
    <div className="w-full p-5 bg-gradient-to-br from-slate-100 to-slate-100 dark:from-slate-900 dark:to-slate-950 rounded-md border border-border text-center space-y-5">
      <span className="text-2xl text-primary font-bold">
        Kayıt Ol, CVni Oluştur
      </span>
      <p className="text-slate-700 dark:text-slate-400">
        CV’ni 10 dakikadan kısa bir sürede oluştur, iş başvurularının değerini 7
        kat arttır.
      </p>
      <Link
        href={
          redirectUrl
            ? `/sign-up?redirectUrl=/blog/${redirectUrl}`
            : "/sign-up?redirectUrl=/blog"
        }
        className={buttonVariants({
          variant: "default",
          size: "sm",
          className: "w-full",
        })}
      >
        Kayıt ol
      </Link>
    </div>
  )
}

export default CallToAction
