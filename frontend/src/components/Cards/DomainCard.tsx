import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Email, GitHub } from "@material-ui/icons";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: "1vh",
      height: "38vh",
      width: "30vh",
      background: "#FFD166",
    },
    title: {
      fontSize: "1.2rem",
      opacity: 0.8,
      fontWeight: "bold",
    },
    media: {
      height: "25vh",
    },
  })
);
const DomainCard: React.FC = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="/profile/profilepic.jfif"
        title="Aksh"
      />
      <CardContent>
        <Typography className={classes.title}>Aksh Bansal</Typography>
        <a href="https://github.com/Aksh-Bansal-dev" target="_blank">
          <IconButton>
            <GitHub />
          </IconButton>
        </a>
        <a href="mailto:20bcs021@iiitdmj.ac.in" target="_blank">
          <IconButton>
            <Email />
          </IconButton>
        </a>
      </CardContent>
    </Card>
  );
};

export default DomainCard;
