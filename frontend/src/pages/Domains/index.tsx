import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Nav from "src/components/Nav";
import DomainCard from "src/components/Cards/DomainCard";
import { teamList } from "./teamList";
import TeamCard from "../../components/Cards/TeamsCard";
import AnimateOnScroll from "src/utils/animateonscroll";

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
      animation: "$fadeIn 2s ease-in-out",

      [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
        padding: "0 5vw",
      },
    },
    "@keyframes fadeIn": {
      "0%": {
        opacity: 0,
      },
      "100%": {
        opacity: 1,
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
          {teamList.map((memberData, i) => {
            return memberData.team === "Coordinator" ||
              memberData.team === "Co Coordinator" ? (
              <>
                <AnimateOnScroll>
                  <DomainCard key={i} {...{ ...memberData }} />
                </AnimateOnScroll>
              </>
            ) : null;
          })}
        </div>
        <Typography className={classes.title} align="center">
          DEVELOPERS
        </Typography>
        <TeamCard batch={2020} domain="dev" />
        <TeamCard batch={2021} domain="dev" />
        <TeamCard batch={2022} domain="dev" />

        <Typography className={classes.title} align="center">
          COMPETITIVE PROGRAMMERS
        </Typography>
        <TeamCard batch={2020} domain="cp" />
        <TeamCard batch={2021} domain="cp" />
        <TeamCard batch={2022} domain="cp" />
      </div>

      <Typography className={classes.title} align="center">
        Designers
      </Typography>
      <TeamCard batch={2022} domain="design" />
    </div>
  );
};

export default Domains;
