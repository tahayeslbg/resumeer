import React from "react"

import EditOrCreateHeader from "@/components/headers/edit-or-create-header"
import ResumeSteps from "@/components/resume-steps"

const CreateResumePage = async () => {
  return (
    <>
      <EditOrCreateHeader />
      <ResumeSteps />
    </>
  )
}

export default CreateResumePage
