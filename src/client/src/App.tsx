import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";

import MainPage from "./Pages/main";
import DashboardPage from "./Pages/dashboard";

const App: React.FC = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
