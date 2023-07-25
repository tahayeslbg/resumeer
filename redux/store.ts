import { configureStore } from "@reduxjs/toolkit"

import resume from "./features/resume"
import user from "./features/user"
import resumeSteps from "./features/resume/resumeSteps"

export const createStore = (preloadedState?: any) => {
  const store = configureStore({
    reducer: {
      resume: resume,
      resumeSteps: resumeSteps,
      user: user,
    },
    devTools: process.env.NODE_ENV !== "production",
    preloadedState 
  })
  return store
}

export const store = createStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


