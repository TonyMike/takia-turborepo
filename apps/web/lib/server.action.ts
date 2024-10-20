"use server"

import { authFetch } from "@/helpers/authFetch"
import { NEXT_PUBLIC_BACKEND_URL } from "./constants"


export const getProfile = async () => {
  const res = await authFetch(`${NEXT_PUBLIC_BACKEND_URL}/auth/me`)
  return res.json()
}