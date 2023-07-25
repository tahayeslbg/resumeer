"use client"

import React, { useTransition } from "react"
import { changePasswordValidation } from "@/validations/userValidation"
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
import { changePasswordAction } from "@/app/actions"

import { Icons } from "../icons"
import { PasswordInput } from "../ui/password-input"
import { useToast } from "../ui/use-toast"
import { useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"



const ChangePasswordForm = () => {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof changePasswordValidation>>({
    resolver: zodResolver(changePasswordValidation),
    defaultValues: {
      password: "",
      passwordConfirm: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof changePasswordValidation>) => {
    startTransition(async () => {
      const actionResult = await changePasswordAction(values)
      if (!actionResult.success) {
        toast({
          description: actionResult.errorMessage,
          variant: "destructive",
        })
      } else {
        toast({
          description: actionResult.message,
        })
      }
    })
  }

  const password = useAppSelector((state: RootState) => state.user.password)

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          <FormLabel className="text-xl font-semibold">
            Şifreyi değiştir
          </FormLabel>
          <FormDescription className="mt-1 mb-3">
            Yeni bir şifre seçerken, harf, rakam ve özel karakter içerdiğinden
            emin olun.
          </FormDescription>
          <div className="grid grid-cols-2 space-x-4 mb-3 sm:grid-cols-1 sm:space-x-0">
            <FormItem>
              <FormLabel>Şuanki Şifre</FormLabel>
              <PasswordInput defaultValue={password} disabled />
            </FormItem>
          </div>
          <div className="grid grid-cols-2 space-x-4 mb-5 sm:grid-cols-1 sm:space-y-3 sm:space-x-0">
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
                <FormItem>
                  <FormLabel>Şifreyi Onayla</FormLabel>
                  <FormControl>
                    <PasswordInput {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            variant={"default"}
            className="self-end"
            disabled={isPending}
          >
            {isPending && (
              <Icons.loader
                width={16}
                height={16}
                className="animate-spin mr-2"
              />
            )}
            Kaydet
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default ChangePasswordForm
