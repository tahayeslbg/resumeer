"use client"

import React from "react"
import { usePathname } from "next/navigation"
import { useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import Step1 from "./step-1"
import Step2 from "./step-2"
import Step3 from "./step-3"

const ResumeSteps = () => {
  const pathname = usePathname()

  const currentStep = useAppSelector((state: RootState) =>
    pathname.includes("create")
      ? state.resumeSteps.createResumeCurrentStep
      : state.resumeSteps.editResumeCurrentStep
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
