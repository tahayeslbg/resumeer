import { createSlice } from "@reduxjs/toolkit";

interface ResumeSteps {
    editResumeCurrentStep: number,
    createResumeCurrentStep: number
}

const initialState = {
createResumeCurrentStep: 1,
editResumeCurrentStep: 1
}as ResumeSteps

const resumeStepsSlice = createSlice({
    name: "resumeSteps",
    initialState,
    reducers: {
        resumeCreateNextStep(state) {
            state.createResumeCurrentStep += 1
        },
        resumeCreatePrevStep(state) {
            state.createResumeCurrentStep -= 1
        },
        resumeEditNextStep(state) {
            state.editResumeCurrentStep += 1
        },
        resumeEditPrevStep(state) {
            state.editResumeCurrentStep -= 1
        }
    }
})

export const {resumeCreateNextStep,resumeCreatePrevStep,resumeEditNextStep,resumeEditPrevStep} = resumeStepsSlice.actions

export default resumeStepsSlice.reducer