import React, {useState} from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";
import Wrapper from "./Wrapper";
import Subheader from "./Subheader";

const tasks = [
  {id: 1, content: "Find a job as a developer", done: false},
  {id: 2, content: "Eat dinner", done:true},
];


function App() {
  const [hideDoneTasks, setHideDoneTasks]=useState(false);

  const toggleHideDoneTask = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  };

  return (
  <Wrapper>
       <Header title="To do list"/> 
    <Main>
      <Form />
      <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} toggleHideDoneTasks={toggleHideDoneTask} />
      <Section title={<Subheader title="task list" />} body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />} />
    </Main>
  </Wrapper>
  );
};

export default App;
