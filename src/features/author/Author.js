import React from "react";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Main from "../../common/Main";
import Wrapper from "../../common/Wrapper";

function Author() {
  return (
    <Wrapper>
      <Header title="About author" />
      <Main>
        <Section body={
        <p> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>} />
      </Main>
    </Wrapper>
  );
};

export default Author;
