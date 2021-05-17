import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Button, Paper, Typography } from "@material-ui/core";
import Login from "./Login";
import Signup from "./Signup";

const useStyles = makeStyles(() =>
  createStyles({
    title: {
      margin: "4vh",
      fontWeight: "bold",
      fontSize: "1.4rem",
    },
    main: {
      height: "75vh",
      width: "40vw",
    },
  })
);

const RegistrationForm: React.FC = () => {
  const classes = useStyles();
  const [login, setLogin] = useState(false);

  return (
    <Paper className={classes.main}>
      <Typography className={classes.title} align="center">
        {login ? "Login" : "Sign Up"}
      </Typography>
      {login ? <Login /> : <Signup />}
      <Button onClick={() => setLogin(!login)}>click</Button>
    </Paper>
  );
};

export default RegistrationForm;
