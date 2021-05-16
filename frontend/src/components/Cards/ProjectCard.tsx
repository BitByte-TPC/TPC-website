import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "2vh",
      minHeight: "20vh",
      width: "53vh",
      [theme.breakpoints.down("xs")]: {
        width: "80vw",
      },
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

interface ProjectCardProps {
  projectName: string;
  lang: string;
  description: string;
  dev: string;
  url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectName,
  lang,
  description,
  dev,
  url,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <a href={url} target="_blank">
          <Typography className={classes.title} component="span">
            {projectName}
          </Typography>
        </a>
        <Typography className={classes.lang} component="span">
          {lang}
        </Typography>
        <Typography className={classes.body}>{description}</Typography>
        <Typography className={classes.owner} align="right">
          {dev}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
