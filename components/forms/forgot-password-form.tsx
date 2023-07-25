"use client"

import React, { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import {
  forgotPasswordStep1Validation,
  forgotPasswordStep2Validation,
} from "@/validations/authValidation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { forgotPasswordAction, resetPasswordAction } from "@/app/actions"

import { Icons } from "../icons"
import { PasswordInput } from "../ui/password-input"
import { useToast } from "../ui/use-toast"

const ForgotPasswordStep1 = ({
  onSubmit,
  isPending,
}: {
  onSubmit: (data: any) => void
  isPending: boolean
}) => {
  const form = useForm<z.infer<typeof forgotPasswordStep1Validation>>({
    resolver: zodResolver(forgotPasswordStep1Validation),
    defaultValues: {
      emailAddress: "",
    },
  })
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="emailAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-Posta</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className={cn("w-full ")} disabled={isPending}>
          {isPending && (
            <Icons.loader
              width={16}
              height={16}
              className="animate-spin mr-2"
            />
          )}
          Devam et
        </Button>
      </form>
    </Form>
  )
}

const ForgotPasswordStep2 = ({
  onSubmit,
  isPending,
}: {
  onSubmit: (data: any) => void
  isPending: boolean
}) => {
  const form = useForm<z.infer<typeof forgotPasswordStep2Validation>>({
    resolver: zodResolver(forgotPasswordStep2Validation),
    defaultValues: {
      password: "",
      passwordConfirm: "",
      confirmationCode: "",
    },
  })
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Yeni Şifre</FormLabel>
              <FormControl>
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem className="mb-5">
              <FormLabel>Şifreyi Onayla</FormLabel>
              <FormControl>
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmationCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Doğrulama Kodu</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className={cn("w-full ")} disabled={isPending}>
          {isPending && (
            <Icons.loader
              width={16}
              height={16}
              className="animate-spin mr-2"
            />
          )}
          Şifreyi yenile
        </Button>
      </form>
    </Form>
  )
}

const ForgotPasswordForm = ({
  step,
  setStep,
}: {
  step: number
  setStep: (step: number) => void
}) => {
  const [formData, setFormData] = useState<
    | z.infer<typeof forgotPasswordStep1Validation> &
        z.infer<typeof forgotPasswordStep2Validation>
  >({
    emailAddress: "",
    password: "",
    passwordConfirm: "",
    confirmationCode: "",
  })

  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const { toast } = useToast()

  const handleStep1 = async (
    data: z.infer<typeof forgotPasswordStep1Validation>
  ) => {
    setFormData({ ...formData, ...data })
    startTransition(async () => {
      const sendEmailForOtpCode = await forgotPasswordAction(data)
      if (!sendEmailForOtpCode.success) {
        toast({
          description: sendEmailForOtpCode.errorMessage,
          variant: "destructive",
        })
      } else {
        toast({
          description: sendEmailForOtpCode.message,
        })
        setStep(2)
      }
    })
  }

  const handleStep2 = async (
    data: z.infer<typeof forgotPasswordStep2Validation>
  ) => {
    setFormData({ ...formData, ...data })
    startTransition(async () => {
      const resetPasswordData = {
        emailAddress: formData.emailAddress,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
        confirmationCode: data.confirmationCode,
      }
      const resetPassword = await resetPasswordAction(resetPasswordData)
      if (!resetPassword.success) {
        toast({
          description: resetPassword.errorMessage,
          variant: "destructive",
        })
      } else {
        toast({
          description: resetPassword.message,
        })
        router.push("/sign-in")
      }
    })
  }

  // Render the component based on the current step
  switch (step) {
    case 1:
      return (
        <ForgotPasswordStep1 onSubmit={handleStep1} isPending={isPending} />
      )
    case 2:
      return (
        <ForgotPasswordStep2 onSubmit={handleStep2} isPending={isPending} />
      )
    default:
      return null
  }
}

export default ForgotPasswordForm
