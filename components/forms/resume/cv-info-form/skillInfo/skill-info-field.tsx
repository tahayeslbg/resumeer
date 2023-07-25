import React, { FC, HTMLInputTypeAttribute } from "react"
import { Skill, SkillInfo, setSkillInfoField } from "@/redux/features/resume"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface SkillInfoFieldProps {
  index: number
  name: keyof Skill
  label?: string
  type?: HTMLInputTypeAttribute
}

const SkillInfoField: FC<SkillInfoFieldProps> = ({
  index,
  name,
  label,
  type = "text",
}) => {
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
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type={type}
        value={skillInfo.skills[index][name]}
        onChange={(event) => {
          handleSkillInfoChange(name, index)(event.target.value)
        }}
      />
    </div>
  )
}

export default SkillInfoField
