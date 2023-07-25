import React from "react"
import Image from "next/image"

import { resumeTemplates } from "@/config/resumeTemplates"
import { cn } from "@/lib/utils"

const ResumeTemplates = ({
  selectedTemplate,
  selectedTemplateChange,
  className,
}: {
  selectedTemplate: string
  selectedTemplateChange: any
  className?: React.HTMLAttributes<HTMLDivElement>["className"]
}) => {
  return (
    <div
      className={cn(
        " grid grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-4",
        className
      )}
    >
      {resumeTemplates.map((template, i) => (
        <div key={i}>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">
              {template.templateName}{" "}
            </span>
            <input
              type="radio"
              className="aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={template.templateId}
              checked={selectedTemplate === template.templateId}
              onChange={() => selectedTemplateChange(template.templateId)}
            />
          </div>
          <Image
            className="shadow "
            src={template.templateImg}
            alt={template.templateName}
          />
        </div>
      ))}
    </div>
  )
}

export default ResumeTemplates
