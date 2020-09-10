import React, { useState } from "react";
import { useTasks } from "../../useTasks";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Main from "../../common/Main";
import Wrapper from "../../common/Wrapper";
import Subheader from "../../common/Subheader";

function Tasks() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);

  const toggleHideDoneTask = () => {
    setHideDoneTasks((hideDoneTasks) => !hideDoneTasks);
  };

  const {
    tasks,
    removeTask,
    toggleDoneTask,
    allTasksDone,
    addNewTask,
  } = useTasks();

  return (
    <Wrapper>
      <Header title="To do list" />
      <Main>
        <Form tasks={tasks} addNewTask={addNewTask} />
        <Buttons
          tasks={tasks}
          hideDoneTasks={hideDoneTasks}
          toggleHideDoneTasks={toggleHideDoneTask}
          allTasksDone={allTasksDone}
        />
        <Section
          title={<Subheader title="task list" />}
          body={
            <TasksList
              removeTask={removeTask}
              toggleDoneTask={toggleDoneTask}
              tasks={tasks}
              hideDoneTasks={hideDoneTasks}
            />
          }
        />
      </Main>
    </Wrapper>
  );
}

export default Tasks;
