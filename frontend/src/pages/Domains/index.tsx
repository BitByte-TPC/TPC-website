import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Nav from "src/components/Nav";
import DomainCard from "src/components/Cards/DomainCard";
import { teamList_22, teamList_21, teamList_20 } from "./teamList";

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
      <Nav />
      <div className={classes.root}>
        <Typography className={classes.heading} align="center">
          We are everywhere
        </Typography>
        <Typography className={classes.subHeading} align="center">
          {"<p>From web to app, AI to ML, Blockchain to DevOps</p>"}
        </Typography>
        <Typography className={classes.title} align="center">
          OFFICE BEARERS
        </Typography>
        <div className={classes.flexbox}>
          {teamList_21.map((memberData, i) => {
            return memberData.team === "Coordinator" ||
              memberData.team === "Co Coordinator" ? (
              <DomainCard key={i} {...{ ...memberData }} />
            ) : null;
          })}
        </div>
        <Typography className={classes.title} align="center">
          DEVELOPERS
        </Typography>
        <Typography className={classes.subtitle} align="left">
          2020 Batch
        </Typography>
        <div className={classes.flexbox}>
          {teamList_20.map((memberData, i) => {
            return memberData.team === "dev" ? (
              <DomainCard key={i} {...{ ...memberData, team: "Developer" }} />
            ) : null;
          })}
        </div>

        <Typography className={classes.subtitle} align="left">
          2021 Batch
        </Typography>
        <div className={classes.flexbox}>
          {teamList_21.map((memberData, i) => {
            return memberData.team === "dev" ? (
              <DomainCard key={i} {...{ ...memberData, team: "Developer" }} />
            ) : null;
          })}
        </div>

        <Typography className={classes.subtitle} align="left">
          2022 Batch
        </Typography>
        <div className={classes.flexbox}>
          {teamList_22.map((memberData, i) => {
            return memberData.team === "dev" ? (
              <DomainCard key={i} {...{ ...memberData, team: "Developer" }} />
            ) : null;
          })}
        </div>
        <Typography className={classes.title} align="center">
          COMPETITIVE PROGRAMMERS
        </Typography>
        <Typography className={classes.subtitle} align="left">
          2020 Batch
        </Typography>
        <div className={classes.flexbox}>
          {teamList_20.map((memberData, i) => {
            return memberData.team === "cp" ? (
              <DomainCard
                key={i}
                {...{ ...memberData, team: "Competitive Programmer" }}
              />
            ) : null;
          })}
        </div>

        <Typography className={classes.subtitle} align="left">
          2021 Batch
        </Typography>
        <div className={classes.flexbox}>
          {teamList_21.map((memberData, i) => {
            return memberData.team === "cp" ? (
              <DomainCard
                key={i}
                {...{ ...memberData, team: "Competitive Programmer" }}
              />
            ) : null;
          })}
        </div>

        <Typography className={classes.subtitle} align="left">
          2022 Batch
        </Typography>
        <div className={classes.flexbox}>
          {teamList_22.map((memberData, i) => {
            return memberData.team === "cp" ? (
              <DomainCard
                key={i}
                {...{ ...memberData, team: "Competitive Programmer" }}
              />
            ) : null;
          })}
        </div>
        <Typography className={classes.title} align="center">
          Designers
        </Typography>

        <Typography className={classes.subtitle} align="left">
          2022 Batch
        </Typography>
        <div className={classes.flexbox}>
          {teamList_22.map((memberData, i) => {
            return memberData.team === "design" ? (
              <DomainCard key={i} {...{ ...memberData, team: "Designers" }} />
            ) : null;
          })}
        </div>
      </div>
    </div>
  );
};

export default Domains;
