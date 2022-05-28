import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Card, CardMedia, Typography } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      margin: "2vh",
      height: "65vh",
      width: "80vw",
      position: "relative",
    },
    info: {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      background: "rgba(0, 0, 0, 0.63)",
      backdropFilter: "blur(10px)",
      color: "white",
      padding: "6% 0 0 10%",
    },
    title: {
      fontSize: "2rem",
      textDecoration: "none",
      fontWeight: "bold",
      color: "white",
      fontFamily: "monospace",
    },
    lang: {
      opacity: 0.5,
      marginTop: "1vh",
      fontSize: "1rem",
      fontFamily: "monospace",
    },
    body: {
      marginTop: "5vh",
      fontSize: "1rem",
      width: "80%",
      fontFamily: "monospace",
    },
    owner: {
      marginTop: "5vh",
      fontSize: "1rem",
      opacity: 0.5,
      fontFamily: "monospace",
    },
    media: {
      width: "100%",
      height: "100%",
    },
  })
);

interface ProjectCardv3Props {
  projectName: string;
  lang: string;
  description: string;
  dev: string;
  url: string;
  image: string;
}
const ProjectCardv3: React.FC<ProjectCardv3Props> = ({
  projectName,
  lang,
  description,
  dev,
  url,
  image,
}) => {
  const classes = useStyles();
  const [display, setDisplay] = React.useState<string>("none");

  return (
    <Card className={classes.root}>
      <div
        style={{ display }}
        onMouseLeave={() => setDisplay("none")}
        className={classes.info}
      >
        <a href={url} className={classes.title} target="_blank">
          <Typography className={classes.title}>{projectName}</Typography>
        </a>
        <Typography className={classes.lang}>{lang}</Typography>
        <Typography className={classes.body}>{description}</Typography>
        <Typography className={classes.owner}>{dev}</Typography>
      </div>
      <CardMedia
        onMouseEnter={() => setDisplay("block")}
        image={image}
        className={classes.media}
      />
    </Card>
  );
};

export default ProjectCardv3;
