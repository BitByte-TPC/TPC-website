import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import RegistrationForm from "../../components/RegistrationForm";
import useTokenStore from "../../store/tokenStore";
import { useHistory } from "react-router";
import Nav from "src/components/Nav";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: "100vh",
    },
    flexbox: {
      marginTop: "5vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

const Registration: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const token = useTokenStore((state) => state.token);
  React.useEffect(() => {
    if (!!token) {
      history.push("/");
    }
  }, [token]);

  return (
    <div className={classes.root}>
      <Nav />
      <div className={classes.flexbox}>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;
