import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import Nav from "src/components/Nav";
import EventCard from "src/components/Cards/EventCard";
import { eventList } from "./eventlist";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    heading: {
      fontFamily: "var(--heading-font)",
      fontSize: "4rem",
      textTransform: "uppercase",
      color: "rgba(255, 255, 255, 0.9)",
      textShadow: "-4px 4px 4px #10ABC2",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },
    subHeading: {
      color: "rgba(255, 255, 255, 0.75)",
      fontFamily: "monospace",

      [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
        padding: "0 5vw",
      },
    },
    title: {
      marginBottom: "5vh",
      marginTop: "8vh",
      fontFamily: "var(--heading-font)",
      fontSize: "2.8rem",
      textTransform: "uppercase",
      color: "rgba(255, 255, 255, 0.9)",
      textShadow: "-4px 4px 4px #10ABC2",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
    },
    subtitle: {
      marginBottom: "5vh",
      marginTop: "5vh",
      fontFamily: "var(--heading-font)",
      fontSize: "2rem",
      color: "rgba(255, 255, 255, 0.9)",
      textShadow: "-4px 4px 4px #10ABC2",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1rem",
      },
    },
    grid: {
      width: "90vw",
      marginBottom: "6rem",
      marginTop: "1rem",
      [theme.breakpoints.up("sm")]: {
        justifyContent: "center",
      },
      [theme.breakpoints.down("md")]: {
        justifyContent: "flex-start",
      },
    },
  })
);

const Events: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Nav />
      <div className={classes.root}>
        <Typography className={classes.heading} align="center">
          Events
        </Typography>
        <Typography className={classes.subHeading} align="center">
          {
            "<p>From workshops to speaker sessions, CP challanges to hackathons</p>"
          }
        </Typography>
        <Typography
          className={classes.title}
          align="center"
          style={{ marginTop: "6rem", marginBottom: "1rem" }}
        >
          Main Events
        </Typography>

        <Grid container spacing={7} className={classes.grid}>
          {eventList.map((event, i) => {
            return event.priority === true ? (
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <EventCard key={i} {...event} />
              </Grid>
            ) : null;
          })}
        </Grid>

        <Typography
          className={classes.title}
          align="center"
          style={{ marginTop: "6rem", marginBottom: "1rem" }}
        >
          Other Events
        </Typography>

        <Grid container spacing={7} className={classes.grid}>
          {eventList.map((event, i) => {
            return event.priority === false ? (
              <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
                <EventCard key={i} {...event} />
              </Grid>
            ) : null;
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Events;
