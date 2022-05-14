import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: "75vh",
      color: "white",
      fontSize: "3rem",
      textAlign: "center",
      paddingTop: "25vh",
    },
    fullScreen: {
      position: "absolute",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100vw",
      userDrag: "none",
    },
  })
);

const NotFound: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  if (location.pathname === "/bangbang") {
    return (
      <div className={classes.root}>
        <input type="hidden" value="You got me!" />
        <img
          src="https://i.giphy.com/media/gU25raLP4pUu4/giphy.webp"
          className={classes.fullScreen}
        />
      </div>
    );
  }
  return <div className={classes.root}>404. Page not found!</div>;
};

export default NotFound;
