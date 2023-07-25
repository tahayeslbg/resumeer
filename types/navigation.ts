import React from "react"

export interface NavItem {
  title: string
  href: string
  disabled?: boolean
  external?: boolean
  protected: boolean
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined
}
