import { FetchOptions } from "@/lib/@types"
import { refreshToken } from "@/lib/auth.action"
import { getSession } from "@/lib/session"


export const authFetch = async (url: string | URL, options: FetchOptions = {}) => {
  const session = await getSession()

  options.headers = {
    ...options.headers,
    Authorization: `Bearer ${session?.accessToken}`
  }

  let response = await fetch(url, options)

  if (response.status === 401) {
    if (!session?.refreshToken) throw new Error('No refresh token')
    const newAccessToken = await refreshToken(session.refreshToken)
    if (!newAccessToken) throw new Error('No new access token')
    options.headers.Authorization = `Bearer ${newAccessToken}`
    response = await fetch(url, options)
  }

  return response

}