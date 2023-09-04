import "@/styles/globals.css"
import { Metadata } from "next"
import OpenGraphImage from "@/public/images/resumeer_homepage_open_graph.png"
import { Analytics } from "@vercel/analytics/react"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { SiteHeader } from "@/components/headers/site-header"
import { ThemeProvider } from "@/components/theme/theme-provider"

export const metadata: Metadata = {
  metadataBase:
    process.env.NODE_ENV !== "production"
      ? new URL("http://localhost:3000")
      : new URL("https://www.resumeer.app"),
  title: {
    default: siteConfig.name,
    template: "",
  },
  description: siteConfig.description,
  keywords: [
    "cv",
    "cv oluşturucu",
    "özgeçmiş",
    "özgeçmiş oluşturucu",
    "yapay zeka cv",
    "yapay zeka özgeçmiş",
  ],
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#080D16" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    images: [
      {
        url: OpenGraphImage.src,
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical:
      process.env.NODE_ENV !== "production"
        ? "http://localhost:3000"
        : "https://www.resumeer.app",
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
  return (
    <>
      <html lang="tr" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <SiteHeader />
            {authModal}
            {children}
            <Toaster />
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </>
  )
}
