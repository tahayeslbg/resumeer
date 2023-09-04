interface Author {
  fullName: string
  profilePhoto: {
    fields: {
      title: string
      file: {
        url: string
      }
    }
  }
}

interface BlogCategory {
  title: string
  slug: string
}

interface BlogImage {
  title: string
  file: {
    url: string
  }
}

type Layout = "vertical" | "horizontal"

export interface BlogCardProps {
  author: Author
  blogCreatedAt: string
  blogUpdatedAt: string
  blogCategory: BlogCategory
  blogTitle: string
  blogTitleAs: "h1" | "h2" | "h3"
  blogDescription: string
  blogImage: BlogImage
  layout: Layout
  blogImagePlace?: "left" | "right" | "top" | "bottom"
  blogHref: string
}
