import { NavItem } from "@/types/navigation"
import { Icons } from "@/components/icons"

export interface SiteConfig {
  name: string
  description: string
  routes: NavItem[]
}

export const siteConfig: SiteConfig = {
  name: "Yapay Zeka CV Oluşturucu - Özgeçmiş Hazırlama | Resumeer",
  description:
    "Kariyerinizi parlatacak yapay zeka destekli CV oluşturucu! Profesyonel özgeçmişinizi anında hazırlayın. CV, özgeçmiş oluşturucu ve yapay zeka ile daha etkileyici başvurular.",
  routes: [
    {
      title: "Kayıt ol",
      href: "/sign-up",
      variant: "link",
      protected: false,
    },
    {
      title: "Giriş yap",
      href: "/sign-in",
      variant: "default",
      protected: false,
    },
    {
      title: "Hesap ayarları",
      href: "/dashboard/account",
      variant: "link",
      protected: true,
    },
    {
      title: "Özgeçmişler",
      href: "/dashboard/resumes",
      variant: "link",
      protected: true,
    },
  ],
}
