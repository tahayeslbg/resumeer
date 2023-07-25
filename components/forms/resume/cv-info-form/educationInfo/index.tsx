import { useState } from "react"
import {
  Education,
  EducationInfo,
  addEducation,
  moveEducation,
  removeEducation,
  setEducationInfoField,
} from "@/redux/features/resume"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Editor from "@/components/editor"
import { Icons } from "@/components/icons"

import EducationInfoField from "./education-info-field"

const EducationInfoForm = () => {
  const [isOpen, setIsOpen] = useState([])
  const [isOpenInfo, setIsOpenInfo] = useState(false)
  const [isEditedTitle, setIsEditedTitle] = useState(false)

  const dispatch = useAppDispatch()
  const educationInfo = useAppSelector(
    (state: RootState) => state.resume.educationInfo
  )

  const handleEducationInfoChange =
    (field: keyof Education | keyof EducationInfo, index?: number) =>
    (value: string) => {
      dispatch(
        setEducationInfoField({
          index,
          field,
          value,
        })
      )
    }
  const handleAddEducation = () => {
    dispatch(addEducation())
  }

  const handleRemoveEducation = (index: number) => {
    dispatch(removeEducation({ index }))
  }

  const handleMove = (index: number, direction: "up" | "down") => {
    const newIndex = direction === "up" ? index - 1 : index + 1
    dispatch(moveEducation({ oldIndex: index, newIndex }))
  }

  return (
    <div className="border border-border rounded-lg">
      <div
        className="flex justify-between p-5 cursor-pointer space-x-5"
        onClick={() => setIsOpenInfo((prev) => !prev)}
      >
        {isEditedTitle ? (
          <div className="flex flex-col space-y-3">
            <Input
              value={educationInfo.title}
              onClick={(e) => e.stopPropagation()}
              onChange={(event) => {
                handleEducationInfoChange(
                  "title",
                  undefined
                )(event.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                }
              }}
              onBlur={() => {
                if (educationInfo.title !== "") {
                  setIsEditedTitle(false)
                }
              }}
            />
            <span className="text-sm text-red-500">
              {educationInfo.title === "" && "Bu alan boş bırakılamaz."}
            </span>
          </div>
        ) : (
          <div className="text-base font-medium flex items-center">
            <Icons.education className="mr-3" />
            <span>{educationInfo.title}</span>
          </div>
        )}
        <div className="flex space-x-4">
          <Icons.edit
            width={20}
            height={20}
            onClick={(e: any) => {
              e.stopPropagation()
              if (educationInfo.title !== "") {
                setIsEditedTitle((prev) => !prev)
              }
            }}
          />
          <Icons.chevronDown width={20} height={20} />
        </div>
      </div>
      {isOpenInfo ? (
        <div className="pb-5 px-5 space-y-5">
          {educationInfo.educations.map((field: any, index: number) => (
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
                        //Move Fonksiyonları gelecek (indexi artıracak)
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
                        //Move Fonksiyonları gelecek (indexi azaltacak)
                      }}
                      disabled={index === educationInfo.educations.length - 1}
                      className="py-0 px-0 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Icons.arrowDown width={14} height={14} />
                    </button>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm font-medium">
                      {educationInfo.educations[index].school
                        ? educationInfo.educations[index].school
                        : "(Belirtilmedi)"}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      {educationInfo.educations[index].startDate
                        ? educationInfo.educations[index].startDate
                        : "(Belirtilmedi)"}{" "}
                      -{" "}
                      {educationInfo.educations[index].endDate
                        ? educationInfo.educations[index].endDate
                        : "(Belirtilmedi)"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center ">
                  <Button
                    size="sm"
                    type="button"
                    variant="link"
                    onClick={() => handleRemoveEducation(index)}
                    disabled={educationInfo.educations.length <= 1}
                  >
                    <Icons.trash width={16} height={16} />
                  </Button>

                  <Icons.chevronDown width={16} height={16} />
                </div>
              </div>

              {isOpen[index] ? (
                <div className="px-5 pb-5 space-y-5">
                  <div className="grid grid-cols-2 gap-x-5 sm:grid-cols-1 sm:gap-y-5">
                    <EducationInfoField
                      index={index}
                      label="Okul"
                      name="school"
                    />
                    <EducationInfoField
                      index={index}
                      label="Derece"
                      name="degree"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-x-5 sm:grid-cols-1 sm:gap-y-5">
                    <div>
                      <Label>Başlangıç & Bitiş Tarihi</Label>
                      <div className="grid grid-cols-2 gap-x-5">
                        <EducationInfoField
                          type="date"
                          index={index}
                          name="startDate"
                        />
                        <EducationInfoField
                          type="date"
                          index={index}
                          name="endDate"
                        />
                      </div>
                    </div>
                    <EducationInfoField
                      index={index}
                      label="Şehir"
                      name="city"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Açıklama</Label>
                    <Editor
                      content={educationInfo.educations[index].description}
                      onUpdate={({ editor }) =>
                        handleEducationInfoChange(
                          "description",
                          index
                        )(editor.getHTML())
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
            onClick={handleAddEducation}
            disabled={educationInfo.educations.length === 4}
            className="p-0 flex items-center text-sm hover:no-underline"
          >
            <span className="p-1 bg-slate-100 dark:bg-slate-800 rounded-full mr-2">
              <Icons.plus width={16} height={16} />
            </span>
            Eğitim Ekle
          </Button>
        </div>
      ) : null}
    </div>
  )
}

export default EducationInfoForm
