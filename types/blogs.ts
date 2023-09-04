import { Entry, EntrySys } from "contentful"

export interface BlogEntry extends Entry<any> {
  contentTypeId: "blog"
  fields: {
    title: string
    slug: string
    subTitle: string
    coverImage: {
      fields: {
        title: string
        file: {
          url: string
        }
      }
    }
    content?: any
    similarBlogs?: {
      fields: {
        title: string
        slug: string
        coverImage: {
          fields: {
            title: string
            file: {
              url: string
            }
          }
        }
        category: {
          fields: {
            title: string
            slug: string
          }
        }
      }
    }[]
    category: {
      fields: {
        title: string
        slug: string
      }
    }
    author: {
      fields: {
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
    }
    metaTitle?: string
    metaDescription?: string
    metaKeywords?: string
    metaImage?: {
      fields: {
        title: string
        file: {
          url: string
        }
      }
    }
    isIndexPage?: boolean
    isFollowPage?: boolean
    structuredData?: any
  }
  sys: EntrySys
}

export interface CategoryEntry extends Entry<any> {
  contentTypeId: "category"
  fields: {
    metaTitle: string
    metaDescription: string
    metaKeywords: string
    metaImage: {
      fields: {
        title: string
        file: {
          url: string
        }
      }
    }
    isIndexPage: boolean
    isFollowPage: boolean
  }
  sys: EntrySys
}

export interface EditorPicks extends Entry<any> {
  contentTypeId: "editor"
  fields: {
    title: string
    pickBlogs: BlogEntry[]
  }
  sys: EntrySys
}
