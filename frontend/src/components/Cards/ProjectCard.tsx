import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: "2vh",
      height: "20vh",
      width: "53vh",
      background: "#FFD166",
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
    body: {
      marginTop: "1vh",
    },
    owner: {
      marginTop: "1vh",
      opacity: 0.5,
    },
  })
);
const ProjectCard: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} component="span">
          Project_Name
        </Typography>
        <Typography className={classes.lang} component="span">
          Typescript
        </Typography>
        <Typography className={classes.body}>
          A deployment tool written in PHP with support for popular frameworks
          out of the box
        </Typography>
        <Typography className={classes.owner} align="right">
          Aksh
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
