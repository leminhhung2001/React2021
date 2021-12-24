import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/store";
import App from "./js/components/App";

render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
