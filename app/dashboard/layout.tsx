import { cookies } from "next/headers"
import { fetchUser } from "@/redux/features/user"
import { Providers } from "@/redux/provider"
import { store } from "@/redux/store"

import DashboardHeader from "@/components/headers/dashboard-header"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const token = cookies().get("auth")

  if (token) {
    await store.dispatch(fetchUser(token.value))
    const me = store.getState().user
    return (
      <Providers
        preloadedState={{
          user: me,
        }}
      >
        <DashboardHeader />
        {children}
      </Providers>
    )
  } else {
    return <div>Kimliğiniz doğrulanamadı.</div>
  }
}
