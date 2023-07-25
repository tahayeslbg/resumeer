import React, { useState } from "react"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import ResumeTemplates from "./resume-templates"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"
import { setTemplateId } from "@/redux/features/resume"

const ChangeTemplate = () => {
  const dispatch = useAppDispatch()
  const templateId = useAppSelector((state: RootState) => state.resume.templateId)
  const [selectedTemplate, setSelectedTemplate] = useState(
    templateId ? templateId : ""
  )

  const selectTemplateChange = (templateId: string) => {
    setSelectedTemplate(templateId)
    dispatch(setTemplateId(templateId))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="mb-5">Tema Değiştir</CardTitle>
        <Separator />
      </CardHeader>
      <CardContent>
        <ResumeTemplates
          selectedTemplate={selectedTemplate}
          selectedTemplateChange={selectTemplateChange}
        />
      </CardContent>
    </Card>
  )
}

export default ChangeTemplate
