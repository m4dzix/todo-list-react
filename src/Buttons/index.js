import React from "react";
import { ToggleButtons, Button } from "./styled";

const Buttons = ({
  tasks,
  hideDoneTasks,
  toggleHideDoneTasks,
  allTasksDone,
}) => (
  <ToggleButtons hidden={!tasks.length}>
    <Button
      onClick={toggleHideDoneTasks}
      disabled={tasks.every(({ done }) => !done)}
    >
      {hideDoneTasks ? "Show" : "Hide"} completed tasks
    </Button>
    <Button onClick={allTasksDone} disabled={tasks.every(({ done }) => done)}>
      Mark all tasks as completed
    </Button>
  </ToggleButtons>
);

export default Buttons;
