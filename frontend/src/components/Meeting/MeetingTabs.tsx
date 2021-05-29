import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);
const MeetingTabs: React.FC = () => {
  const classes = useStyles();
  return <div className={classes.root}>yolo</div>;
};

export default MeetingTabs;
