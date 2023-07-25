"use client"

import React, { useEffect } from "react"
import { useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import Step1 from "./step-1"
import Step2 from "./step-2"
import Step3 from "./step-3"
import { usePathname } from "next/navigation"

const ResumeSteps = () => {
  const pathname = usePathname()
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

  const currentStep = useAppSelector((state: RootState) =>
    pathname.includes("create") ? state.resumeSteps.createResumeCurrentStep : state.resumeSteps.editResumeCurrentStep 
  ) 



  let stepComponent

  switch (currentStep) {
    case 1:
      stepComponent = <Step1 />
      break
    case 2:
      stepComponent = <Step2 />
      break
    case 3:
      stepComponent = <Step3 />
      break
    default:
      stepComponent = null
      break
  }

  return stepComponent
}

export default ResumeSteps
