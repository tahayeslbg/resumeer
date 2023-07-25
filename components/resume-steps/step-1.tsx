"use client"

import React, { FC, useEffect } from "react"
import { useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import { resumeTemplates } from "@/config/resumeTemplates"
import PersonalInfoForm from "@/components/forms/resume/personalInfo"

const Step1: FC = () => {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      event.returnValue =
        "Değişiklikleriniz kaydedilmemiş olabilir. Sayfayı yenilemek istediğinize emin misiniz?"
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])
  const templateId = useAppSelector(
    (state: RootState) => state.resume.templateId
  )
  const template = resumeTemplates.find(
    (template) => template.templateId === templateId
  )

  return (
    <section className="grid grid-cols-2 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
      <div className="min-h-[calc(100vh-65px)] border-r border-border sm:container md:container lg:container py-20 lg:py-20 md:py-20 sm:py-[60px]">
        <PersonalInfoForm />
      </div>
      <div className="sticky flex justify-center items-center top-[65px] right-0 h-[calc(100vh-65px)] lg:hidden md:hidden sm:hidden xl:scale-90">
        {template ? <template.templateComponent /> : "Lütfen bir tema seçin."}
      </div>
    </section>
  )
}

export default Step1
