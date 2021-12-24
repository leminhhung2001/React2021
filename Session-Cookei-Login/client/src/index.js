import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
