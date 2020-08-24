import { useState, useEffect, } from "react";

export const useTasks = () => {
  
    const getTasks = ()=> {
      const tasksSavedInLocalStorage = localStorage.getItem("tasks");
      return tasksSavedInLocalStorage ? 
      JSON.parse(tasksSavedInLocalStorage) : [] ;
    };
  
    const [tasks, setTasks] = useState(getTasks);
  
    useEffect(()=>{ 
      localStorage.setItem ("tasks", JSON.stringify(tasks))
    },[tasks]);
  
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
  };
  
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
  
return {
   tasks,
   removeTask,
   toggleDoneTask,
   allTasksDone,
   addNewTask} ; 
};
