import { combineReducers } from "@reduxjs/toolkit"
import contactReducer from "./contactReducer"
import jobApplicationReducer from "./jobApplicationReducer"

const rootReducer = combineReducers({
  contact: contactReducer,
  jobApplication: jobApplicationReducer,
})

export default rootReducer
