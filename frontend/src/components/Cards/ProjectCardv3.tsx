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
    description: {
      marginTop: "5vh",
      fontSize: "1rem",
      width: "80%",
      fontFamily: "monospace",
    },
    createdBy: {
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
  createdBy: string;
  url: string;
  image: string;
}
const ProjectCardv3: React.FC<ProjectCardv3Props> = ({
  projectName,
  lang,
  description,
  createdBy,
  url,
  image,
}) => {
  const classes = useStyles();
  const [showInfo, setShowInfo] = React.useState<boolean>(false);

  return (
    <Card className={classes.root}>
      <div
        style={{ display: showInfo ? "block" : "none" }}
        onMouseLeave={() => setShowInfo(false)}
        className={classes.info}
      >
        <a href={url} className={classes.title} target="_blank">
          <Typography className={classes.title}>{projectName}</Typography>
        </a>
        <Typography className={classes.lang}>{lang}</Typography>
        <Typography className={classes.description}>{description}</Typography>
        <Typography className={classes.createdBy}>{createdBy}</Typography>
      </div>
      <CardMedia
        onMouseEnter={() => setShowInfo(true)}
        image={image}
        className={classes.media}
      />
    </Card>
  );
};

export default ProjectCardv3;
