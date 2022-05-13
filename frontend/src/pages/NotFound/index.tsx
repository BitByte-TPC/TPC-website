import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "75vh",
      color: "white",
      fontSize: "3rem",
      textAlign: "center",
      paddingTop: "25vh",
    },
  })
);

const NotFound: React.FC = () => {
  const classes = useStyles();
  return <div className={classes.root}>404. Page not found!</div>;
};

export default NotFound;
