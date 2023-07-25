"use client"

import React, { useTransition } from "react"
import { usePathname, useRouter } from "next/navigation"

import { logoutAction } from "@/app/actions"

import { Icons } from "../icons"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"
import { useToast } from "../ui/use-toast"

const SignOutDialog = () => {
  const [isPending, startTransition] = useTransition()
  const { toast } = useToast()
  const pathname = usePathname()
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
    <Dialog
      open={pathname.includes("/sign-out") ? true : false}
      defaultOpen={pathname.includes("/sign-out") ? true : false}
      onOpenChange={() => router.back()}
    >
      <DialogContent>
        <DialogHeader className="text-left">
          <DialogTitle>Çıkış Yap</DialogTitle>
          <DialogDescription>
            Çıkış yapmak istediğinizden emin misiniz?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex flex-row items-center justify-between sm:justify-between space-x-4">
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
          <Button onClick={() => router.back()} className="w-full">
            İptal et
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default SignOutDialog
