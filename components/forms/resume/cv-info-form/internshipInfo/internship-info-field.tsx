import React, { FC, HTMLInputTypeAttribute } from "react"
import {
  Internship,
  InternshipInfo,
  setInternshipInfoField,
} from "@/redux/features/resume"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InternshipInfoFieldProps {
  index: number
  name: keyof Internship
  label?: string
  type?: HTMLInputTypeAttribute
}

const InternshipInfoField: FC<InternshipInfoFieldProps> = ({
  index,
  name,
  label,
  type = "text",
}) => {
  const dispatch = useAppDispatch()
  const internshipInfo = useAppSelector(
    (state: RootState) => state.resume.internshipInfo
  )
  const handleInternshipInfoChange =
    (field: keyof Internship | keyof InternshipInfo, index?: number) =>
    (value: string) => {
      dispatch(
        setInternshipInfoField({
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
        value={internshipInfo!.internships[index][name]}
        onChange={(event) => {
            handleInternshipInfoChange(name, index)(event.target.value)
        }}
      />
    </div>
  )
}

export default InternshipInfoField
