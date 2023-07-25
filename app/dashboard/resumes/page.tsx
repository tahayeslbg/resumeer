import React from "react"
import { cookies } from "next/headers"
import Image from "next/image"
import BasicTemplateImg from "@/public/images/basicResumeTemplate.png"
import DesignerTemplateImg from "@/public/images/designerTemplate.png"
import DeveloperTemplateImg from "@/public/images/developerTemplate.png"
import LuxuryTemplateImg from "@/public/images/luxuryTemplate.png"
import moment from "moment"

import ResumesPageHeader from "@/components/headers/resumes-page-header"
import { Icons } from "@/components/icons"

import "moment/locale/tr"
import Link from "next/link"

import DeleteResumeDialog from "@/components/dialogs/delete-resume-dialog"
import SelectTemplateDialog from "@/components/dialogs/select-template-dialog"

const ResumesPage = async () => {
  const token = cookies().get("auth")
  const resumesRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me/resumes`,
    {
      headers: {
        Authorization: "Bearer " + token?.value,
      },
      cache: "no-store"
    }
  )
  const resumes = await resumesRes.json()

  return (
    <section className="container flex justify-center">
      <div className="w-full max-w-7xl my-10 mx-auto">
        <ResumesPageHeader />
        <div className="grid grid-cols-2 gap-10 mt-10  sm:grid-cols-1">
          {resumes.data.length !== 0 ? (
            resumes.data.map((resume: any, i: number) => (
              <div key={i} className="flex items-start space-x-5">
                <div className="border border-border">
                  <Link href={`/dashboard/resumes/edit/${resume._id}`}>
                    {resume.templateId === "basic" ? (
                      <Image src={BasicTemplateImg} alt={resume.templateName} />
                    ) : resume.templateId === "designer" ? (
                      <Image
                        src={DesignerTemplateImg}
                        alt={resume.templateName}
                      />
                    ) : resume.templateId === "developer" ? (
                      <Image
                        src={DeveloperTemplateImg}
                        alt={resume.templateName}
                      />
                    ) : (
                      resume.templateId === "luxury" && (
                        <Image
                          src={LuxuryTemplateImg}
                          alt={resume.templateName}
                        />
                      )
                    )}
                  </Link>
                </div>
                <div className="flex-shrink-0">
                  <div className="text-xl font-semibold text-primary inline-flex items-center ">
                    {resume.templateName}
                  </div>
                  <div className="text-xs mt-1 mb-6">
                    {moment(resume.createdAt).format("LLL")}
                  </div>
                  <div className="space-y-4">
                    <Link
                      className="flex items-center text-primary"
                      href={`/dashboard/resumes/edit/${resume._id}`}
                    >
                      <Icons.edit
                        width={20}
                        height={20}
                        className="stroke-primary mr-2"
                      />
                      Düzenle
                    </Link>

                    <div className="flex items-center text-red-500">
                      <DeleteResumeDialog resumeId={resume._id} />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <SelectTemplateDialog
                replaceRoute="/dashboard/resumes/create"
                dialogTriggerClassName="w-1/2 lg:w-full md:w-full sm:w-full"
              >
                <div className="flex justify-center w-full items-center col-span-2 min-h-[400px] border border-dashed border-border hover:border-primary transition-all duration-200 rounded-sm lg:w-full md:w-full sm:w-full group">
                  <div className="px-2 py-1 text-slate-600 dark:text-slate-300 group-hover:text-primary">
                    Özgeçmiş oluştur
                  </div>
                </div>
              </SelectTemplateDialog>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default ResumesPage
