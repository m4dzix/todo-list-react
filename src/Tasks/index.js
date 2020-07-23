import React from "react";
import "./style.css";

const Tasks = ({ tasks,hideDoneTasks,removeTask }) => (
    <ul className = "section__taskList" > 
      {tasks.map((task) => ( 
        <li key={task.id} className={`section__taskItem ${task.done && hideDoneTasks ? "section__taskItem--hidden" : ""}`}> 
          <button className="taskItem__button taskItem__button--doneTask">
            {task.done ? <i className="fas fa-check"></i> : ''}
          </button>
          <p className = {`list__paragraph ${ task.done?"list__paragraph--done" : "" }`}>{task.content}</p> 
          <button onClick={()=>{removeTask(task.id)} } className= " taskItem__button taskItem__button--removeTask">
            <i className="fas fa-trash"></i>
          </button>
        </li>))}
    </ul>
  );

export default Tasks;