"use client"

import React, { useTransition } from "react"
import { useRouter } from "next/navigation"
import { signUpValidation } from "@/validations/authValidation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"
import { signUpAction } from "@/app/actions"

import { PasswordInput } from "../ui/password-input"

const SignUpForm = () => {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<z.infer<typeof signUpValidation>>({
    resolver: zodResolver(signUpValidation),
    defaultValues: {
      fullName: "",
      emailAddress: "",
      password: "",
      passwordConfirm: "",
      isEmailSubscribe: true,
    },
  })

  const onSubmit = async (values: z.infer<typeof signUpValidation>) => {
    startTransition(async () => {
      const actionResult = await signUpAction(values)
      if (!actionResult.success) {
        toast({
          description: actionResult.errorMessage,
          variant: "destructive",
        })
      } else {
       return router.push("/dashboard/resumes")
      }
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ad-Soyad</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <div className="grid grid-cols-2 space-x-4">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Şifre</FormLabel>
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
        <FormField
          control={form.control}
          name="isEmailSubscribe"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-2 space-y-0 ">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) =>
                    field.onChange(checked === true)
                  }
                />
              </FormControl>
              <div className=" leading-none">
                <FormLabel>
                  Resumeer, e-posta yoluyla bana özel teklifler ve ürün
                  güncellemeleri gönderebilir. Herhangi bir zamanda devre dışı
                  bırakmak mümkündür.
                </FormLabel>
              </div>
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
          Kayıt ol
        </Button>
      </form>
    </Form>
  )
}

export default SignUpForm
