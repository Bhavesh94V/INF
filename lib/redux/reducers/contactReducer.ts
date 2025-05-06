import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

// Define the contact form data type
export interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

// Define the state type
interface ContactState {
  loading: boolean
  success: boolean
  error: string | null
}

// Initial state
const initialState: ContactState = {
  loading: false,
  success: false,
  error: null,
}

// Create the slice
const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    submitContactRequest: (state, action: PayloadAction<ContactFormData>) => {
      state.loading = true
      state.success = false
      state.error = null
    },
    submitContactSuccess: (state) => {
      state.loading = false
      state.success = true
    },
    submitContactFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    resetContactForm: (state) => {
      state.loading = false
      state.success = false
      state.error = null
    },
  },
})

// Export actions and reducer
export const { submitContactRequest, submitContactSuccess, submitContactFailure, resetContactForm } =
  contactSlice.actions
export default contactSlice.reducer
