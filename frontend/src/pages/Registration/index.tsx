import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import RegistrationForm from "../../components/RegistrationForm";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

const Registration: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <RegistrationForm />
    </div>
  );
};

export default Registration;
