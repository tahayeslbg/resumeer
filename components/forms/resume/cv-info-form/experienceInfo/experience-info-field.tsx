import React, { FC, HTMLInputTypeAttribute } from "react"
import {
  Experience,
  ExperienceInfo,
  setExperienceInfoField,
} from "@/redux/features/resume"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ExperienceInfoFieldProps {
  index: number
  name: keyof Experience
  label?: string
  type?: HTMLInputTypeAttribute
}

const ExperienceInfoField: FC<ExperienceInfoFieldProps> = ({
  index,
  name,
  label,
  type = "text",
}) => {
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
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type={type}
        value={experienceInfo.experiences[index][name]}
        onChange={(event) => {
            handleExperienceInfoChange(name, index)(event.target.value)
        }}
      />
    </div>
  )
}

export default ExperienceInfoField
