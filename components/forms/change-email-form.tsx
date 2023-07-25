"use client"

import React, { useTransition } from "react"
import { changeEmailValidation } from "@/validations/userValidation"
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
import { changeEmailAddressAction } from "@/app/actions"

import { Icons } from "../icons"
import { useToast } from "../ui/use-toast"
import { useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"



const ChangeEmailAddressForm = () => {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof changeEmailValidation>>({
    resolver: zodResolver(changeEmailValidation),
    defaultValues: {
      emailAddress: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof changeEmailValidation>) => {
    startTransition(async () => {
      const actionResult = await changeEmailAddressAction(values)
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

  const emailAddress = useAppSelector((state: RootState) => state.user.emailAddress)
  
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          <FormLabel className="text-xl font-semibold">
            E-posta adresini değiştir
          </FormLabel>
          <FormDescription className="mt-1 mb-3">
            Hesabınızın size özel olduğunu unutmayın. E-postanızı
            değiştirdiğinizde verilerinizin aktarıldığını unutmayın.
          </FormDescription>
          <div className="grid grid-cols-2 space-x-4 mb-5 sm:grid-cols-1 sm:space-y-3 sm:space-x-0">
            <FormItem>
              <FormLabel>Şuanki E-Posta Adresi</FormLabel>
              <Input value={emailAddress} disabled />
            </FormItem>
            <FormField
              control={form.control}
              name="emailAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Yeni E-Posta Adresi</FormLabel>
                  <FormControl>
                    <Input {...field} />
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

export default ChangeEmailAddressForm
