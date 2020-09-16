import { takeEvery, delay, call, put } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, loadingExampleTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

export function* fetchExampleTasksHandler() {
  try {
    yield put(loadingExampleTasks(true));
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(setTasks(exampleTasks));
    yield put(loadingExampleTasks(false));
  } catch (error) {
    yield call(console.error, error);
    yield put(loadingExampleTasks(false));
  }
}

export function* showFetchExampleTasks() {
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}
