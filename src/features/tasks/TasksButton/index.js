import React from "react";
import { useDispatch } from "react-redux";
import { Wrapper } from "./styled";
import { Button } from "../styledButton";
import { fetchExampleTasks } from "../tasksSlice";

const TasksButton = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Button
        onClick={() => {
          dispatch(fetchExampleTasks());
        }}
      >
        Add example tasks
      </Button>
    </Wrapper>
  );
};
export default TasksButton;
