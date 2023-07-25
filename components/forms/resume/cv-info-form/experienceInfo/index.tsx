import { useState } from "react"
import {
  Experience,
  ExperienceInfo,
  addExperience,
  moveExperience,
  removeExperience,
  setExperienceInfoField,
} from "@/redux/features/resume"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Editor from "@/components/editor"
import { Icons } from "@/components/icons"
import ExperienceInfoField from "./experience-info-field"
import { Label } from "@/components/ui/label"

const ExperienceInfoForm = () => {
  const [isOpen, setIsOpen] = useState([])
  const [isOpenInfo, setIsOpenInfo] = useState(false)
  const [isEditedTitle, setIsEditedTitle] = useState(false)

  const dispatch = useAppDispatch()
  const experienceInfo = useAppSelector(
    (state: RootState) => state.resume.experienceInfo
  )

  const handleExperienceInfoChange =
    (field: keyof Experience | keyof ExperienceInfo, index?: number) =>
    (value: string) => {
      dispatch(
        setExperienceInfoField({
          index,
          field,
          value,
        })
      )
    }
  const handleAddExperience = () => {
    dispatch(addExperience())
  }

  const handleRemoveExperience = (index: number) => {
    dispatch(removeExperience({ index }))
  }

  const handleMove = (index: number, direction: "up" | "down") => {
    const newIndex = direction === "up" ? index - 1 : index + 1;
    dispatch(moveExperience({ oldIndex: index, newIndex }));
  };

  return (
    <div className="border border-border rounded-lg">
      <div
        className="flex justify-between p-5 cursor-pointer space-x-5"
        onClick={() => setIsOpenInfo((prev) => !prev)}
      >
        {isEditedTitle ? (
          <div className="flex flex-col space-y-3">
            <Input
              value={experienceInfo.title}
              onClick={(e) => e.stopPropagation()}
              onChange={(event) => {
                handleExperienceInfoChange("title", undefined)(event.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                }
              }}
              onBlur={() => {
                if (experienceInfo.title !== "") {
                  setIsEditedTitle(false)
                }
              }}
            />
            <span className="text-sm text-red-500">
              {experienceInfo.title === "" && "Bu alan boş bırakılamaz."}
            </span>
          </div>
        ) : (
          <div className="text-base font-medium flex items-center">
            <Icons.bag className="mr-3" />
            <span>{experienceInfo.title}</span>
          </div>
        )}
        <div className="flex space-x-4">
          <Icons.edit
            width={20}
            height={20}
            onClick={(e: any) => {
              e.stopPropagation()
              if (experienceInfo.title !== "") {
                setIsEditedTitle((prev) => !prev)
              }
            }}
          />
          <Icons.chevronDown width={20} height={20} />
        </div>
      </div>
      {isOpenInfo ? (
        <div className="pb-5 px-5 space-y-5">
          {experienceInfo.experiences.map((field: any, index: number) => (
            <div
              key={index}
              className="border rounded-md border-border transition-transform animate-in duration-150"
            >
              <div
                className={`flex justify-between p-5 items-center cursor-pointer`}
                onClick={() =>
                  setIsOpen((prevIsOpen) => {
                    const newIsOpen: any = [...prevIsOpen]
                    newIsOpen[index] = !newIsOpen[index]
                    return newIsOpen
                  })
                }
              >
                <div className="flex items-center space-x-2">
                  <div className="flex flex-col space-y-3">
                    <button
                      type="button"
                      onClick={(e: any) => {
                        e.stopPropagation()
                        handleMove(index, "up")
                      }}
                      disabled={index === 0}
                      className="py-0 px-0 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Icons.arrowUp width={14} height={14} />
                    </button>
                    <button
                      type="button"
                      onClick={(e: any) => {
                        e.stopPropagation()
                        handleMove(index, "down")
                      }}
                      disabled={index === experienceInfo.experiences.length - 1}
                      className="py-0 px-0 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Icons.arrowDown width={14} height={14} />
                    </button>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm font-medium">
                      {experienceInfo.experiences[index].title
                        ? experienceInfo.experiences[index].title
                        : "(Belirtilmedi)"}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      {experienceInfo.experiences[index].startDate
                        ? experienceInfo.experiences[index].startDate
                        : "(Belirtilmedi)"}{" "}
                      -{" "}
                      {experienceInfo.experiences[index].endDate
                        ? experienceInfo.experiences[index].endDate
                        : "(Belirtilmedi)"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center ">
                  <Button
                    size="sm"
                    type="button"
                    variant="link"
                    onClick={() => handleRemoveExperience(index)}
                    disabled={experienceInfo.experiences.length <= 1}
                  >
                    <Icons.trash width={16} height={16} />
                  </Button>

                  <Icons.chevronDown width={16} height={16} />
                </div>
              </div>

              {isOpen[index] ? (
                <div className="px-5 pb-5 space-y-5">
                  <div className="grid grid-cols-2 gap-x-5 sm:grid-cols-1 sm:gap-y-5">
                    <ExperienceInfoField index={index} label="İş Başlığı" name="title" />
                    <ExperienceInfoField index={index} label="İş Rolü" name="role" />
                  </div>
                  <div className="grid grid-cols-2 gap-x-5 sm:grid-cols-1 sm:gap-y-5">
                <div>
                  <Label>Başlangıç & Bitiş Tarihi</Label>
                  <div className="grid grid-cols-2 gap-x-5">
                    <ExperienceInfoField type="date" index={index} name="startDate" />
                    <ExperienceInfoField type="date" index={index} name="endDate" />
                  </div>
                </div>
                <ExperienceInfoField index={index} label="Şehir" name="city" />
              </div>
              <div className="space-y-2">
                <Label>Açıklama</Label>
                <Editor
                  content={experienceInfo.experiences[index].description}
                  onUpdate={({ editor }) =>
                  handleExperienceInfoChange("description", index)(editor.getHTML())
                  }
                />
              </div>
                </div>
              ) : null}
            </div>
          ))}
        <Button
            type="button"
            variant="link"
            onClick={handleAddExperience}
            disabled={experienceInfo.experiences.length === 4}
            className="p-0 flex items-center text-sm hover:no-underline"
        >
            <span className="p-1 bg-slate-100 dark:bg-slate-800 rounded-full mr-2">
            <Icons.plus width={16} height={16} />
            </span>
            Deneyim Ekle
        </Button>
        </div>
      ) : null}
       
    </div>
  )
}

export default ExperienceInfoForm
