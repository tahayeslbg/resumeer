import React, { FC, HTMLInputTypeAttribute } from "react"
import {
    Course,
  CourseInfo,
  setCourseInfoField,
} from "@/redux/features/resume"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface CourseInfoFieldProps {
  index: number
  name: keyof Course
  label?: string
  type?: HTMLInputTypeAttribute
}

const CourseInfoField: FC<CourseInfoFieldProps> = ({
  index,
  name,
  label,
  type = "text",
}) => {
  const dispatch = useAppDispatch()
  const courseInfo = useAppSelector(
    (state: RootState) => state.resume.courseInfo
  )
  const handleCourseInfoChange =
    (field: keyof Course | keyof CourseInfo, index?: number) =>
    (value: string) => {
      dispatch(
        setCourseInfoField({
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
        value={courseInfo!.courses![index][name]}
        onChange={(event) => {
            handleCourseInfoChange(name, index)(event.target.value)
        }}
      />
    </div>
  )
}

export default CourseInfoField
