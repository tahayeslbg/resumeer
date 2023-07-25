import React, { FC, HTMLInputTypeAttribute } from "react"
import {
  Reference,
  ReferenceInfo,
  setReferenceInfoField,
} from "@/redux/features/resume"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface ReferenceInfoFieldProps {
  index: number
  name: keyof Reference
  label?: string
  type?: HTMLInputTypeAttribute
}

const ReferenceInfoField: FC<ReferenceInfoFieldProps> = ({
  index,
  name,
  label,
  type = "text",
}) => {
  const dispatch = useAppDispatch()
  const referenceInfo = useAppSelector(
    (state: RootState) => state.resume.referenceInfo
  )
  const handleReferenceInfoChange =
    (field: keyof Reference | keyof ReferenceInfo, index?: number) =>
    (value: string) => {
      dispatch(
        setReferenceInfoField({
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
        value={referenceInfo.references[index][name]}
        onChange={(event) => {
          handleReferenceInfoChange(name, index)(event.target.value)
        }}
      />
    </div>
  )
}

export default ReferenceInfoField
