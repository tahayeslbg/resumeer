import React from "react"
import { StaticImageData } from "next/image"
import BasicTemplateImg from "@/public/images/basicResumeTemplate.png"
import DesignerTemplateImg from "@/public/images/designerTemplate.png"
import DeveloperTemplateImg from "@/public/images/developerTemplate.png"
import LuxuryTemplateImg from "@/public/images/luxuryTemplate.png"

import BasicTemplate from "@/components/resume-templates/basic"

export interface ResumeTemplatesConfig {
  templateId: "basic" | "developer" | "designer" | "luxury"
  templateName: string
  templateImg: StaticImageData
  templateComponent: React.FC
}

export const resumeTemplates: ResumeTemplatesConfig[] = [
  {
    templateId: "basic",
    templateName: "Basic",
    templateImg: BasicTemplateImg,
    templateComponent: BasicTemplate,
  },
]
