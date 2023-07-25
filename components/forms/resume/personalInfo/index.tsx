import { useState } from "react"
import { setPersonalInfoField } from "@/redux/features/resume"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { personalInfoValidation } from "@/validations/resumeValidation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Icons } from "@/components/icons"

import { PersonalInfoField } from "./personal-info-field"
import { usePathname } from "next/navigation"
import { resumeCreateNextStep, resumeEditNextStep } from "@/redux/features/resume/resumeSteps"

const PersonalInfoForm = () => {
  const [openAdditional, setOpenAdditional] = useState<boolean>(false)
  const pathname = usePathname()

  const personalInfo = useAppSelector((state) => state.resume.personalInfo)
  const dispatch = useAppDispatch()

  const form = useForm<z.infer<typeof personalInfoValidation>>({
    resolver: zodResolver(personalInfoValidation),
    mode: "onChange",
    defaultValues: personalInfo,
  })

  const handlePersonalInfoChange =
    (field: keyof typeof personalInfo) => (value: string) => {
      dispatch(
        setPersonalInfoField({
          field,
          value,
        })
      )
    }
  const onSubmit = () => pathname.includes("create") ?  dispatch(resumeCreateNextStep()) : dispatch(resumeEditNextStep())
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-xl mx-auto"
      >
        <div className="flex justify-between items-end space-x-3 sm:flex-col sm:space-y-4 mb-6">
          <div>
            <h1 className="text-xl text-primary font-semibold mb-2">
              Kişisel bilgilerinizi özgeçmişinize ekleyin
            </h1>
            <FormDescription>
              İşverenlerin sizinle nasıl iletişim kurabileceklerini görmelerini
              sağlar
            </FormDescription>
          </div>
          <Button type="submit">Devam et</Button>
        </div>
        <div className="p-6 border rounded-lg border-border space-y-4 ">
          <div className="grid grid-cols-2 space-x-4 sm:grid-cols-1 sm:space-x-0 sm:space-y-4">
            <PersonalInfoField form={form} label="İş Rolü" name="jobTitle" />
            <div className="flex flex-col items-end">
              <FormField
                control={form.control}
                name="profilePhoto"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mb-1.5 self-start">
                      Profil Fotoğrafı
                    </FormLabel>
                    <div className="flex space-x-4">
                      <div className="w-10 h-10 rounded-full bg-slate-800 shrink-0" />
                      <FormControl>
                        <Input
                          type="file"
                          {...field}
                          value={personalInfo.profilePhoto}
                          onChange={(event) => {
                            field.onChange(event)
                            handlePersonalInfoChange("profilePhoto")(
                              event.target.value
                            )
                          }}
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 space-x-4 sm:grid-cols-1 sm:space-x-0 sm:space-y-4">
            <PersonalInfoField form={form} label="İsim" name="firstName" />
            <PersonalInfoField form={form} label="Soy İsim" name="lastName" />
          </div>
          <div className="grid grid-cols-2 space-x-4 sm:grid-cols-1 sm:space-x-0 sm:space-y-4">
            <PersonalInfoField
              form={form}
              label="E-Posta"
              name="emailAddress"
            />
            <PersonalInfoField
              form={form}
              label="Telefon Numarası"
              name="phoneNumber"
            />
          </div>
          {openAdditional ? (
            <>
              <div className="grid grid-cols-2 space-x-4 sm:grid-cols-1 sm:space-x-0 sm:space-y-4">
                <PersonalInfoField form={form} label="Ülke" name="country" />
                <PersonalInfoField form={form} label="Şehir" name="city" />
              </div>
              <div className="grid grid-cols-2 space-x-4 sm:grid-cols-1 sm:space-x-0 sm:space-y-4">
                <PersonalInfoField form={form} label="Adres" name="address" />
                <PersonalInfoField
                  form={form}
                  label="Posta Kodu"
                  name="zipCode"
                />
              </div>
              <div className="grid grid-cols-2 space-x-4 sm:grid-cols-1 sm:space-x-0 sm:space-y-4">
                <PersonalInfoField
                  form={form}
                  label="Milliyet / Irk"
                  name="nationality"
                />
                <PersonalInfoField
                  form={form}
                  label="Ehliyet"
                  name="drivingLicense"
                />
              </div>
              <div className="grid grid-cols-2 space-x-4 sm:grid-cols-1 sm:space-x-0 sm:space-y-4">
                <PersonalInfoField
                  form={form}
                  label="Doğum Yeri"
                  name="placeOfBirth"
                />
                <PersonalInfoField
                  form={form}
                  label="Doğum Günü"
                  name="dateOfBirth"
                />
              </div>
              <div className="grid grid-cols-2 space-x-4 sm:grid-cols-1 sm:space-x-0 sm:space-y-4">
                <PersonalInfoField
                  form={form}
                  label="Linkedin"
                  name="linkedInLink"
                />
                <PersonalInfoField
                  form={form}
                  label="Website"
                  name="websiteLink"
                />
              </div>
            </>
          ) : null}
          <span
            className="text-sm flex items-center space-x-2 cursor-pointer"
            onClick={() => setOpenAdditional(!openAdditional)}
          >
            <span className="p-1 bg-slate-100 dark:bg-slate-800 rounded-full">
              {openAdditional ? (
                <Icons.minus width={16} height={16} />
              ) : (
                <Icons.plus width={16} height={16} />
              )}
            </span>
            <span>Ek Bilgiler</span>
          </span>
        </div>
      </form>
    </Form>
  )
}

export default PersonalInfoForm
