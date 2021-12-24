import { put, takeEvery, all } from "redux-saga/effects";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

function* helloSaga() {
  console.log("Hello Sagas!");
}

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}
function* watchIncrementAsync() {
  yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync()]);
}
