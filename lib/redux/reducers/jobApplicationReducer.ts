import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

// Define the job application data type
export interface JobApplicationData {
  jobTitle: string
  jobId: string
  company: string
  name: string
  email: string
  phone: string
  coverLetter?: string
  resumeFileName?: string
}

// Define the state type
interface JobApplicationState {
  loading: boolean
  success: boolean
  error: string | null
}

// Initial state
const initialState: JobApplicationState = {
  loading: false,
  success: false,
  error: null,
}

// Create the slice
const jobApplicationSlice = createSlice({
  name: "jobApplication",
  initialState,
  reducers: {
    submitApplicationRequest: (state, action: PayloadAction<JobApplicationData>) => {
      state.loading = true
      state.success = false
      state.error = null
    },
    submitApplicationSuccess: (state) => {
      state.loading = false
      state.success = true
    },
    submitApplicationFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    resetApplicationForm: (state) => {
      state.loading = false
      state.success = false
      state.error = null
    },
  },
})

// Export actions and reducer
export const { submitApplicationRequest, submitApplicationSuccess, submitApplicationFailure, resetApplicationForm } =
  jobApplicationSlice.actions
export default jobApplicationSlice.reducer
