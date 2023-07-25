import "@/styles/globals.css"
import { Metadata } from "next"
import { cookies } from "next/headers"
import { initialState as resumeInitialState } from "@/redux/features/resume"
import { fetchUser } from "@/redux/features/user"
import { Providers } from "@/redux/provider"
import { store } from "@/redux/store"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { SiteHeader } from "@/components/headers/site-header"
import { ThemeProvider } from "@/components/theme/theme-provider"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#080D16" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
  authModal: React.ReactNode
}

export default async function RootLayout({
  children,
  authModal,
}: RootLayoutProps) {
  const token = cookies().get("auth")
  if (token) {
    await store.dispatch(fetchUser(token?.value))
    const me = store.getState().user
    return (
      <>
        <html lang="tr" suppressHydrationWarning>
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
            )}
          >
            <Providers
              preloadedState={{
                user: me,
                resume: resumeInitialState,
              }}
            >
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
              >
                <SiteHeader token={token.value} me={me} />
                {authModal}
                {children}
                <Toaster />
              </ThemeProvider>
            </Providers>
          </body>
        </html>
      </>
    )
  } else {
    return (
      <>
        <html lang="tr" suppressHydrationWarning>
          <body
            className={cn(
              "min-h-screen bg-background font-sans antialiased",
              fontSans.variable
            )}
          >
            <Providers>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
              >
                <SiteHeader />
                {authModal}
                {children}
                <Toaster />
              </ThemeProvider>
            </Providers>
          </body>
        </html>
      </>
    )
  }
}
