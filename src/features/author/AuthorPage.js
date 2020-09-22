import React from "react";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Main from "../../common/Main";
import Wrapper from "../../common/Wrapper";
import Subheader from "../../common/Subheader";
import { Description } from "../description";

function Author() {
  return (
    <Wrapper>
      <Header title="About author" />
      <Main>
        <Section
          title={<Subheader title="Magdalena Checinski" />}
          body={
            <Description>
              <>
                Hi! 😃 <br></br>I am a junior frontend developer. I have been
                learning programming since 2020. I started with the{" "}
                <strong>"Become a Frontend Developer"</strong> course at Youcode
                Academy. This To Do List is one of the applications made for
                this course.
              </>
            </Description>
          }
        />
      </Main>
    </Wrapper>
  );
}
export default Author;
