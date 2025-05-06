import { call, put, takeLatest } from "redux-saga/effects"
import {
  submitContactRequest,
  submitContactSuccess,
  submitContactFailure,
  type ContactFormData,
} from "../reducers/contactReducer"
import type { PayloadAction } from "@reduxjs/toolkit"

// API call function
const submitContactFormAPI = async (formData: ContactFormData) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })

  if (!response.ok) {
    throw new Error("Failed to send message")
  }

  return await response.json()
}

// Worker saga
function* handleSubmitContact(action: PayloadAction<ContactFormData>) {
  try {
    yield call(submitContactFormAPI, action.payload)
    yield put(submitContactSuccess())
  } catch (error) {
    yield put(submitContactFailure(error instanceof Error ? error.message : "An unknown error occurred"))
  }
}

// Watcher saga
export default function* contactSaga() {
  yield takeLatest(submitContactRequest.type, handleSubmitContact)
}
