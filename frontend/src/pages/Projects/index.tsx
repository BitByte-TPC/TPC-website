import React from "react";
import NavBar from "../../components/Navs/Navbar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
// import { Container } from "@material-ui/core";
import ProjectCardv2 from "src/components/Cards/ProjectCardv2";
import { projectlist } from "./projectlist";
import useWindowDimensions from "../../utils/useWindowDimensions";
import ProjectCard from "src/components/Cards/ProjectCard";

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
  const { width } = useWindowDimensions();
  return (
    <div className={classes.root}>
      <NavBar />
      <div className={classes.flexbox}>
        {projectlist.map((project, key) => {
          if (width > 600) {
            return <ProjectCardv2 key={key} {...project} />;
          } else {
            return <ProjectCard key={key} {...project} />;
          }
        })}
      </div>
    </div>
  );
};

export default Projects;
