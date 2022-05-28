import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ProjectCardv3 from "src/components/Cards/ProjectCardv3";
import { projectlist } from "./projectlist";
import Nav2 from "src/components/Navs/Nav_v2";

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
      <Nav2 />
      <div className={classes.flexbox}>
        {projectlist.map((project, key) => {
          return <ProjectCardv3 key={key} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
