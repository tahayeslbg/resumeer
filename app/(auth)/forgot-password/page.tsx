"use client"

import React, { useState } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import ForgotPasswordForm from "@/components/forms/forgot-password-form"

const ForgotPasswordPage = () => {
  const [step, setStep] = useState(1)

  const cardHeader = () => {
    switch (step) {
      case 1:
        return (
          <CardHeader>
            <CardTitle>Şifremi Unuttum</CardTitle>
            <CardDescription>
              E-posta adresinizi girin, size bir doğrulama kodu gönderelim
            </CardDescription>
          </CardHeader>
        )
      case 2:
        return (
          <CardHeader>
            <CardTitle>Şifreyi Yenile</CardTitle>
            <CardDescription>
              Yeni bir şifre girerek şifrenizi yenileyebilirsiniz
            </CardDescription>
          </CardHeader>
        )
      default:
        return null
    }
  }
  return (
    <section className="container flex min-h-screen justify-center items-center">
      <Card className="w-full max-w-lg">
        {cardHeader()}
        <CardContent>
          <ForgotPasswordForm step={step} setStep={setStep} />
        </CardContent>
      </Card>
    </section>
  )
}

export default ForgotPasswordPage
