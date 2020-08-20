import React, {useState, useEffect} from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Main from "./Main";
import Wrapper from "./Wrapper";
import Subheader from "./Subheader";

const getTasks = ()=> {
  const tasksSavedInLocalStorage = localStorage.getItem("tasks");
  return tasksSavedInLocalStorage ? 
  JSON.parse(tasksSavedInLocalStorage) : [] ;
};


function App() {
  
  const [hideDoneTasks, setHideDoneTasks]=useState(false);
  const [tasks, setTasks] = useState(getTasks);

  useEffect(()=>{ 
    localStorage.setItem ("tasks", JSON.stringify(tasks))
  },[tasks]);


  const toggleHideDoneTask = () => {
    setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
  };
  const removeTask = (id) => {setTasks(tasks =>
     tasks.filter(task => task.id !== id));
  };
  const toggleDoneTask = (id) => {
    setTasks(tasks => tasks.map(task => {
    if (task.id === id){
      return{...task, done: !task.done}
    }
    return task;
  }));
}
const allTasksDone = () => {
  setTasks(
    tasks => tasks.map((task)=>({...task, done:true}))
  );
};

const addNewTask = (newTaskContent, tasks)=>{
  setTasks(tasks => [...tasks,
  {content: newTaskContent,
    done: false,
    id: tasks.length? tasks[tasks.length-1].id + 1 : 1
  },
])

};




  return (
  <Wrapper>
       <Header title="To do list"/> 
    <Main>
      <Form tasks={tasks} addNewTask={addNewTask} />
      <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks}toggleHideDoneTasks={toggleHideDoneTask}  allTasksDone={allTasksDone}  />
      <Section title={<Subheader title="task list" />} body={<Tasks removeTask={removeTask} toggleDoneTask={toggleDoneTask} tasks={tasks} hideDoneTasks={hideDoneTasks} />} />
    </Main>
  </Wrapper>
  );
};

export default App;
