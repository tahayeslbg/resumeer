import React from "react"

import AccountPageLinks from "@/components/account-page-links"

const AccountPageHeader = () => {
  return (
    <div className="w-full max-w-3xl mx-auto my-10">
      <h1 className="text-2xl text-slate-900 dark:text-slate-100 font-semibold">
        Hesap Ayarları
      </h1>
      <AccountPageLinks />
    </div>
  )
}

export default AccountPageHeader
