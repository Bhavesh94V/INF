import { call, put, takeLatest } from "redux-saga/effects"
import {
  submitApplicationRequest,
  submitApplicationSuccess,
  submitApplicationFailure,
  type JobApplicationData,
} from "../reducers/jobApplicationReducer"
import type { PayloadAction } from "@reduxjs/toolkit"

// API call function
const submitJobApplicationAPI = async (formData: JobApplicationData) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/apply`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })

  if (!response.ok) {
    throw new Error("Failed to submit application")
  }

  return await response.json()
}

// Worker saga
function* handleSubmitApplication(action: PayloadAction<JobApplicationData>) {
  try {
    yield call(submitJobApplicationAPI, action.payload)
    yield put(submitApplicationSuccess())
  } catch (error) {
    yield put(submitApplicationFailure(error instanceof Error ? error.message : "An unknown error occurred"))
  }
}

// Watcher saga
export default function* jobApplicationSaga() {
  yield takeLatest(submitApplicationRequest.type, handleSubmitApplication)
}
