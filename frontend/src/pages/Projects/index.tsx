import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ProjectCard from "src/components/Cards/ProjectCard";
import { projectlist } from "./projectlist";
import Nav from "src/components/Nav";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: "100vh",
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
      <div className={classes.flexbox}>
        {projectlist.map((project, key) => {
          return <ProjectCard key={key} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
