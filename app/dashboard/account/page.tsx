import React from "react"
import { Separator } from "@/components/ui/separator"
import ChangeEmailAddressForm from "@/components/forms/change-email-form"
import ChangeFullnameForm from "@/components/forms/change-fullname-form"
import ChangePasswordForm from "@/components/forms/change-password-form"

const AccountPage = async () => {
  return (
    <>
      <ChangeFullnameForm />
      <Separator className="my-6" />
      <ChangeEmailAddressForm />
      <Separator className="my-6" />
      <ChangePasswordForm />
    </>
  )
}

export default AccountPage
