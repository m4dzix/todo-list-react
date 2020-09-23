import React from "react";
import Section from "..//../../common/Section";
import Main from "../../../common/Main";
import Wrapper from "../../../common/Wrapper";
import Header from "../../../common/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import Subheader from "../../../common/Subheader";
import { Description } from "../../description";
import { newDate } from "../getDate";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));
  const completeTaskDate = newDate();
  return (
    <Wrapper>
      <Header title="task details" />
      <Main>
        <Section
          title={
            <Subheader title={task ? task.content : "Task not found 🙁"} />
          }
          body={
            <Description>
              <strong>Completed: </strong>
              {task.done ? "Yes 👍" : "No 😟"} <br></br>
              <strong>Task added on: </strong>
              {task ? task.date : "nie ma zadania"} <br></br>
              <strong>Task completed on: </strong>
              {task.done
                ? completeTaskDate
                : "This task has not been completed yet"}{" "}
              <br></br>
            </Description>
          }
        />
      </Main>
    </Wrapper>
  );
}

export default TaskPage;
