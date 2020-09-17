import React from "react";
import {
  HashRouter,
  Link,
  Switch,
  Route, Redirect
} from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import AuthorPage from "./features/author/AuthorPage"
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
      <Route path= "/tasks"><TasksPage/></Route>
      <Route path="/author"><AuthorPage/></Route>
      <Route pat ="/"><Redirect to = "/tasks"></Redirect> </Route>
    </Switch>
</nav>
  </HashRouter>
)