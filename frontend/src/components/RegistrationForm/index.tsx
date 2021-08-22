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
    main: {
      width: "30vw",
      background: "#1c1c1c",
      [theme.breakpoints.down("sm")]: {
        width: "90vw",
      },
      color: "#ededed",
    },
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
    or: {
      margin: "2vh",
    },
    icon: {
      color: "#10ABC2",
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
        <BackButton className={classes.icon} />
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
