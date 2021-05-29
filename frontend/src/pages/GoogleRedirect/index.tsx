import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router";
import queryString from "query-string";
import { server } from "src/store/global";
import useTokenStore from "../../store/tokenStore";

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

const GoogleRedirect: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const { search } = useLocation();
  const queries = queryString.parse(search);
  const id = queries.token;
  const setToken = useTokenStore((state) => state.setToken);
  React.useEffect(() => {
    const googleToken = async () => {
      const res = await fetch(server + "/api/user/google-login/" + id);
      const payload = await res.json();
      if (payload.done) {
        setToken(payload.accessToken);
        history.push("/");
      } else {
        history.push("/registration");
      }
    };
    console.log("google redirect" + id);
    googleToken();
  }, []);
  return <div className={classes.root}>Loading...</div>;
};

export default GoogleRedirect;
