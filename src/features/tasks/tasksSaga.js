import {
  takeLatest,
  delay,
  call,
  put,
  select,
  takeEvery
} from "redux-saga/effects";
import {
  fetchExampleTasks,
  setTasks,
  selectTasks,
  loadingExampleTasks
} from "./tasksSlice";
import {
  getExampleTasks
} from "./getExampleTasks";
import {
  saveTasksInLocalStorage
} from "./tasksLocalStorage";

export function* fetchExampleTasksHandler() {
  try {
    yield put(loadingExampleTasks(true));
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
    yield put(loadingExampleTasks(false));
  } catch (error) {
    yield call(console.error, error);
    yield call(alert, "Oops, something's wrong, sorry ");
    yield put(loadingExampleTasks(false));
  }
}


  function* localStorageTasksHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
  }

export function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", localStorageTasksHandler)
}