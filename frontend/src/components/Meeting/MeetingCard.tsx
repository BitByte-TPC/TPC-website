import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import RegisterButton from "./RegisterButton";
import MoreOptions from "../Buttons/MoreOptions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "2vh",
      minHeight: "20vh",
      width: "90vw",
      background: "#ffd166",
      position: "relative",
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
    minorText: {
      fontSize: "0.9rem",
      marginLeft: "1vh",
      opacity: 0.5,
    },
    body: {
      marginBottom: "1vh",
    },
    alignRight: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "center",
      [theme.breakpoints.down("xs")]: {
        alignItems: "flex-start",
        // flexDirection: "row",
      },
    },
    more: {
      position: "absolute",
      top: 2,
      right: 2,
    },
  })
);

// interface MeetingCardProps {}

const MeetingCard: React.FC = ({}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div>
              <Typography className={classes.title} component="span">
                EventName
              </Typography>
              <Typography className={classes.lang} component="span">
                Bitbyte
              </Typography>
            </div>
            <Typography className={classes.lang}>12:00AM 30.2.2022</Typography>
            <Typography className={classes.body}>
              coding coding coding coding coding coding coding{" "}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.alignRight}>
            <RegisterButton />
            <Typography className={classes.minorText}>25 registers</Typography>
          </Grid>
        </Grid>
        <MoreOptions className={classes.more} />
      </CardContent>
    </Card>
  );
};

export default MeetingCard;
