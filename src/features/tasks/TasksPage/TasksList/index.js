import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { List, Item, Button, Icon, Content } from "./styled";
import { toggleTasksDone, removeTasks, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import {Link, useLocation} from "react-router-dom";
import searchQueryParamsName from "../searchQueryParamsName";
const TasksList = () => {

  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamsName);
  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDoneTasks = useSelector(selectHideDone);
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
          <Content done={task.done}><Link to = {`/tasks/${task.id}`}>{task.content}</Link> </Content>
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
