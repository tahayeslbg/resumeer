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
import SignUpForm from "@/components/forms/sign-up-form"
import GoogleButton from "@/components/google-button"

interface SignUpPageProps {
  searchParams: {
    redirectUrl?: string | undefined
  }
}
const SignUpPage = ({ searchParams }: SignUpPageProps) => {
  const { redirectUrl } = searchParams
  return (
    <section className="container min-h-screen flex flex-col justify-center items-center sm:py-5 ">
      <Card className="min-w-[500px] max-w-[500px] sm:min-w-fit">
        <CardHeader>
          <CardTitle>Kayıt Ol</CardTitle>
          <CardDescription>
            Tercih ettiğiniz kayıt yöntemini seçin
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

          <SignUpForm />
        </CardContent>

        <CardFooter>
          <CardDescription className={cn("sm:text-xs")}>
            Hesabınız var mı?{" "}
            <Link
              href={`/sign-in?redirectUrl=${redirectUrl}`}
              className="underline-offset-4 hover:underline text-primary"
            >
              Giriş yap
            </Link>
          </CardDescription>
        </CardFooter>
      </Card>
    </section>
  )
}

export default SignUpPage
