import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { getToken } from "src/store/tokenStore";
import { Redirect } from "react-router";
import Navbar from "../../components/Navs/Navbar";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: "100vh",
    },
  })
);

const Meeting: React.FC = () => {
  const classes = useStyles();
  const token = getToken();
  if (!!!token) {
    return <Redirect to="/registration" />;
  }
  return (
    <div className={classes.root}>
      <Navbar />
      SeCurE mEetIng
    </div>
  );
};

export default Meeting;
