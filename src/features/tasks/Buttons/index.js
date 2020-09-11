import React from "react";
import { ToggleButtons, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDoneTasks, allTasksDone } from "../tasksSlice";

const Buttons = () => {
  const { tasks, hideDoneTasks } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <ToggleButtons hidden={!tasks.length}>
      <Button
        onClick={() => {
          dispatch(toggleHideDoneTasks());
        }}
        disabled={tasks.every(({ done }) => !done)}
      >
        {hideDoneTasks ? "Show" : "Hide"} completed tasks
      </Button>
      <Button
        onClick={() => {
          dispatch(allTasksDone(tasks.done));
        }}
        disabled={tasks.every(({ done }) => done)}
      >
        Mark all tasks as completed
      </Button>
    </ToggleButtons>
  );
};

export default Buttons;
