import React from "react";
import { Nav, StyledNavLink, Item, List } from "./styled";
import { toTasks, toAuthor } from "../../routes";
const Navigation = () => (
  <Nav>
    <List>
      <Item>
        <StyledNavLink activeClassName="active" to={toTasks()}>
          Tasks List
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink activeClassName="active" to={toAuthor()}>
          Author
        </StyledNavLink>
      </Item>
    </List>
  </Nav>
);

export default Navigation;
