import { useState } from "react"
import {
  Skill,
  SkillInfo,
  addSkill,
  moveSkill,
  removeSkill,
  setSkillInfoField,
} from "@/redux/features/resume"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Icons } from "@/components/icons"
import RangeInput from "@/components/range-input"

import SkillInfoField from "./skill-info-field"

const SkillInfoForm = () => {
  const [isOpen, setIsOpen] = useState([])
  const [isOpenInfo, setIsOpenInfo] = useState(false)
  const [isEditedTitle, setIsEditedTitle] = useState(false)

  const dispatch = useAppDispatch()
  const skillInfo = useAppSelector((state: RootState) => state.resume.skillInfo)

  const handleSkillInfoChange =
    (field: keyof Skill | keyof SkillInfo, index?: number) =>
    (value: string | number) => {
      dispatch(
        setSkillInfoField({
          index,
          field,
          value,
        })
      )
    }
  const handleAddSkill = () => {
    dispatch(addSkill())
  }

  const handleRemoveSkill = (index: number) => {
    dispatch(removeSkill({ index }))
  }

  const handleMove = (index: number, direction: "up" | "down") => {
    const newIndex = direction === "up" ? index - 1 : index + 1
    dispatch(moveSkill({ oldIndex: index, newIndex }))
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
              value={skillInfo.title}
              onClick={(e) => e.stopPropagation()}
              onChange={(event) => {
                handleSkillInfoChange("title", undefined)(event.target.value)
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault()
                }
              }}
              onBlur={() => {
                if (skillInfo.title !== "") {
                  setIsEditedTitle(false)
                }
              }}
            />
            <span className="text-sm text-red-500">
              {skillInfo.title === "" && "Bu alan boş bırakılamaz."}
            </span>
          </div>
        ) : (
          <div className="text-base font-medium flex items-center">
            <Icons.bulb className="mr-3" />
            <span>{skillInfo.title}</span>
          </div>
        )}
        <div className="flex space-x-4">
          <Icons.edit
            width={20}
            height={20}
            onClick={(e: any) => {
              e.stopPropagation()
              if (skillInfo.title !== "") {
                setIsEditedTitle((prev) => !prev)
              }
            }}
          />
          <Icons.chevronDown width={20} height={20} />
        </div>
      </div>
      {isOpenInfo ? (
        <div className="pb-5 px-5 space-y-5">
          {skillInfo.skills.map((field: any, index: number) => (
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
                      disabled={index === skillInfo.skills.length - 1}
                      className="py-0 px-0 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <Icons.arrowDown width={14} height={14} />
                    </button>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm font-medium">
                      {skillInfo.skills[index].name
                        ? skillInfo.skills[index].name
                        : "(Belirtilmedi)"}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      {skillInfo.skills[index].rate === 0
                        ? "Başlangıç"
                        : skillInfo.skills[index].rate === 1
                        ? "Acemi"
                        : skillInfo.skills[index].rate === 2
                        ? "Yetenekli"
                        : skillInfo.skills[index].rate === 3
                        ? "Tecrübeli"
                        : skillInfo.skills[index].rate === 4
                        ? "Uzman"
                        : "(Belirtilmedi)"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center ">
                  <Button
                    size="sm"
                    type="button"
                    variant="link"
                    onClick={() => handleRemoveSkill(index)}
                    disabled={skillInfo.skills.length <= 1}
                  >
                    <Icons.trash width={16} height={16} />
                  </Button>

                  <Icons.chevronDown width={16} height={16} />
                </div>
              </div>

              {isOpen[index] ? (
                <div className="px-5 pb-5 space-y-5">
                  <div className="grid grid-cols-2 gap-x-5 sm:grid-cols-1 sm:gap-y-5">
                    <SkillInfoField index={index} name="name" label="Yetenek" />
                    <div className="self-center space-y-2">
                      <Label>Puan</Label>
                      <RangeInput
                        min={0}
                        max={4}
                        step={1}
                        onChange={(value: number) =>
                          handleSkillInfoChange("rate", index)(value)
                        }
                        value={skillInfo.skills[index].rate}
                        labels={[
                          "Başlangıç",
                          "Acemi",
                          "Yetenekli",
                          "Tecrübeli",
                          "Uzman",
                        ]}
                      />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
          <Button
            type="button"
            variant="link"
            onClick={handleAddSkill}
            disabled={skillInfo.skills.length === 4}
            className="p-0 flex items-center text-sm hover:no-underline"
          >
            <span className="p-1 bg-slate-100 dark:bg-slate-800 rounded-full mr-2">
              <Icons.plus width={16} height={16} />
            </span>
            Yetenek Ekle
          </Button>
        </div>
      ) : null}
    </div>
  )
}

export default SkillInfoForm
