import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Paper, Theme, Typography } from "@material-ui/core";
import Login from "./Login";
import Signup from "./Signup";
import GoogleButton from "../Buttons/GoogleButton";
import ResetPassword from "./ResetPassword";

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
  // const [login, setLogin] = useState(true);
  const [page, setPage] = useState(0);
  const heading = ["Login", "Sign Up", "Reset Password"];
  const component = [
    <Login setPage={setPage} />,
    <Signup setPage={setPage} />,
    <ResetPassword setPage={setPage} />,
  ];

  return (
    <Paper className={classes.main}>
      <Typography className={classes.title} align="center">
        {/* {login ? "Login" : "Sign Up"} */}
        {heading[page]}
      </Typography>
      <GoogleButton />
      <Typography className={classes.or} align="center">
        OR
      </Typography>
      {/* {login ? <Login setLogin={setLogin} /> : <Signup setLogin={setLogin} />} */}
      {component[page]}
    </Paper>
  );
};

export default RegistrationForm;
