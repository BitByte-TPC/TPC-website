import "./App.css";
import React from "react";
import HomePage from "./pages/homePage";
import Domains from "./pages/Domains";
import { Route, Switch } from "react-router-dom";
import Projects from "./pages/Projects";
// import Registration from "./pages/Registration";
// import GoogleRedirect from "./pages/GoogleRedirect";
// import Meeting from "./pages/Meeting";
import { updateAccessToken } from "./utils/updateAccessToken";
import useTokenStore from "./store/tokenStore";
import NotFound from "./pages/NotFound";

const REFRESH_TIME_MS = 50 * 60 * 1000;
const Routes: React.FC = () => {
  const accessToken = useTokenStore((state) => state.token);
  const setToken = useTokenStore((state) => state.setToken);
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!!accessToken) {
        console.log("Refreshing token...");
        updateAccessToken(setToken);
      }
    }, REFRESH_TIME_MS);

    // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/team" component={Domains} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/" component={NotFound} />
        {/* <Route exact path="/registration" component={Registration} />
        <Route path="/auth/google" component={GoogleRedirect} />
        <Route exact path="/events" component={Meeting} /> */}
      </Switch>
    </div>
  );
};

export default Routes;
