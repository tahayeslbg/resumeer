"use client"

import React from "react"
import Link from "next/link"

import { Icons } from "../icons"
import { usePathname } from "next/navigation"
import { useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"
import Stepper from "../stepper"

const EditOrCreateHeader = () => {
  const pathname = usePathname()

  const currentStep = useAppSelector((state: RootState) =>
    pathname.includes("create")
      ? state.resumeSteps.createResumeCurrentStep
      : state.resumeSteps.editResumeCurrentStep
  )
  const steps = ["Kişisel Detaylar", "CV Detayları", "CV Önizleme"]
  return (
    <header className="container flex items-center sticky top-0 z-40 border-b border-border py-3 backdrop-blur-md ">
      <Link href="/" className="flex items-center space-x-3">
        <Icons.logo />
        <Icons.logoText className="sm:hidden" />
      </Link>
      <div className="flex items-center justify-end flex-1 space-x-4">
      <Stepper steps={steps} currentStep={currentStep} />
      </div>
    </header>
  )
}

export default EditOrCreateHeader
