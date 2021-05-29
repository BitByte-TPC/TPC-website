import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { server } from "../../store/global";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
    },
    btn: {
      background: "#ededed",
    },
    icon: {
      width: "24px",
      padding: 2,
      marginRight: "2vh",
    },
  })
);

const GoogleButton: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        className={classes.btn}
        href={`${server}/api/auth/google`}
      >
        <img
          className={classes.icon}
          src="/images/other/search.svg"
          alt="google"
        />
        Sign in with Google
      </Button>
    </div>
  );
};

export default GoogleButton;
