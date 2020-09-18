import React from "react"
import { Nav, StyledNavLink, Item, List } from "./styled"


const Navigation = () => (  
<Nav>
  <List>
    <Item>
      <StyledNavLink activeClassName="active" to="/tasks">Tasks List</StyledNavLink>
     </Item>
     <Item>
      <StyledNavLink activeClassName="active" to="/author">Author</StyledNavLink>
     </Item>
   </List>
  </Nav>
  
);

export default Navigation;  