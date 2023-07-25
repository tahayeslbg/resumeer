"use client"

import { setPersonalInfoField } from "@/redux/features/resume"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

interface PersonalInfoFieldProps {
  label: string
  form: any
  name:
    | "jobTitle"
    | "firstName"
    | "lastName"
    | "emailAddress"
    | "profilePhoto"
    | "phoneNumber"
    | "country"
    | "city"
    | "address"
    | "zipCode"
    | "nationality"
    | "drivingLicense"
    | "placeOfBirth"
    | "dateOfBirth"
    | "linkedInLink"
    | "websiteLink"
}

export const PersonalInfoField: React.FC<PersonalInfoFieldProps> = ({
  name,
  label,
  form,
}) => {
  const dispatch = useAppDispatch()
  const personalInfo = useAppSelector(
    (state: RootState) => state.resume.personalInfo
  )
  const handlePersonalInfoChange = (field: any) => (value: string) => {
    dispatch(
      setPersonalInfoField({
        field,
        value,
      })
    )
  }

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel> {label} </FormLabel>
          <FormControl>
            <Input
              {...field}
              value={personalInfo[name]}
              onChange={(event) => {
                field.onChange(event)
                handlePersonalInfoChange(name)(event.target.value)
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
