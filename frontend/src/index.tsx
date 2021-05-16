import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import Theme from "./theme/theme";

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById("root")
);
