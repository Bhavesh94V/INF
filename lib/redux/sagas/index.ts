import { all, fork } from "redux-saga/effects"
import contactSaga from "./contactSaga"
import jobApplicationSaga from "./jobApplicationSaga"

export default function* rootSaga() {
  yield all([fork(contactSaga), fork(jobApplicationSaga)])
}
