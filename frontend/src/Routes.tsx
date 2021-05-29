import "./App.css";
import React from "react";
import HomePage from "./pages/homePage";
import Domains from "./pages/Domains";
import { Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
import Registration from "./pages/Registration";
import GoogleRedirect from "./pages/GoogleRedirect";
import Meeting from "./pages/Meeting";
import { updateAccessToken } from "./utils/updateAccessToken";

const Routes: React.FC = () => {
  const REFRESH_TIME_MS = 60 * 60 * 1000;
  React.useEffect(() => {
    const interval = setInterval(() => {
      console.log("Refreshing token...");
      updateAccessToken();
    }, REFRESH_TIME_MS);

    // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/domains" component={Domains} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/registration" component={Registration} />
        <Route path="/auth/google" component={GoogleRedirect} />
        <Route exact path="/events" component={Meeting} />
      </Switch>
    </div>
  );
};

export default Routes;
