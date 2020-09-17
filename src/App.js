import React from "react";
import {
  HashRouter,
  Link,
  Switch,
  Route, Redirect
} from "react-router-dom";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author"
export default () => (
  <HashRouter>
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
      <Route pat ="/"><Redirect to = "/tasks"></Redirect> </Route>
    </Switch>
</nav>
  </HashRouter>
)