import React from "react";
import { List, Item, Button, Icon, Content } from "./styled";

const Tasks = ({ tasks, hideDoneTasks, removeTask, toggleDoneTask }) => (
  <List>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDoneTasks}>
        <Button
          doneTasks
          onClick={() => {
            toggleDoneTask(task.id);
          }}
        >
          {task.done ? <Icon className="fas fa-check"></Icon> : ""}
        </Button>
        <Content done={task.done}>{task.content}</Content>
        <Button
          removeTasks
          onClick={() => {
            removeTask(task.id);
          }}
        >
          <Icon className="fas fa-trash"></Icon>
        </Button>
      </Item>
    ))}
  </List>
);

export default Tasks;
