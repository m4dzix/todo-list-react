import React from "react";
import "./style.css";

const Section = ({ title, body }) => (
  <section className="section">
    {title}
    {body}
  </section>
);

export default Section;