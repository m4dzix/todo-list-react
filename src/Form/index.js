import React, {useState} from "react";
import "./style.css";

const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
  event.preventDefault();

  const contentTrimmed = newTaskContent.trim()
  if ( contentTrimmed === ""){
    return;
  }
  addNewTask( contentTrimmed);
  setNewTaskContent("");

};

return(
<form className="form" onSubmit={onFormSubmit}>
<label><input className="form__input" value={newTaskContent} name="task" type="text" onChange={(event) => setNewTaskContent(event.target.value)} required/></label>
<button className="form__button">add task</button>
</form>
);
};
export default Form;
