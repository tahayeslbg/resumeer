"use client"

import React, { FC } from "react"

import { Icons } from "./icons"
import { Button } from "./ui/button"

interface IGoogleButton {
  className: string
}

const GoogleButton: FC<IGoogleButton> = ({ className }) => {
  const handleGoogleAuth = () => {
    const googleLoginURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/google`

    window.open(googleLoginURL, "_self", "width=500,height=600")
  }
  return (
    <button
      className={`bg-white flex justify-center items-center border py-3 text-sm text-slate-900 font-medium rounded-md ${className}`}
      onClick={handleGoogleAuth}
    >
      <Icons.google className="mr-2" />
      Google ile devam et
    </button>
  )
}

export default GoogleButton
