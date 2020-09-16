import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
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
  fetchExampleTasks,
  setTasks,
  loadingExampleTasks,
} = tasksSlice.actions;
export const selectTasks = (state) => state.tasks;
export const selectLoadingExampleTasks = (state) => state.tasks.loading;
export default tasksSlice.reducer;
