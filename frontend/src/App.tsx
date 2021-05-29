import React from "react";
import Routes from "./Routes";
import { updateAccessToken } from "./utils/updateAccessToken";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

const App: React.FC = () => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    updateAccessToken(setLoading);
  });
  return (
    <>
      <Routes />
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default App;
