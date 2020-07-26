import React, {useState} from "react";
import "./style.css";

const Form = ({addNewTask}) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
  event.preventDefault();
  addNewTask(newTaskContent.trim());
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
