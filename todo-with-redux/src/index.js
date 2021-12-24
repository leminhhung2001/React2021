import React from "react";
import App from "./js/components/App";
import store from "./js/store/store";
import { Provider } from "react-redux";
import { render } from "react-dom";
import "./App.css";

render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
