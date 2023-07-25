"use client"

import { useTransition } from "react"
import { changeNotificationValidation } from "@/validations/userValidation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { toast } from "@/components/ui/use-toast"
import { changeNotificationAction } from "@/app/actions"

import { Icons } from "../icons"
import { useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"


export function ChangeNotificationForm() {
  const [isPending, startTransition] = useTransition()
  const isEmailSubscribe = useAppSelector((state: RootState) => state.user.isEmailSubscribe)
  
  const form = useForm<z.infer<typeof changeNotificationValidation>>({
    resolver: zodResolver(changeNotificationValidation),
    defaultValues: {
      isEmailSubscribe: isEmailSubscribe,
    },
  })

  const onSubmit = async (
    values: z.infer<typeof changeNotificationValidation>
  ) => {
    startTransition(async () => {
      const actionResult = await changeNotificationAction(values)
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


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col ">
        <h3 className="text-xl font-semibold mb-3">Bildirimleri değiştir</h3>
        <div className="mb-5">
          <FormField
            control={form.control}
            name="isEmailSubscribe"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border border-border p-4">
                <div className="space-y-0.5 mr-2">
                  <FormLabel className="text-base">
                    Pazarlama E-Postaları
                  </FormLabel>
                  <FormDescription>
                    Yeni ürünler, özellikler ve daha fazlası hakkında e-postalar
                    alın.
                  </FormDescription>
                </div>
                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="self-end" disabled={isPending}>
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
  )
}
