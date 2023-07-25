"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import {
  forgotPasswordStep1Validation,
  forgotPasswordStep2Validation,
  signInValidation,
  signUpValidation,
} from "@/validations/authValidation"
import {
  changeEmailValidation,
  changeFullnameValidation,
  changeNotificationValidation,
  changePasswordValidation,
} from "@/validations/userValidation"
import { z } from "zod"

export async function signInAction(formData: z.infer<typeof signInValidation>) {
  const userBody = {
    emailAddress: formData.emailAddress,
    password: formData.password,
  }

  const userRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userBody),
    }
  )
  const user = await userRes.json()

  if (user.success === true) {
    if (formData.rememberMe) {
      cookies().set("auth", user.data.token, {
        secure: true,
        sameSite: "strict",
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        expires: new Date(Date.now() + 60 * 60 * 24 * 7 * 1000),
        priority: "high",
        path: "/",
      })
    } else {
      cookies().set("auth", user.data.token, {
        secure: true,
        sameSite: "strict",
        httpOnly: true,
        priority: "high",
        maxAge: 60 * 60 * 24,
        expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
        path: "/",
      })
    }
  }

  return user
}

export async function signUpAction(formData: z.infer<typeof signUpValidation>) {
  const userRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }
  )
  const user = await userRes.json()

  if (user.success === true) {
    cookies().set("auth", user.data.token, {
      secure: true,
      sameSite: "strict",
      httpOnly: true,
      priority: "high",
      maxAge: 60 * 60 * 24,
      expires: new Date(Date.now() + 60 * 60 * 24 * 1000),
      path: "/",
    })
  }

  return user
}

export async function logoutAction() {
  const token = cookies().get("auth")?.value as string
  const userRes = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
  const user = await userRes.json()
  if (user.success === true) {
    cookies().delete("auth")
  }
  return user
}

export async function forgotPasswordAction(
  formData: z.infer<typeof forgotPasswordStep1Validation>
) {
  const confirmationCodeRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/forgot-password`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }
  )
  const confirmationCode = await confirmationCodeRes.json()
  return confirmationCode
}

export async function resetPasswordAction(
  formData: z.infer<typeof forgotPasswordStep2Validation>
) {
  const resetPasswordRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/auth/reset-password`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }
  )
  const resetPassword = await resetPasswordRes.json()
  return resetPassword
}

export async function changeFullNameAction(
  formData: z.infer<typeof changeFullnameValidation>
) {
  const token = cookies().get("auth")
  const changeFullNameRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me/change-fullname`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token?.value,
      },
      body: JSON.stringify(formData),
    }
  )
  const changeFullName = await changeFullNameRes.json()
  if (changeFullName.success) {
    revalidatePath("/dashboard/account")
    return changeFullName
  }
  return changeFullName
}

export async function changeEmailAddressAction(
  formData: z.infer<typeof changeEmailValidation>
) {
  const token = cookies().get("auth")
  const changeEmailAddressRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me/change-emailaddress`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token?.value,
      },
      body: JSON.stringify(formData),
    }
  )
  const changeEmailAddress = await changeEmailAddressRes.json()
  if (changeEmailAddress.success) {
    revalidatePath("/dashboard/account")
    return changeEmailAddress
  }
  return changeEmailAddress
}

export async function changePasswordAction(
  formData: z.infer<typeof changePasswordValidation>
) {
  const token = cookies().get("auth")
  const changePasswordRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me/change-password`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token?.value,
      },
      body: JSON.stringify(formData),
    }
  )
  const changePassword = await changePasswordRes.json()
  if (changePassword.success) {
    revalidatePath("/dashboard/account")
    return changePassword
  }
  return changePassword
}

export async function changeNotificationAction(
  formData: z.infer<typeof changeNotificationValidation>
) {
  const token = cookies().get("auth")
  const changeNotificationRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me/change-notification`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token?.value,
      },
      body: JSON.stringify(formData),
    }
  )
  const changeNotification = await changeNotificationRes.json()
  if (changeNotification.success) {
    revalidatePath("/dashboard/account/notification")
    return changeNotification
  }
  return changeNotification
}

export async function createResumeAction(values: any) {
  const token = cookies().get("auth")
  const createResumeRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me/resumes`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token?.value,
      },
      body: JSON.stringify(values),
    }
  )
  const createResume = await createResumeRes.json()
  if (createResume.success) {
    revalidatePath("/dashboard/resumes")
    return createResume
  }
  return createResume
}

export async function updateResumeAction(values: any, resumeId: string) {
  const token = cookies().get("auth")
  const updateResumeRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me/resumes/${resumeId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token?.value,
      },
      body: JSON.stringify(values),
    }
  )
  const updateResume = await updateResumeRes.json()
  if (updateResume.success) {
    revalidatePath("/dashboard/resumes")
    return updateResume
  }
  return updateResume
}

export async function deleteResumeAction(resumeId: string) {
  const token = cookies().get("auth")
  const deleteResumeRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me/resumes/${resumeId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token?.value,
      },
    }
  )
  const deleteResume = await deleteResumeRes.json()
  if (deleteResume.success) {
    revalidatePath("/dashboard/resumes")
    return deleteResume
  }
  return deleteResume
}

export async function generateDescriptionAction(
  values: {
    prompt: string
    format: string
  },
  pathname: string
) {
  const token = cookies().get("auth")
  const generateDescriptionRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/ai/generate-description`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token?.value,
      },
      body: JSON.stringify(values),
    }
  )
  const generateDescription = await generateDescriptionRes.json()

  return generateDescription
}
