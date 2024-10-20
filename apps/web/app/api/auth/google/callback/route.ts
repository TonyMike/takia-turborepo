import { Role } from "@/lib/@types"
import { createSession } from "@/lib/session"
import { redirect } from "next/navigation"
import { NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const accessToken = searchParams.get("accessToken")
  const refreshToken = searchParams.get("refreshToken")
  const userId = searchParams.get("id")
  const email = searchParams.get("email")
  const role = searchParams.get("role")

  if (!accessToken || !refreshToken || !userId || !email || !role) {
    return new Response("Invalid request", { status: 400 })
  }

  await createSession({
    user: {
      id: userId,
      email,
      role: role as Role,
    },
    accessToken,
    refreshToken,
  })

  return redirect("/")
}