import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper } from "./styled";
import { Button } from "../styledButton";
import { fetchExampleTasks, selectLoadingExampleTasks } from "../../tasksSlice";

const TasksButton = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingExampleTasks);
  return (
    <Wrapper>
      <Button
        onClick={() => {
          dispatch(fetchExampleTasks());
        }}
      >
        {isLoading ? "Loading..." : "Add example tasks"}
      </Button>
    </Wrapper>
  );
};
export default TasksButton;
