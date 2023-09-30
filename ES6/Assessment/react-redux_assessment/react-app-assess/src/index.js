import React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import Application from "./application/app";
import store from "./state/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
      <Application/>
  </Provider>
);