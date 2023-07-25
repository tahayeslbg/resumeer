import React from "react"
import Image from "next/image"
import Link from "next/link"
import CallToActionDarkImg from "@/public/images/call_to_action_dark_img.png"
import CallToActionLightImg from "@/public/images/call_to_action_light_img.png"

import {  buttonVariants } from "../ui/button"

const CallToAction = () => {

  return (
    <section className="flex justify-center w-full max-w-[1080px] z-10 mx-auto mt-20 mb-40 sm:mt-[60px] sm:mb-[120px]">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl text-primary font-extrabold text-center md:text-4xl sm:text-3xl">
          Yapay zeka destekli editörümüzle CV&#39;ni hızlıca oluştur. İşe alınma
          olasılığını yükselt.
        </h1>
        <Link
          href="/sign-in"
          className={`mb-[60px] mt-10 ${buttonVariants({
            variant: "default",
          })}`}
        >
          Şimdi CV&#39;ni Oluştur
        </Link>
        <div className="relative w-full h-full rounded-xl">
          <div className="absolute top-0 left-0 w-full h-full rounded-full blur-[250px] bg-slate-300/20 dark:bg-slate-400/20" />
          <div className="w-full h-full border-[2px] bg-background border-border rounded-xl ">
            <Image
              src={CallToActionDarkImg}
              alt="Resumeer"
              className="rounded-xl hidden dark:block"
            />
            <Image
              src={CallToActionLightImg}
              alt="Resumeer"
              className="rounded-xl dark:hidden"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction
