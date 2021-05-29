import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: "2vh",
      minHeight: "20vh",
      width: "80vh",
      background: "#FFD166",
    },
    title: {
      fontSize: "1.2rem",
      color: "#3650C7",
      fontWeight: "bold",
      marginRight: "2vh",
    },
    lang: {
      opacity: 0.5,
    },
    body: {
      marginTop: "1vh",
    },
    owner: {
      marginTop: "1vh",
      opacity: 0.5,
    },
  })
);

// interface MeetingCardProps {}

const MeetingCard: React.FC = ({}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>hello</Typography>
      </CardContent>
    </Card>
  );
};

export default MeetingCard;
