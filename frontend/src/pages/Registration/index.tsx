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
    title: {
      margin: "4vh",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.4rem",
    },
    main: {
      height: "70vh",
      width: "50vw",
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
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
