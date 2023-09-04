"use client"

import React, { useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import ForgotPasswordForm from "../forms/forgot-password-form"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog"

const ForgotPasswordDialog = () => {
  const [step, setStep] = useState(1)

  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get("redirectUrl")

  const dialogHeader = () => {
    switch (step) {
      case 1:
        return (
          <DialogHeader className="text-left">
            <DialogTitle>Şifremi Unuttum</DialogTitle>
            <DialogDescription>
              E-posta adresinizi girin, size bir doğrulama kodu gönderelim
            </DialogDescription>
          </DialogHeader>
        )
      case 2:
        return (
          <DialogHeader className="text-left">
            <DialogTitle>Şifreyi Yenile</DialogTitle>
            <DialogDescription>
              Yeni bir şifre girerek şifrenizi yenileyebilirsiniz
            </DialogDescription>
          </DialogHeader>
        )
      default:
        return null
    }
  }

  return (
    <Dialog
      open={pathname.includes("/forgot-password") ? true : false}
      defaultOpen={pathname.includes("/forgot-password") ? true : false}
      onOpenChange={() =>
        redirectUrl
          ? router.replace(`${redirectUrl}`, { scroll: false })
          : router.replace("/", { scroll: false })
      }
    >
      <DialogContent>
        {dialogHeader()}

        <ForgotPasswordForm step={step} setStep={setStep} />
      </DialogContent>
    </Dialog>
  )
}

export default ForgotPasswordDialog
