import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { getToken } from "src/store/tokenStore";
import { Redirect } from "react-router";

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

const Meeting: React.FC = () => {
  const classes = useStyles();
  const token = getToken();
  if (!!token) {
    return <div className={classes.root}>SEcure MeEtiNgs</div>;
  } else {
    return <Redirect to="/login" />;
  }
};

export default Meeting;
