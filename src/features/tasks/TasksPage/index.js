import React from "react";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import TasksButton from "./ExampleTasksButton";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Main from "../../../common/Main";
import Wrapper from "../../../common/Wrapper";
import Subheader from "../../../common/Subheader";
import Search from "./Search";
function TasksPage() {


  return (
    <Wrapper>
      <Header title="To do list" />
      <Main>
        <TasksButton />
        <Form />
        <Search />
        <Buttons />
        <Section title={<Subheader title="task list" />} body={<TasksList />} />
      </Main>
    </Wrapper>
  );
}

export default TasksPage;
