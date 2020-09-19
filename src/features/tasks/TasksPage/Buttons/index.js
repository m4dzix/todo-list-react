import React from "react";
import { ToggleButtons } from "./styled";
import { Button } from "../styledButton";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasksState,
  toggleHideDoneTasks,
  allTasksDone,
  selectAreTasksEmpty,
  selectAreTasksUndone,
  selectIsEveryTaskDone,
} from "../../tasksSlice";

const Buttons = () => {
  const { tasks, hideDoneTasks } = useSelector(selectTasksState);
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const areTasksUndone = useSelector(selectAreTasksUndone);
  const isEveryTasksDone = useSelector(selectIsEveryTaskDone);
  const dispatch = useDispatch();
  return (
    <ToggleButtons hidden={areTasksEmpty}>
      <Button
        onClick={() => {
          dispatch(toggleHideDoneTasks());
        }}
        disabled={areTasksUndone}
      >
        {hideDoneTasks ? "Show" : "Hide"} completed tasks
      </Button>
      <Button
        onClick={() => {
          dispatch(allTasksDone(tasks.done));
        }}
        disabled={isEveryTasksDone}
      >
        Mark all tasks as completed
      </Button>
    </ToggleButtons>
  );
};

export default Buttons;
