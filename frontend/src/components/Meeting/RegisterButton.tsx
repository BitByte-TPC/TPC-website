import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "15vh",
      display: "flex",
      justifyContent: "center",
      background: "none",
      marginTop: "4vh",
      [theme.breakpoints.down("xs")]: {
        marginTop: "0",
        marginRight: "2vh",
      },
    },
  })
);

const RegisterButton: React.FC = () => {
  const classes = useStyles();

  return (
    <Button variant="outlined" className={classes.root}>
      Register
    </Button>
  );
};

export default RegisterButton;
