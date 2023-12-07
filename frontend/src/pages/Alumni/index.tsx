import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Nav from "../../components/Nav";
import AlumniCard from "src/components/Cards/AlumniCard";
import { alumniList } from "./alumniList";

const Alumni: React.FC = () => {
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
        marginTop: "2vh",

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
        margin: "8vh 0",
        width: "90vw",
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: "5vw",
        [theme.breakpoints.down("sm")]: {
          gap: "5vh",
        },
      },
    })
  );

  const classes = useStyles();
  return (
    <div>
      <Nav />
      <div className={classes.root}>
        <Typography className={classes.heading} align="center">
          Alumni
        </Typography>
        <Typography className={classes.subHeading} align="center">
          {
            "<p>Explore the evolution of our coding community through the lens of our esteemed alumni</p>"
          }
        </Typography>

        <div className={classes.flexbox}>
          {alumniList.map((memberData, i) => {
            return <AlumniCard key={i} {...{ ...memberData }} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default Alumni;
