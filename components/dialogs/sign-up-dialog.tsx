"use client"

import React from "react"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import SignUpForm from "@/components/forms/sign-up-form"
import GoogleButton from "@/components/google-button"

const SignUpDialog = () => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get("redirectUrl")

  return (
    <Dialog
      open={pathname.includes("/sign-up") ? true : false}
      defaultOpen={pathname.includes("/sign-up") ? true : false}
      onOpenChange={() =>
        redirectUrl ? router.replace(`${redirectUrl}`) : router.replace("/")
      }
    >
      <DialogContent>
        <DialogHeader className="text-left">
          <DialogTitle>Kayıt Ol</DialogTitle>
          <DialogDescription>
            Tercih ettiğiniz kayıt yöntemini seçin
          </DialogDescription>
        </DialogHeader>
        <GoogleButton className={cn("w-full")} />

        <div className="grid grid-cols-seperator items-center ">
          <div className="h-[1px] bg-border" />
          <span className="text-sm text-muted-foreground font-medium justify-self-center ">
            VEYA
          </span>
          <div className="h-[1px] bg-border" />
        </div>
        <SignUpForm />
        <DialogFooter className="sm:justify-between">
          <DialogDescription>
            Hesabınız var mı?{" "}
            <Link
              href={`/sign-in?redirectUrl=${redirectUrl}`}
              className="underline-offset-4 hover:underline text-primary"
            >
              Giriş yap
            </Link>
          </DialogDescription>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default SignUpDialog
