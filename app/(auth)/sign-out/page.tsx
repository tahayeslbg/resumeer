"use client"

import React, { useTransition } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"
import { logoutAction } from "@/app/actions"

const SignOutPage = () => {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()
  const router = useRouter()

  const handleLogout = async () => {
    startTransition(async () => {
      const actionResult = await logoutAction()
      if (!actionResult.success) {
        toast({
          description: actionResult.errorMessage,
          variant: "destructive",
        })
      }
      router.refresh()
      window.location.reload()
    })
  }

  return (
    <section className="container min-h-screen flex flex-col justify-center items-center ">
      <Card className="min-w-[500px] sm:min-w-fit">
        <CardHeader>
          <CardTitle>Çıkış Yap</CardTitle>
          <CardDescription>
            Çıkış yapmak istediğinizden emin misiniz?
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex items-center justify-between space-x-4">
          <Button
            variant="secondary"
            className="w-full"
            onClick={handleLogout}
            disabled={isPending}
          >
            {isPending && (
              <Icons.loader
                width={16}
                height={16}
                className="animate-spin mr-2"
              />
            )}
            Çıkış yap
          </Button>
          <Button className="w-full" onClick={() => router.back()}>
            Geri dön
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}

export default SignOutPage
