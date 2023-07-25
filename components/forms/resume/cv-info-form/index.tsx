"use client"

import React from "react"
import {
  addCourseInfo,
  addCustomInfo,
  addHobbyInfo,
  addInternshipInfo,
  addLanguageInfo,
} from "@/redux/features/resume"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

import CourseInfoForm from "@/components/forms/resume/cv-info-form/courseInfo"
import CustomInfoForm from "@/components/forms/resume/cv-info-form/customInfo"
import EducationInfoForm from "@/components/forms/resume/cv-info-form/educationInfo"
import ExperienceInfoForm from "@/components/forms/resume/cv-info-form/experienceInfo"
import HobbyInfoForm from "@/components/forms/resume/cv-info-form/hobbyInfo"
import InternshipInfoForm from "@/components/forms/resume/cv-info-form/internshipInfo"
import LanguageInfoForm from "@/components/forms/resume/cv-info-form/languageInfo"
import ReferenceInfoForm from "@/components/forms/resume/cv-info-form/referenceInfo"
import SkillInfoForm from "@/components/forms/resume/cv-info-form/skillInfo"
import SummaryInfoForm from "@/components/forms/resume/cv-info-form/summaryInfo"
import { usePathname } from "next/navigation"
import { resumeCreateNextStep, resumeCreatePrevStep, resumeEditNextStep, resumeEditPrevStep } from "@/redux/features/resume/resumeSteps"

const CVInfoForm = () => {
  const dispatch = useAppDispatch()
  const pathname = usePathname()
  const resume = useAppSelector((state: RootState) => state.resume)
  const { toast } = useToast()

  const onSubmit = () => {
    const isEmptyTitle =
      resume.summaryInfo.title === "" ||
      resume.educationInfo.title === "" ||
      resume.experienceInfo.title === "" ||
      resume.skillInfo.title === "" ||
      resume.referenceInfo.title === "" ||
      (resume.customInfo && resume.customInfo.title === "") ||
      (resume.courseInfo && resume.courseInfo.title === "") ||
      (resume.hobbyInfo && resume.hobbyInfo.title === "") ||
      (resume.internshipInfo && resume.internshipInfo.title === "") ||
      (resume.languageInfo && resume.languageInfo.title === "")
        ? true
        : false

    if (isEmptyTitle) {
      toast({
        description: "Başlık alanları boş olamaz. Lütfen başlık girin.",
        variant: "destructive",
      })
    } else {
     pathname.includes("create") ?  dispatch(resumeCreateNextStep()) : dispatch(resumeEditNextStep())
    }
  }
  return (
    <div className="w-full max-w-xl mx-auto space-y-5">
      <div className="flex justify-between items-center">
        <Button
          type="button"
          variant="link"
          className="px-0 hover:no-underline"
          onClick={() =>  pathname.includes("create") ?  dispatch(resumeCreatePrevStep()) : dispatch(resumeEditPrevStep())}
        >
          <Icons.chevronLeft width={20} height={20} className="mr-2 " />
          Geri Dön
        </Button>
        <Button type="button" onClick={onSubmit}>
          Devam et
        </Button>
      </div>
      <SummaryInfoForm />
      <EducationInfoForm />
      <ExperienceInfoForm />
      <SkillInfoForm />
      <ReferenceInfoForm />
      {resume.customInfo && <CustomInfoForm />}
      {resume.courseInfo && <CourseInfoForm />}
      {resume.hobbyInfo && <HobbyInfoForm />}
      {resume.internshipInfo && <InternshipInfoForm />}
      {resume.languageInfo && <LanguageInfoForm />}
      <div className="border border-border p-5 rounded-lg">
        <div className="flex pb-5 border-b border-border">
          <Icons.plus className="mr-2" />
          <span className="font-medium">Bölüm Ekle</span>
        </div>
        <div className="pt-5 grid grid-cols-2">
          <Button
            type="button"
            id="Ekle"
            variant="link"
            className=" px-0 w-fit mb-2 hover:no-underline"
            onClick={() => dispatch(addCustomInfo())}
            disabled={resume.customInfo ? true : false}
          >
            <Icons.table className="mr-3" />
            Custom Section
          </Button>
          <Button
            type="button"
            variant="link"
            className=" px-0 w-fit mb-2 hover:no-underline"
            onClick={() => dispatch(addCourseInfo())}
            disabled={resume.courseInfo ? true : false}
          >
            <Icons.award className="mr-3" />
            Courses
          </Button>
          <Button
            type="button"
            variant="link"
            className=" px-0 w-fit mb-2 hover:no-underline"
            onClick={() => dispatch(addHobbyInfo())}
            disabled={resume.hobbyInfo ? true : false}
          >
            <Icons.puzzle className="mr-3" />
            Hobbies
          </Button>
          <Button
            type="button"
            variant="link"
            className=" px-0 w-fit mb-2 hover:no-underline"
            onClick={() => dispatch(addInternshipInfo())}
            disabled={resume.internshipInfo ? true : false}
          >
            <Icons.backpack className="mr-3" />
            Internships
          </Button>
          <Button
            type="button"
            variant="link"
            className=" px-0 w-fit hover:no-underline"
            onClick={() => dispatch(addLanguageInfo())}
            disabled={resume.languageInfo ? true : false}
          >
            <Icons.languages className="mr-3" />
            Languages
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CVInfoForm
