import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function middleware(req: NextRequest) {
  const { nextUrl, cookies } = req
  const { pathname, origin } = nextUrl
  const token = cookies.has("auth")

  // Authenticated Route Flow
  if (token) {
    // Login & Register Route Flow
    if (
      pathname.includes("/sign-in") ||
      pathname.includes("/sign-up") ||
      pathname.endsWith("/") ||
      pathname.includes("/blog")
    ) {
      return NextResponse.redirect(`${origin}/dashboard/resumes`)
    }
  }
  // Not Authenticated Route Flow
  else {
    if (pathname.startsWith("/dashboard") || pathname.includes("/sign-out")) {
      return NextResponse.redirect(`${origin}/`)
    }
  }
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)", "/"],
}
