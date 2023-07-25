import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const { searchParams, origin } = new URL(req.url)
  const oauthToken = searchParams.get("oauthToken") as string

  cookies().set("auth", oauthToken, {
    secure: true,
    sameSite: "strict",
    httpOnly: true,
    priority: "high",
    maxAge: 60 * 60 * 24,
    expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
    path: "/",
  })

  return NextResponse.redirect(`${origin}/oauth`)
}
