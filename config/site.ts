import { NavItem } from "@/types/navigation"
import { Icons } from "@/components/icons"

export interface SiteConfig {
  name: string
  description: string
  routes: NavItem[]
}

export const siteConfig: SiteConfig = {
  name: "En İyi Yapay Zeka Destekli CV Oluşturucu - Profesyonel CV Şablonları ve Özgeçmiş İncelemesi | Resumeer",
  description:
    "Yapay zeka destekli CV oluşturucu ile profesyonel bir CV oluşturun. Özelleştirilebilir şablonlar, özgeçmiş incelemesi ve diğer özelliklerle iş başvurularınızı güçlendirin. Hemen ücretsiz deneyin ve özgeçmişinizi en iyi şekilde sunun!",
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
