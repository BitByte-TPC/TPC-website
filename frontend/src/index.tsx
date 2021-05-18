import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import Theme from "./theme/theme";
import { SWRConfig } from "swr";

const fetcher = (resource: RequestInfo, init: RequestInit | undefined) =>
  fetch(resource, init).then((res) => res.json());

ReactDOM.render(
  <SWRConfig value={{ fetcher: fetcher }}>
    <MuiThemeProvider theme={Theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </MuiThemeProvider>
  </SWRConfig>,
  document.getElementById("root")
);
