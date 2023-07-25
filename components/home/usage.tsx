"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import UsageStep2DarkImg from "@/public/images/call_to_action_dark_img.png"
import UsageStep2LightImg from "@/public/images/call_to_action_light_img.png"
import UsageStep1DarkImg from "@/public/images/usage_step_1_dark_img.png"
import UsageStep1LightImg from "@/public/images/usage_step_1_light_img.png"
import UsageStep3DarkImg from "@/public/images/usage_step_3_dark_img.png"
import UsageStep3LightImg from "@/public/images/usage_step_3_light_img.png"

import { Icons } from "../icons"

const Usage = () => {
  const [currentStep, setCurrentStep] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep === 3 ? 1 : prevStep + 1))
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full max-w-[1280px] mx-auto mt-20 mb-40 sm:mt-[60px] sm:mb-[120px] grid grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-x-[60px] lg:gap-y-10 md:gap-y-10 sm:gap-y-10">
      {/**Buraya Yazılar gelecek */}
      <div className="space-y-6">
        <div
          className="space-y-3 border-b pb-6 border-border cursor-pointer"
          onClick={() => setCurrentStep(1)}
        >
          <h4 className="text-3xl sm:text-2xl font-bold text-primary flex justify-between space-x-3">
            Kişisel Bilgilerini Ekle
            {currentStep === 1 ? (
              <Icons.minus width={36} height={36} />
            ) : (
              <Icons.plus width={36} height={36} />
            )}
          </h4>
          {currentStep === 1 ? (
            <p className="text-base text-slate-700 dark:text-slate-400">
              Kişisel bilgilerini ekleyerek iş verenlerin sana ulaşmasını sağla.
            </p>
          ) : null}
        </div>
        <div
          className="space-y-3 border-b pb-6 border-border cursor-pointer"
          onClick={() => setCurrentStep(2)}
        >
          <h4 className="text-3xl sm:text-2xl font-bold text-primary flex justify-between space-x-3">
            CV Detaylarını Ekle
            {currentStep === 2 ? (
              <Icons.minus width={36} height={36} />
            ) : (
              <Icons.plus width={36} height={36} />
            )}
          </h4>
          {currentStep === 2 ? (
            <p className="text-base text-slate-700 dark:text-slate-400">
              Geçmişini, başarılarını, yeteneklerini, ödüllerini vb. ekleyerek
              iş verenlerin senin hakkında bilgi sahibi olmasını sağla.
            </p>
          ) : null}
        </div>
        <div
          className="space-y-3 border-b pb-6 border-border cursor-pointer"
          onClick={() => setCurrentStep(3)}
        >
          <h4 className="text-3xl sm:text-2xl font-bold text-primary flex justify-between space-x-3">
            İş Aramaya Başla
            {currentStep === 3 ? (
              <Icons.minus width={36} height={36} />
            ) : (
              <Icons.plus width={36} height={36} />
            )}
          </h4>
          {currentStep === 3 ? (
            <p className="text-base text-slate-700 dark:text-slate-400">
              Oluşturduğun cv’yi pdf formatında indir ve iş aramaya başla.
            </p>
          ) : null}
        </div>
      </div>
      {/**Buraya Resimler gelecek */}

      {currentStep === 1 ? (
        <>
          <Image
            src={UsageStep1LightImg}
            alt="Kişisel Bilgileri Ekle"
            className="dark:hidden border-[2px] border-border rounded-xl"
          />
          <Image
            src={UsageStep1DarkImg}
            alt="Kişisel Bilgileri Ekle"
            className="hidden dark:block border-[2px] border-border rounded-xl"
          />
        </>
      ) : null}
      {currentStep === 2 ? (
        <>
          <Image
            src={UsageStep2LightImg}
            alt="Kişisel Bilgileri Ekle"
            className="dark:hidden border-[2px] border-border rounded-xl"
          />
          <Image
            src={UsageStep2DarkImg}
            alt="Kişisel Bilgileri Ekle"
            className="hidden dark:block border-[2px] border-border rounded-xl"
          />
        </>
      ) : null}
      {currentStep === 3 ? (
        <>
          <Image
            src={UsageStep3LightImg}
            alt="Kişisel Bilgileri Ekle"
            className="dark:hidden border-[2px] border-border rounded-xl"
          />
          <Image
            src={UsageStep3DarkImg}
            alt="Kişisel Bilgileri Ekle"
            className="hidden dark:block border-[2px] border-border rounded-xl"
          />
        </>
      ) : null}
    </section>
  )
}

export default Usage
