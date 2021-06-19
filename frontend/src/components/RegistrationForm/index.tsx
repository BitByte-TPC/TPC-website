import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Paper, Theme, Typography } from "@material-ui/core";
import Login from "./Login";
import Signup from "./Signup";
import GoogleButton from "../Buttons/GoogleButton";
import ResetPassword from "./ResetPassword";
import BackButton from "../Buttons/BackButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      margin: "3vh",
      fontWeight: "bold",
      fontSize: "1.4rem",
    },
    flexbox: {
      paddingLeft: "2vh",
      display: "flex",
      alignItems: "center",
    },
    main: {
      width: "30vw",
      [theme.breakpoints.down("sm")]: {
        width: "90vw",
      },
    },
    or: {
      margin: "2vh",
    },
  })
);

const RegistrationForm: React.FC = () => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const heading = ["Login", "Sign Up", "Reset Password"];
  const component = [
    <Login setPage={setPage} />,
    <Signup setPage={setPage} />,
    <ResetPassword setPage={setPage} />,
  ];

  return (
    <Paper className={classes.main}>
      <div className={classes.flexbox}>
        <BackButton />
        <Typography className={classes.title} align="center">
          {heading[page]}
        </Typography>
      </div>
      <GoogleButton />
      <Typography className={classes.or} align="center">
        OR
      </Typography>
      {component[page]}
    </Paper>
  );
};

export default RegistrationForm;
