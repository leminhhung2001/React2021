import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { Switch, Route } from "react-router-dom";

import Container from "./Container";
const Main = () => {
  return (
    <>
      <Switch>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/main'>
          <Container />
        </Route>
        <Route path='*'>
          <Login />
        </Route>
      </Switch>
    </>
  );
};
export default Main;
