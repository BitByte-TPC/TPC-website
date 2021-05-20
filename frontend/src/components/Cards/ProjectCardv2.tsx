import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      margin: "2vh",
      minHeight: 200,
      width: "60vh",
      [theme.breakpoints.down("sm")]: {
        width: "80vw",
      },
      background: "#FFD166",
    },
    info: {
      width: "30vh",
      [theme.breakpoints.down("sm")]: {
        width: "50vw",
      },
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
    media: {
      width: "30vh",
      [theme.breakpoints.down("sm")]: {
        width: "30vw",
      },
      minHeight: 200,
    },
  })
);

interface ProjectCardv2Props {
  projectName: string;
  lang: string;
  description: string;
  dev: string;
  url: string;
  image: string;
}

const ProjectCardv2: React.FC<ProjectCardv2Props> = ({
  projectName,
  lang,
  description,
  dev,
  url,
  image,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.info}>
        <a href={url} target="_blank">
          <Typography className={classes.title}>{projectName}</Typography>
        </a>
        <Typography className={classes.lang}>{lang}</Typography>
        <Typography className={classes.body}>{description}</Typography>
        <Typography className={classes.owner}>{dev}</Typography>
      </CardContent>
      <CardMedia
        image={image}
        title="project_image"
        className={classes.media}
      />
    </Card>
  );
};

export default ProjectCardv2;
