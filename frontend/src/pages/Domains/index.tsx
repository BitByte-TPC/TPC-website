import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Nav2 from "src/components/Navs/Nav_v2";
import DomainCard2 from "src/components/Cards/DomainCard_v2";
import { teamlist } from "./teamlist";

const useStyles = makeStyles(() =>
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
    },
    subHeading: {
      color: "rgba(255, 255, 255, 0.75)",
      fontFamily: "monospace",
    },
    title: {
      marginBottom: "5vh",
      marginTop: "8vh",
      fontFamily: "var(--heading-font)",
      fontSize: "2.5rem",
      textTransform: "uppercase",
      color: "rgba(255, 255, 255, 0.9)",
      textShadow: "-4px 4px 4px #10ABC2",
    },
    flexbox: {
      width: "90vw",
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
  })
);
const Domains: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Nav2 />
      <div className={classes.root}>
        <Typography className={classes.heading} align="center">
          We are everywhere
        </Typography>
        <Typography className={classes.subHeading} align="center">
          {"<p>From web to app, AI to ML, Blockchain to DevOps</p>"}
        </Typography>
        <Typography className={classes.title} align="center">
          COORDINATOR
        </Typography>
        <div className={classes.flexbox}>
          {teamlist.map((e, i) => {
            if (e.team === "coordinator") {
              return <DomainCard2 key={i} {...{ ...e, team: "Coordinator" }} />;
            } else {
              return <></>;
            }
          })}
        </div>
        <Typography className={classes.title} align="center">
          CO-COORDINATOR
        </Typography>
        <div className={classes.flexbox}>
          {teamlist.map((e, i) => {
            if (e.team === "coco") {
              return <DomainCard2 key={i} {...{ ...e, team: "Coco" }} />;
            } else {
              return <></>;
            }
          })}
        </div>
        <Typography className={classes.title} align="center">
          DEVELOPERS
        </Typography>
        <div className={classes.flexbox}>
          {teamlist.map((e, i) => {
            if (e.team === "dev") {
              return <DomainCard2 key={i} {...{ ...e, team: "Developer" }} />;
            } else {
              return <></>;
            }
          })}
        </div>
        <Typography className={classes.title} align="center">
          COMPETITIVE PROGRAMMERS
        </Typography>
        <div className={classes.flexbox}>
          {teamlist.map((e, i) => {
            if (e.team === "cp") {
              return (
                <DomainCard2
                  key={i}
                  {...{ ...e, team: "Competitive Programmer" }}
                />
              );
            } else {
              return <></>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Domains;
