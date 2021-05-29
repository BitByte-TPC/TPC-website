import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import useTokenStore from "src/store/tokenStore";
import Navbar from "../../components/Navs/Navbar";
import MeetingTabs from "../../components/Meeting/MeetingTabs";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: "100vh",
    },
  })
);

const Meeting: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const token = useTokenStore((state) => state.token);
  React.useEffect(() => {
    setTimeout(() => {
      console.log(token);
      if (token && token === "") {
        history.push("/registration");
      }
    }, 2000);
  }, [token]);
  return (
    <div className={classes.root}>
      <Navbar />
      <MeetingTabs />
    </div>
  );
};

export default Meeting;
