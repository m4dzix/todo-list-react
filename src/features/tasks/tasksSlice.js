import { createSlice } from "@reduxjs/toolkit";
import { getTasksfromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksfromLocalStorage(),
    hideDoneTasks: false,
    loading: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDoneTasks: (state) => {
      state.hideDoneTasks = !state.hideDoneTasks;
    },
    toggleTasksDone: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      state.tasks[index].done = !state.tasks[index].done;
    },
    removeTasks: ({ tasks }, action) => {
      const index = tasks.findIndex((task) => task.id === action.payload);
      tasks.splice(index, 1);
    },
    allTasksDone: (state) => {
      state.tasks.forEach((task) => (task.done = true));
    },
    removeAllTasks: (state) => {
      state.tasks = [];
    },
    fetchExampleTasks: () => {},
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
    loadingExampleTasks: (state, { payload }) => {
      state.loading = payload;
    },
  },
});

export const {
  addTask,
  toggleHideDoneTasks,
  toggleTasksDone,
  removeTasks,
  allTasksDone,
  removeAllTasks,
  fetchExampleTasks,
  setTasks,
  loadingExampleTasks,
} = tasksSlice.actions;
export const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDoneTasks;
export const selectAreTasksUndone = (state) => {
  selectTasks(state).every(({ done }) => !done);
};
export const selectIsEveryTaskDone = (state) =>
  selectTasks(state).every(({ done }) => done);
export const selectAreTasksEmpty = (state) => selectTasks(state).length === 0;
export const selectLoadingExampleTasks = (state) => state.tasks.loading;
export const getTaskById = (state, taskId) =>
  selectTasks(state).find(({ id }) => id === taskId);
export const selectTasksByQuery = (state, query) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }
  return tasks.filter(({ content }) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default tasksSlice.reducer;
