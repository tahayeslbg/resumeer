"use client"

import React, { useTransition } from "react"
import { changeFullnameValidation } from "@/validations/userValidation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

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
import { changeFullNameAction } from "@/app/actions"

import { Icons } from "../icons"
import { useToast } from "../ui/use-toast"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"



const ChangeFullnameForm = () => {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()
  const form = useForm<z.infer<typeof changeFullnameValidation>>({
    resolver: zodResolver(changeFullnameValidation),
    defaultValues: {
      fullName: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof changeFullnameValidation>) => {
    startTransition(async () => {
      const actionResult = await changeFullNameAction(values)
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

  const fullName = useAppSelector((state: RootState) => state.user.fullName)


  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          <FormLabel className="text-xl font-semibold mb-3">
            Adını soyadını değiştir
          </FormLabel>
          <div className="grid grid-cols-2 space-x-4 mb-5 sm:grid-cols-1 sm:space-y-3 sm:space-x-0">
            <FormItem>
              <FormLabel>Şuanki Ad-Soyad</FormLabel>
              <Input value={fullName} disabled className="capitalize" />
            </FormItem>
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Yeni Ad-Soyad</FormLabel>
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

export default ChangeFullnameForm
