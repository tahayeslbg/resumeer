"use client"

import React, { useTransition } from "react"
import { signInValidation } from "@/validations/authValidation"
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
import { signInAction } from "@/app/actions"

import { Icons } from "../icons"
import { PasswordInput } from "../ui/password-input"
import { useToast } from "../ui/use-toast"
import { useRouter } from "next/navigation"

interface SignInForm {}

const SignInForm = () => {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()
  const router = useRouter()

  const form = useForm<z.infer<typeof signInValidation>>({
    resolver: zodResolver(signInValidation),
    defaultValues: {
      emailAddress: "",
      password: "",
      rememberMe: false,
    },
  })

  const onSubmit = async (values: z.infer<typeof signInValidation>) => {
    startTransition(async () => {
      const actionResult = await signInAction(values)
      if (!actionResult.success) {
        console.log(actionResult)
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
          name="rememberMe"
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
                <FormLabel>Beni Hatırla</FormLabel>
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
          Giriş yap
        </Button>
      </form>
    </Form>
  )
}

export default SignInForm
