import React from "react";
import "./style.css";

const Form = () => (
  <form className="form">
    <label><input className="form__input" name="task" type="text" required/></label>
    <button className="form__button">add task</button>
  </form>
);

export default Form;
