import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import Theme from "./theme/theme";

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <HashRouter>
      <App />
    </HashRouter>
  </MuiThemeProvider>,
  document.getElementById("root")
);
