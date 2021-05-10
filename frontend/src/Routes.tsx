import "./App.css";
import React from "react";
import HomePage from "./components/homePage";
import Nav from "./components/nav";
import { Route, Switch } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
};

export default Routes;
