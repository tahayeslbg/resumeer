import AccountPageHeader from "@/components/headers/account-page-header"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function AccountLayout({ children }: RootLayoutProps) {
  return (
    <section className="container flexjustify-center ">
      <AccountPageHeader />
      <div className="w-full max-w-3xl my-10 mx-auto">{children}</div>
    </section>
  )
}
