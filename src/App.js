import React from "react";
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author"
export default () => (
  <BrowserRouter>
  <nav>
    <ul>
      <li>
        <Link to="/tasks">Tasks List</Link>
       </li>
       <li>
        <Link to="/author">Author</Link>
       </li>
    </ul>
    <Switch>
      <Route path= "/tasks"><Tasks/></Route>
      <Route path="/author"><Author/></Route>
    </Switch>
   
</nav>
  </BrowserRouter>
)