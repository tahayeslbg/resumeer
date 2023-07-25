import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export interface User {
  emailAddress: string
  fullName: string
  password: string
  isEmailVerified: boolean
  isEmailSubscribe: boolean
  resumeCredit: number
  aiCredit: number
}

const initialState = {
  emailAddress: "",
  fullName: "",
  password: "",
  isEmailVerified: false,
  isEmailSubscribe: false,
  resumeCredit: 0,
  aiCredit: 0,
} as User

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (token: string | undefined) => {
    const userRes = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`,
      {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        cache: "force-cache",
      }
    )
    const user = await userRes.json()
    return user.data
  }
)

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    decreaseAICredit(state) {
      state.aiCredit -= 1
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.emailAddress = action.payload.emailAddress
      state.fullName = action.payload.fullName
      state.password = action.payload.password
      state.isEmailVerified = action.payload.isEmailVerified
      state.isEmailSubscribe = action.payload.isEmailSubscribe
      state.resumeCredit = action.payload.resumeCredit
      state.aiCredit = action.payload.aiCredit
    })
  },
})

export const {decreaseAICredit} = userSlice.actions
export default userSlice.reducer
