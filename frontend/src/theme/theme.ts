import { createMuiTheme } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

const Theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1180,
      xl: 1920,
    },
  },
  palette: {
    primary: blue,
  },
});

export default Theme;
