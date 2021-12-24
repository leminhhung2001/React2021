import { takeEvery, put, call } from "redux-saga/effects";
import { DATA_REQUESTED } from "../constants/action-types";
import { DATA_LOADED } from "../constants/action-types";
import { API_ERRORED } from "../constants/action-types";

export default function* watcherSaga() {
  yield takeEvery(DATA_REQUESTED, workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: DATA_LOADED, payload });
  } catch (error) {
    yield put({ type: API_ERRORED, payload: error });
  }
}

function getData() {
  try {
    return fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then((response) => response.json());
  } catch (error) {
    console.log(error.message);
  }
}
