import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ProjectCard from "src/components/Cards/ProjectCard";
import { projectlist } from "./projectlist";
import Nav from "src/components/Nav";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
    },
    heading: {
      fontFamily: "var(--heading-font)",
      fontSize: "4rem",
      textTransform: "uppercase",
      color: "rgba(255, 255, 255, 0.9)",
      textShadow: "-4px 4px 4px #10ABC2",
      [theme.breakpoints.down("sm")]: {
        fontSize: "2.5rem",
      },
    },
    subHeading: {
      color: "rgba(255, 255, 255, 0.75)",
      fontFamily: "monospace",
      marginBottom: "5vh",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.9rem",
        padding: "0 5vw",
      },
    },
    title: {
      margin: "4vh",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.4rem",
    },
    flexbox: {
      padding: "3vh",
      flexGrow: 1,
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
  })
);

const Projects: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Nav />
      <Typography className={classes.heading} align="center">
        Our Projects
      </Typography>
      <Typography className={classes.subHeading} align="center">
        {
          "<p>From websites to apps, CLIs to Discord bots, Typescript to Golang</p>"
        }
      </Typography>
      <div className={classes.flexbox}>
        {projectlist.map((project, key) => {
          return <ProjectCard key={key} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
