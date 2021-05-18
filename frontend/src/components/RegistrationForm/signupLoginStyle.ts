import { createStyles, makeStyles } from "@material-ui/core/styles";

export const useSignupLoginStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    input: {
      marginBottom: "2vh",
      width: "80%",
    },
    btn: {
      background: "var(--golden)",
      margin: "2vh",
      "&:hover": {
        background: "var(--dark-golden)",
      },
    },
    link: {
      cursor: "pointer",
    },
    footer: {
      marginBottom: "2vh",
    },
  })
);
