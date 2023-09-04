"use client"

import React, { FC, useEffect, useTransition } from "react"
import { useParams, usePathname, useRouter } from "next/navigation"
import {
  resumeCreatePrevStep,
  resumeEditPrevStep,
} from "@/redux/features/resume/resumeSteps"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import { resumeTemplates } from "@/config/resumeTemplates"
import { downloadCV } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import ChangeTemplate from "@/components/change-template"
import { Icons } from "@/components/icons"
import { createResumeAction, updateResumeAction } from "@/app/actions"

const Step3: FC = () => {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()
  const dispatch = useAppDispatch()
  const templateId = useAppSelector(
    (state: RootState) => state.resume.templateId
  )

  const template = resumeTemplates.find(
    (template) => template.templateId === templateId
  )
  const resume = useAppSelector((state: RootState) => state.resume)
  const handleSubmit = async () => {
    startTransition(async () => {
      if (pathname.includes("create")) {
        const createResume = await createResumeAction(resume)
        if (createResume.success) {
          await downloadCV(template!)
          window.location.replace("/dashboard/resumes")
          return
        }
        toast({
          description: createResume.errorMessage,
          variant: "destructive",
        })
      } else {
        const updateResume = await updateResumeAction(
          resume,
          params.resumeId as string
        )
        if (updateResume.success) {
          await downloadCV(template!)
          window.location.replace("/dashboard/resumes")
          return
        }
        toast({
          description: updateResume.errorMessage,
          variant: "destructive",
        })
      }
    })
  }

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!isPending) {
        event.preventDefault()
        event.returnValue =
          "Değişiklikleriniz kaydedilmemiş olabilir. Sayfayı yenilemek istediğinize emin misiniz?"
      }
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [isPending])

  return (
    <section className="container min-h-[calc(100vh-65px)] flex items-start py-7 space-x-10 lg:flex-col lg:items-center lg:space-x-0 lg:space-y-10 md:flex-col md:items-center md:space-x-0 md:space-y-10 sm:flex-col sm:items-center sm:space-x-0 sm:space-y-10">
      {template ? (
        <template.templateComponent />
      ) : (
        <div className="flex-shrink-0">Lütfen bir tema seçin.</div>
      )}

      <div>
        <div className="flex justify-between items-center mb-5 w-full">
          <Button
            variant="link"
            className="px-0 hover:no-underline"
            onClick={() =>
              pathname.includes("create")
                ? dispatch(resumeCreatePrevStep())
                : dispatch(resumeEditPrevStep())
            }
          >
            <Icons.chevronLeft width={20} height={20} />
            Geri dön
          </Button>
          <Button onClick={handleSubmit} disabled={!templateId || isPending}>
            {isPending && (
              <Icons.loader
                width={16}
                height={16}
                className="animate-spin mr-2"
              />
            )}
            Özgeçmişi indir
          </Button>
        </div>
        <ChangeTemplate />
      </div>
    </section>
  )
}

export default Step3
