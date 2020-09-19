import React, { useState, useRef } from "react";
import { StyledForm, Input, Button } from "../input";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const contentTrimmed = newTaskContent.trim();
    if (contentTrimmed === "") {
      return;
    }
    dispatch(
      addTask({
        content: contentTrimmed,
        done: false,
        id: nanoid(),
      })
    );

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
