import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import Theme from "./theme/theme";

ReactDOM.render(
  <MuiThemeProvider theme={Theme}>
    <BrowserRouter
      basename={
        window.location.hostname === "iiitdmj.ac.in" ||
        window.location.hostname === "www.iiitdmj.ac.in"
          ? "/webix.iiitdmj.ac.in"
          : ""
      }
    >
      <App />
    </BrowserRouter>
  </MuiThemeProvider>,
  document.getElementById("root")
);
