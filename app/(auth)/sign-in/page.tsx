import React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SignInForm from "@/components/forms/sign-in-form"
import GoogleButton from "@/components/google-button"

interface SignInPageProps {
  searchParams: {
    redirectUrl?: string | undefined
  }
}

const SignInPage = ({ searchParams }: SignInPageProps) => {
  const { redirectUrl } = searchParams
  return (
    <section className="container min-h-screen flex flex-col justify-center items-center ">
      <Card className="min-w-[500px] sm:min-w-fit">
        <CardHeader>
          <CardTitle>Giriş Yap</CardTitle>
          <CardDescription>
            Tercih ettiğiniz oturum açma yöntemini seçin
          </CardDescription>
        </CardHeader>

        <CardContent>
          <GoogleButton className={cn("w-full")} />

          <div className="grid grid-cols-seperator items-center my-4">
            <div className="h-[1px] bg-border" />
            <span className="text-sm text-muted-foreground font-medium justify-self-center ">
              VEYA
            </span>
            <div className="h-[1px] bg-border" />
          </div>

          <SignInForm />
        </CardContent>

        <CardFooter className="flex items-center justify-between">
          <CardDescription className={cn("sm:text-xs")}>
            Hesabınız yok mu?{" "}
            <Link
              href={`/sign-up?redirectUrl=${redirectUrl}`}
              className="underline-offset-4 hover:underline text-primary"
            >
              Kayıt ol
            </Link>
          </CardDescription>
          <CardDescription>
            <Link
              href={`/forgot-password?redirectUrl=${redirectUrl}`}
              className="underline-offset-4 hover:underline text-primary sm:text-xs"
            >
              Şifremi unuttum
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </section>
  )
}

export default SignInPage
