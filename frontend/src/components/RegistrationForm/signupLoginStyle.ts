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
      background: "transparent",
    },
    cssLabel: {
      color: "#ededed",
    },

    cssOutlinedInput: {
      "&$cssFocused $notchedOutline": {
        borderColor: `#ededed !important`,
      },
      color: "#ededed",
    },

    cssFocused: {
      color: "#ededed",
    },

    notchedOutline: {
      borderWidth: "1px",
      borderColor: "#ededed !important",
    },
    btn: {
      background: "var(--my-cyan)",
      margin: "2vh",
      "&:hover": {
        background: "var(--my-dcyan)",
      },
    },
    link: {
      cursor: "pointer",
      color: "#00a6ed",
    },
    footer: {
      marginBottom: "2vh",
    },
  })
);
