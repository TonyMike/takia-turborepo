export type FormState = {
  errors?: {
    fullName?: string[],
    email?: string[],
    password?: string[],
    phoneNumber?: string[],
  },
  message?: string,
} | undefined

export enum Role {
  admin = 'admin',
  user = 'user',
}
export type SessionType = {
  user: {
    id: string,
    email: string,
    role: Role,
  },
  accessToken: string,
  refreshToken: string,
}

export interface FetchOptions extends RequestInit {
  headers?: Record<string, string>
}