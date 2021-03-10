import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import MainPage from "./Pages/main";
import DashboardPage from "./Pages/dashboard";

const App: React.FC = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
      </Switch>
    </Router>
  );
};

export default App;
