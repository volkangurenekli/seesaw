import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import TakeAction from "./pages/TakeAction";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/takeaction" component={TakeAction} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default App;
