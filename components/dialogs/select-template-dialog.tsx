"use client"

import React, { FC, ReactNode, useState } from "react"
import { useRouter } from "next/navigation"
import { useAppDispatch } from "@/redux/hooks"
import { DialogTrigger } from "@radix-ui/react-dialog"

import ResumeTemplates from "../resume-templates"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"
import { setTemplateId } from "@/redux/features/resume"

interface SelectTemplateDialogProps {
  children: ReactNode
  replaceRoute: string
  dialogTriggerClassName?: string
}

const SelectTemplateDialog: FC<SelectTemplateDialogProps> = ({
  children,
  replaceRoute,
  dialogTriggerClassName
}) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [selectedTemplate, setSelectedTemplate] = useState("")

  const selectTemplateChange = (templateId: string) => {
    setSelectedTemplate(templateId)
  }

  const handleSelectTemplate = (templateId: string) => {
    dispatch(setTemplateId(templateId))
    router.replace(replaceRoute)
  }

  return (
    <Dialog>
      <DialogTrigger className={dialogTriggerClassName}>{children}</DialogTrigger>
      <DialogContent className="w-full max-w-5xl">
        <DialogHeader className="text-left">
          <DialogTitle>Tema Seç</DialogTitle>
        </DialogHeader>
        <ResumeTemplates
          selectedTemplate={selectedTemplate}
          selectedTemplateChange={selectTemplateChange}
        />
        <DialogFooter className="flex flex-row items-center justify-end">
          <Button
            onClick={() => handleSelectTemplate(selectedTemplate)}
            disabled={selectedTemplate === ""}
          >
            Devam et
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default SelectTemplateDialog
