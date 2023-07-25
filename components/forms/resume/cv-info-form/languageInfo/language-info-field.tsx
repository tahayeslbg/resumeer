import React, { FC, HTMLInputTypeAttribute } from "react"
import {
  Language,
  LanguageInfo,
  setLanguageInfoField,
} from "@/redux/features/resume"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface LanguageInfoFieldProps {
  index: number
  name: keyof Language
  label?: string
  type?: HTMLInputTypeAttribute
}

const LanguageInfoField: FC<LanguageInfoFieldProps> = ({
  index,
  name,
  label,
  type = "text",
}) => {
  const dispatch = useAppDispatch()
  const languageInfo = useAppSelector(
    (state: RootState) => state.resume.languageInfo
  )
  const handleLanguageInfoChange =
    (field: keyof Language | keyof LanguageInfo, index?: number) =>
    (value: string | number) => {
      dispatch(
        setLanguageInfoField({
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
        value={languageInfo!.languages[index][name]}
        onChange={(event) => {
          handleLanguageInfoChange(name, index)(event.target.value)
        }}
      />
    </div>
  )
}

export default LanguageInfoField
