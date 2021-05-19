import { createMuiTheme } from "@material-ui/core";

const Theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1160,
      xl: 1920,
    },
  },
});

export default Theme;
