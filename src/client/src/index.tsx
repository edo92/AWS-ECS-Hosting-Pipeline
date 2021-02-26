import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import store from "./Store";

export default ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
