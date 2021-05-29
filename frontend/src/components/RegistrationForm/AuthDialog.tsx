import React, { useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import GoogleButton from "../Buttons/GoogleButton";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import Signup from "./Signup";
import { DialogContent } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      margin: "4vh",
      fontWeight: "bold",
      fontSize: "1.4rem",
    },
    main: {
      width: "30vw",
      [theme.breakpoints.down("sm")]: {
        width: "70vw",
      },
    },
    or: {
      margin: "2vh",
    },
  })
);

interface AuthDialogProps {
  isOpen: boolean;
}
const AuthDialog: React.FC<AuthDialogProps> = ({ isOpen }) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const heading = ["Login", "Sign Up", "Reset Password"];
  const component = [
    <Login setPage={setPage} />,
    <Signup setPage={setPage} />,
    <ResetPassword setPage={setPage} />,
  ];

  return (
    <Dialog
      aria-labelledby="customized-dialog-title"
      open={isOpen}
      maxWidth={false}
    >
      <DialogContent className={classes.main}>
        <Typography className={classes.title} align="center">
          {heading[page]}
        </Typography>
        <GoogleButton />
        <Typography className={classes.or} align="center">
          OR
        </Typography>
        {component[page]}
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
