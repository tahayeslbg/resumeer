"use client"

import React from "react"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { cn } from "@/lib/utils"
import SignInForm from "@/components/forms/sign-in-form"
import GoogleButton from "@/components/google-button"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"

const SignInDialog = () => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get("redirectUrl")

  return (
    <Dialog
      open={pathname.includes("/sign-in") ? true : false}
      defaultOpen={pathname.includes("/sign-in") ? true : false}
      onOpenChange={() =>
        redirectUrl ? router.replace(`${redirectUrl}`) : router.replace("/")
      }
    >
      <DialogContent>
        <DialogHeader className="text-left">
          <DialogTitle>Giriş Yap</DialogTitle>
          <DialogDescription>
            Tercih ettiğiniz oturum açma yöntemini seçin
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
        <SignInForm />
        <DialogFooter className="flex flex-row items-center justify-between sm:justify-between">
          <DialogDescription>
            Hesabınız yok mu?{" "}
            <Link
              href={`/sign-up?redirectUrl=${redirectUrl}`}
              className="underline-offset-4 hover:underline text-primary"
            >
              Kayıt ol
            </Link>
          </DialogDescription>
          <DialogDescription>
            <Link
              href={`/forgot-password?redirectUrl=${redirectUrl}`}
              className="underline-offset-4 hover:underline text-primary"
            >
              Şifremi unuttum
            </Link>
          </DialogDescription>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default SignInDialog
