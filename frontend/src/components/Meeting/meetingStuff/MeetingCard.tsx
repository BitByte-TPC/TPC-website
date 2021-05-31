import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import RegisterButton from "./RegisterButton";
import MoreOptionsButton from "../MoreOptionsButton";
import { meetingType } from "../MeetingTabs";

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
      },
    },
    more: {
      position: "absolute",
      top: 2,
      right: 2,
    },
  })
);

interface MeetingCardProps {
  meetingData: meetingType;
  isAdmin: boolean;
}

const MeetingCard: React.FC<MeetingCardProps> = ({ meetingData, isAdmin }) => {
  const classes = useStyles();
  // const [registerState, setRegisterState] = useState(0);
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div>
              <Typography className={classes.title} component="span">
                {meetingData.title}
              </Typography>
              <Typography className={classes.lang} component="span">
                {meetingData.club}
              </Typography>
            </div>
            <Typography className={classes.lang}>
              {meetingData.datetime}
            </Typography>
            <Typography className={classes.body}>
              {meetingData.description}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.alignRight}>
            <RegisterButton btnState={1} />
            <Typography className={classes.minorText}>
              {meetingData.registered.length} registers
            </Typography>
          </Grid>
        </Grid>
        {isAdmin ? (
          <MoreOptionsButton formType={0} className={classes.more} />
        ) : null}
      </CardContent>
    </Card>
  );
};

export default MeetingCard;
