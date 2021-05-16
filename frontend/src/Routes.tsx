import "./App.css";
import React from "react";
import HomePage from "./pages/homePage";
import Domains from "./pages/Domains";
import { Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";

const Routes: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/domains" component={Domains} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </div>
  );
};

export default Routes;
