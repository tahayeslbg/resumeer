import React, { FC, HTMLInputTypeAttribute } from "react"
import { CustomInfo, Info, setCustomInfoField } from "@/redux/features/resume"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CustomInfoFieldProps {
  index: number
  name: keyof Info
  label?: string
  type?: HTMLInputTypeAttribute
}

const CustomInfoField: FC<CustomInfoFieldProps> = ({
  index,
  name,
  label,
  type = "text",
}) => {
  const dispatch = useAppDispatch()
  const customInfo = useAppSelector(
    (state: RootState) => state.resume.customInfo
  )
  const handleCustomInfoChange =
    (field: keyof Info | keyof CustomInfo, index?: number) =>
    (value: string) => {
      dispatch(
        setCustomInfoField({
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
        value={customInfo?.infos![index][name]}
        onChange={(event) => {
          handleCustomInfoChange(name, index)(event.target.value)
        }}
      />
    </div>
  )
}

export default CustomInfoField
