"use server "
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SessionType } from "./@types";

const secretKey = process.env.SESSION_SECRET_KEY!
const encodedKey = new TextEncoder().encode(secretKey)

export const createSession = async (payload: SessionType) => {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)



  const session = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(encodedKey)

  cookies().set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiresAt,
    sameSite: 'lax',
    path: '/',
  })
}

export const getSession = async () => {
  const cookie = cookies().get("session")?.value;
  if (!cookie) return null

  try {
    const { payload } = await jwtVerify(cookie, encodedKey, {
      algorithms: ['HS256'],
    })

    return payload as SessionType
  } catch (error) {
    console.error('Failed to verify the session', error)
    redirect('/auth/login')
  }
}



export const deleteSession = async () => {
  await cookies().delete('session')
}

export const updateToken = async ({ accessToken, refreshToken }: { accessToken: string, refreshToken: string }) => {
  const cookie = cookies().get("session")?.value;
  if (!cookie) return null

  const { payload } = await jwtVerify<SessionType>(cookie, encodedKey)

  if (!payload) throw new Error('Session not found')

  const newPayload = {
    user: {
      ...payload.user,
    },
    accessToken,
    refreshToken,
  }

  await createSession(newPayload)

}