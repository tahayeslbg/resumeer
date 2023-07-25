import React from "react"

import SelectTemplateDialog from "../dialogs/select-template-dialog"
import { Icons } from "../icons"
import { buttonVariants } from "../ui/button"

const ResumesPageHeader = () => {
  return (
    <div className="flex justify-between items-center sm:flex-col sm:items-start sm:space-y-5 border-b border-border pb-5">
      <h1 className="text-2xl text-slate-900 dark:text-slate-100 font-semibold">
        Özgeçmişler
      </h1>

      <SelectTemplateDialog replaceRoute="/dashboard/resumes/create" dialogTriggerClassName="sm:w-full">
        <div className={`sm:w-full ${buttonVariants({ variant: "default" })}`}>
          <Icons.plus
            className="stroke-primary-foreground mr-2"
            width={20}
            height={20}
          />
          Özgeçmiş oluştur
        </div>
      </SelectTemplateDialog>
    </div>
  )
}

export default ResumesPageHeader
