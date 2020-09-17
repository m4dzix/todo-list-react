import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Button, Icon, Content } from "./styled";
import { selectTasksState, toggleTasksDone, removeTasks } from "../tasksSlice";

const TasksList = () => {
  const { tasks, hideDoneTasks } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDoneTasks}>
          <Button
            doneTasks
            onClick={() => {
              dispatch(toggleTasksDone(task.id));
            }}
          >
            {task.done ? <Icon className="fas fa-check"></Icon> : ""}
          </Button>
          <Content done={task.done}>{task.content}</Content>
          <Button
            removeTasks
            onClick={() => {
              dispatch(removeTasks(task.id));
            }}
          >
            <Icon className="fas fa-trash"></Icon>
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default TasksList;
