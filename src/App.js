import React, {useState} from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";
import Wrapper from "./Wrapper";
import Subheader from "./Subheader";


function App() {
  const [hideDoneTasks, setHideDoneTasks]=useState(false);
  const [tasks, setTasks] = useState([
    {id: 1, content: "Find a job as a developer", done: false},
    {id: 2, content: "Eat dinner", done:true},
  ]);
 
  const toggleHideDoneTask = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  };
  const removeTask = (id) => {setTasks(tasks => tasks.filter(task => task.id !== id));
  };
  const toggleDoneTask = (id) => {
    setTasks(tasks => tasks.map(task => {
    if (task.id === id){
      return{...task, done: !task.done}
    }
    return task;
  }));
}


  return (
  <Wrapper>
       <Header title="To do list"/> 
    <Main>
      <Form />
      <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} toggleHideDoneTasks={toggleHideDoneTask} />
      <Section title={<Subheader title="task list" />} body={<Tasks removeTask={removeTask} toggleDoneTask={toggleDoneTask} tasks={tasks} hideDoneTasks={hideDoneTasks} />} />
    </Main>
  </Wrapper>
  );
};

export default App;
