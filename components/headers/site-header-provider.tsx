"use client"

import React, { FC } from "react"
import { useSelectedLayoutSegments } from "next/navigation"

interface ISiteHeaderProvider {
  children?: React.ReactNode
}

const SiteHeaderProvider: FC<ISiteHeaderProvider> = ({ children }) => {
  const segments = useSelectedLayoutSegments()
  const showNavbar = ![
    "sign-in",
    "sign-up",
    "sign-out",
    "forgot-password",
  ].includes(segments[1])

  const showNavbarOnlyOauthPage = !["oauth"].includes(segments[0])

  const showNavbarWithoutEditAndCreatePage = !["edit", "create"].includes(
    segments[2]
  )

  return showNavbar &&
    showNavbarOnlyOauthPage &&
    showNavbarWithoutEditAndCreatePage ? (
    <>{children}</>
  ) : null
}

export default SiteHeaderProvider
