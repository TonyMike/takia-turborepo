"use server"

import axios from "axios"
import { redirect } from "next/navigation"
import { FormState } from "./@types"
import { NEXT_PUBLIC_BACKEND_URL } from "./constants"
import { loginSchema, registerSchema } from "./schemas"
import { createSession } from "./session"


export const registerAction = async (state: FormState, formData: FormData): Promise<FormState> => {
  const validateFields = registerSchema.safeParse({
    fullName: formData.get("fullName"),
    email: formData.get("email"),
    password: formData.get("password"),
    phoneNumber: formData.get("phoneNumber"),
  })
  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    }
  }


  const response = await axios.post(`${NEXT_PUBLIC_BACKEND_URL}/auth/register`, validateFields.data)
    .catch((error) => {
      if (axios.isAxiosError(error) && error.response) {
        return {
          message: error.response.status === 409 ? 'User already exists' : error.response.data.message,
        }
      } else {
        return {
          message: 'An unexpected error occurred',
        }
      }
    })

  if (response && !('message' in response)) {
    redirect('/auth/login')
  }

  return
}

export const loginAction = async (state: FormState, formData: FormData): Promise<FormState> => {
  const validateFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password")
  })

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    }
  }

  const response = await axios.post(`${NEXT_PUBLIC_BACKEND_URL}/auth/login`, validateFields.data)
    .catch((error) => {
      if (axios.isAxiosError(error) && error.response) {
        return {
          message: error.response.status === 401 ? 'Invalid Credentials' : error.response.data.message,
        }
      } else {
        return {
          message: 'An unexpected error occurred',
        }
      }
    })

  if (response && !('message' in response)) {
    const result = response.data
    await createSession({
      user: {
        id: result.id,
        email: result.email,
        role: result.role,
      },
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
    })
    redirect('/')
  }

  return {
    message: 'message' in response ? response.message : undefined,
  }

}



export const refreshToken = async (oldRefreshToken: string) => {
  console.log("🚀 ~ refreshToken ~ oldRefreshToken:", oldRefreshToken)
  try {
    const response = await axios.post(`${NEXT_PUBLIC_BACKEND_URL}/auth/refresh`, {
      refreshToken: oldRefreshToken
    })
    console.log("🚀 ~ refreshToken ~ response:", response)
    const { accessToken, refreshToken } = response.data
    const updateRes = await fetch('http://localhost:3000/api/auth/update', {
      method: 'POST',
      body: JSON.stringify({ accessToken, refreshToken }),
    })
    // console.log("🚀 ~ refreshToken ~ updateRes:", updateRes)
    if (!updateRes.ok) throw new Error('Failed to update token')


    return accessToken
  }
  catch (error) {
    console.log("🚀 ~ refreshToken ~ error:", error)
    return null
  }
}