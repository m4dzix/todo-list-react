import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
  <section className={`"section section__toggleButtons ${tasks.length ? "":"section__button--hidden"}`}>
    <button className="section__button" disabled = {tasks.every(({done}) => !done)}>
      {hideDoneTasks ? "Show" : "Hide"} completed tasks
    </button>
    <button className="section__button" disabled={tasks.every(({done}) => done)}>
        Mark all tasks as completed
    </button>
  </section>
);

export default Buttons;