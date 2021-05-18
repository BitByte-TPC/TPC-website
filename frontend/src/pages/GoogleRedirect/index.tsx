import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from "react-router";
import queryString from "query-string";
import { server } from "src/store/global";
import { setToken } from "src/store/tokenStore";

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
  const id = queries.user_id;
  React.useEffect(() => {
    const googleToken = async () => {
      const res = await fetch(server + "/api/user/google-login/" + id);
      const payload = await res.json();
      if (payload.done) {
        setToken(payload.accessToken);
        history.push("/events");
      } else {
        history.push("/registration");
      }
    };
    googleToken();
  });
  return <div className={classes.root}>Loading...</div>;
};

export default GoogleRedirect;
