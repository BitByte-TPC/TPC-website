import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import RegistrationForm from "../../components/RegistrationForm";
import useTokenStore from "../../store/tokenStore";
import { useHistory } from "react-router";

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
  const history = useHistory();
  const token = useTokenStore((state) => state.token);
  React.useEffect(() => {
    if (!!token) {
      history.push("/");
    }
  }, [token]);

  return (
    <div className={classes.root}>
      <RegistrationForm />
    </div>
  );
};

export default Registration;
