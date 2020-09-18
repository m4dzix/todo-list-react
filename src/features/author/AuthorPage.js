import React from "react";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Main from "../../common/Main";
import Wrapper from "../../common/Wrapper";
import Subheader from "../../common/Subheader"
import {Info} from "./styled"

function Author() {
  return (
    <Wrapper>
      <Header title="About author" />
      <Main>
        <Section
        title={<Subheader title="Magdalena Checinski" />}
       
        body={
        <Info> 
           Hi! 😃 <br></br>I am a junior frontend developer. I have been learning programming since 2020. I started with the <strong>"Become a Frontend Developer"</strong> course at Youcode Academy. This To Do List is one of the applications written for this course.
        </Info>} />
      </Main>
    </Wrapper>
  );
};
export default Author;
