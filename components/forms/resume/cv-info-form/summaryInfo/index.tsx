import { useState } from "react"
import { setSummaryInfoField } from "@/redux/features/resume"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { Label } from "@/components/ui/label"

import { Input } from "@/components/ui/input"
import Editor from "@/components/editor"
import { Icons } from "@/components/icons"

const UpdatedSummaryInfo = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isEditedTitle, setIsEditedTitle] = useState(false)

  const summaryInfo = useAppSelector((state) => state.resume.summaryInfo)
  const dispatch = useAppDispatch()

  const handleSummaryInfoChange =
    (field: keyof typeof summaryInfo) => (value: string) => {
      dispatch(
        setSummaryInfoField({
          field,
          value,
        })
      )
    }
  return (
    <div className="border border-border  rounded-lg">
      <div
        className="flex justify-between p-5 cursor-pointer space-x-5"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isEditedTitle ? (
          <div className="flex flex-col space-y-3">
            <Input
              value={summaryInfo.title}
              onClick={(e) => e.stopPropagation()}
              onChange={(event) => {
                handleSummaryInfoChange("title")(event.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                }
              }}
              onBlur={() => {
                if (summaryInfo.title !== "") {
                  setIsEditedTitle(false)
                }
              }}
            />
            <span className="text-sm text-red-500">
              {summaryInfo.title === "" && "Bu alan boş bırakılamaz."}
            </span>
          </div>
        ) : (
          <div className="text-base font-medium flex items-center">
            <Icons.user className="mr-3" />
            <span>{summaryInfo.title}</span>
          </div>
        )}

        <div className="flex space-x-4">
          <Icons.edit
            width={20}
            height={20}
            onClick={(e: any) => {
              e.stopPropagation()
              if (summaryInfo.title !== "") {
                setIsEditedTitle((prev) => !prev)
              }
            }}
          />
          <Icons.chevronDown width={20} height={20} />
        </div>
      </div>
      {isOpen ? (
        <div className="pb-5 px-5 space-y-3">
          <p className="text-sm text-slate-800 dark:text-slate-200">
            Özgeçmişinizin en üstünde yer alan deneyiminizin kısa bir özeti (2-3
            cümle)
          </p>

          <div className="space-y-2">
            <Label>Açıklama</Label>

            <Editor
              content={summaryInfo.description}
              onUpdate={({ editor }) =>
                handleSummaryInfoChange("description")(editor.getHTML())
              }
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default UpdatedSummaryInfo
