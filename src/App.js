import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import Navigation from "./common/Navigation";

export default () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route path="/tasks/:id">
        <TaskPage />
      </Route>
      <Route path="/tasks">
        <TasksPage />
      </Route>
      <Route path="/author">
        <AuthorPage />
      </Route>
      <Route path="/">
        <Redirect to="/tasks"></Redirect>
      </Route>
    </Switch>
  </HashRouter>
);
