import React, { useState } from "react";
import { useTasks } from "./useTasks";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";
import Wrapper from "./Wrapper";
import Subheader from "./Subheader";

function App() {
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
            <Tasks
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

export default App;
