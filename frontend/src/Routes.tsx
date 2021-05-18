import "./App.css";
import React from "react";
import HomePage from "./pages/homePage";
import Domains from "./pages/Domains";
import { Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
import Registration from "./pages/Registration";
import Loading from "./pages/Loading";
import Meeting from "./pages/Meeting";

const Routes: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/domains" component={Domains} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/registration" component={Registration} />
        <Route path="/auth/google" component={Loading} />
        <Route exact path="/events" component={Meeting} />
      </Switch>
    </div>
  );
};

export default Routes;
