"use client"

import React, { FC } from "react"
import { useRouter } from "next/navigation"

import { Icons } from "./icons"
import { sleep } from "@/lib/utils"

const Oauth = () => {
  const router = useRouter()
  

  sleep(500).then(() => {
    router.refresh()
    return router.replace("/dashboard/resumes")
  })
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex items-center flex-col">
        <h4 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-2 text-center">
          Hoşgeldiniz
        </h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">
          Kimlik doğrulaması başarılı. Yönlendiriliyorsunuz...
        </p>
        <Icons.loader className="animate-spin" />
      </div>
    </div>
  )
}

export default Oauth
