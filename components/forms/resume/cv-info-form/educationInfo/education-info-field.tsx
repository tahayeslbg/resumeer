import React, { FC, HTMLInputTypeAttribute } from "react"
import {
  Education,
  EducationInfo,
  setEducationInfoField,
} from "@/redux/features/resume"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface EducationInfoFieldProps {
  index: number
  name: keyof Education
  label?: string
  type?: HTMLInputTypeAttribute
}

const EducationInfoField: FC<EducationInfoFieldProps> = ({
  index,
  name,
  label,
  type = "text",
}) => {
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
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type={type}
        value={educationInfo.educations[index][name]}
        onChange={(event) => {
          handleEducationInfoChange(name, index)(event.target.value)
        }}
      />
    </div>
  )
}

export default EducationInfoField
