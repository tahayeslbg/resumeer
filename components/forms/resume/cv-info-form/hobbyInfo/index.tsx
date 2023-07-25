import { useState } from "react"
import {
  HobbyInfo,
  resetHobbyInfo,
  setHobbyInfoField,
} from "@/redux/features/resume"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Editor from "@/components/editor"
import { Icons } from "@/components/icons"

const HobbyInfoForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isEditedTitle, setIsEditedTitle] = useState(false)

  const hobbyInfo = useAppSelector((state) => state.resume.hobbyInfo)
  const dispatch = useAppDispatch()

  const handleHobbyInfoChange = (field: keyof HobbyInfo) => (value: string) => {
    dispatch(
      setHobbyInfoField({
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
              value={hobbyInfo!.title}
              onClick={(e) => e.stopPropagation()}
              onChange={(event) => {
                handleHobbyInfoChange("title")(event.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                }
              }}
              onBlur={() => {
                if (hobbyInfo!.title !== "") {
                  setIsEditedTitle(false)
                }
              }}
            />
            <span className="text-sm text-red-500">
              {hobbyInfo!.title === "" && "Bu alan boş bırakılamaz."}
            </span>
          </div>
        ) : (
          <div className="text-base font-medium flex items-center">
            <Icons.puzzle className="mr-3" />
            <span>{hobbyInfo!.title}</span>
          </div>
        )}

        <div className="flex space-x-4">
          <Icons.edit
            width={20}
            height={20}
            onClick={(e: any) => {
              e.stopPropagation()
              if (hobbyInfo!.title !== "") {
                setIsEditedTitle((prev) => !prev)
              }
            }}
          />
          <Icons.trash
            width={20}
            height={20}
            onClick={(e: any) => {
              e.stopPropagation()
              dispatch(resetHobbyInfo())
            }}
          />
          <Icons.chevronDown width={20} height={20} />
        </div>
      </div>
      {isOpen ? (
        <div className="pb-5 px-5 space-y-3">
          <p className="text-sm text-slate-800 dark:text-slate-200">
            Hobilerin neler?
          </p>

          <div className="space-y-2">
            <Label>Açıklama</Label>
            <Editor
              content={hobbyInfo!.description}
              onUpdate={({ editor }) =>
                handleHobbyInfoChange("description")(editor.getHTML())
              }
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default HobbyInfoForm
