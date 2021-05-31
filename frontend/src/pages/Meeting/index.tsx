import React, { useState } from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import useTokenStore from "src/store/tokenStore";
import Navbar from "../../components/Navs/Navbar";
import MeetingTabs from "../../components/Meeting/MeetingTabs";
import AuthDialog from "src/components/RegistrationForm/AuthDialog";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: "100vh",
    },
  })
);

const Meeting: React.FC = () => {
  const classes = useStyles();
  const token = useTokenStore((state) => state.token);
  const [authOpen, setAuthOpen] = useState(false);
  React.useEffect(() => {
    if (token === "") {
      setAuthOpen(true);
    } else {
      setAuthOpen(false);
    }
  }, [token]);
  return (
    <div className={classes.root}>
      <Navbar />
      {token === "" ? null : <MeetingTabs />}

      <AuthDialog isOpen={authOpen} />
    </div>
  );
};

export default Meeting;
