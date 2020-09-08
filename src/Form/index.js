import React, { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const contentTrimmed = newTaskContent.trim();
    if (contentTrimmed === "") {
      return;
    }
    addNewTask(contentTrimmed);
    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <label>
        <Input
          ref={inputRef}
          value={newTaskContent}
          name="task"
          type="text"
          onChange={(event) => setNewTaskContent(event.target.value)}
          required
        />
      </label>
      <Button>add task</Button>
    </StyledForm>
  );
};
export default Form;
