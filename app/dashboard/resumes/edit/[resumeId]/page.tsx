import React from "react"
import { cookies } from "next/headers"
import { fetchResume } from "@/redux/features/resume"
import { fetchUser } from "@/redux/features/user"
import { Providers } from "@/redux/provider"
import { store } from "@/redux/store"

import EditOrCreateHeader from "@/components/headers/edit-or-create-header"
import ResumeSteps from "@/components/resume-steps"

const EditResumePage = async ({ params }: { params: { resumeId: string } }) => {
  const token = cookies().get("auth")
  const { resumeId } = params
  await store.dispatch(fetchUser(token?.value))
  await store.dispatch(fetchResume({ id: resumeId, token: token?.value }))
  const resume = store.getState().resume
  const me = store.getState().user
  return (
    <Providers
      preloadedState={{
        resume: resume,
        user: me,
      }}
    >
      <EditOrCreateHeader />
      <ResumeSteps />
    </Providers>
  )
}

export default EditResumePage
