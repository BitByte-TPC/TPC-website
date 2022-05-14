import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Email, GitHub, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      margin: "1vh",
      height: "38vh",
      width: "30vh",
      background: "#ffd166",
    },
    title: {
      fontSize: "1.2rem",
      opacity: 0.8,
      fontWeight: "bold",
    },
    title2: {
      fontSize: "1rem",
      opacity: 0.8,
      fontWeight: "bold",
    },
    media: {
      height: "25vh",
    },
  })
);
interface DomainCardProps {
  name: string;
  profileImg: string;
  email: string;
  linkedIn?: string;
  github?: string;
}
const DomainCard: React.FC<DomainCardProps> = ({
  name,
  email,
  profileImg,
  linkedIn,
  github,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={`/webix.iiitdmj.ac.in/images/profile/${profileImg}`}
        title={name}
      />
      <CardContent>
        {name.length > 16 ? (
          <Typography className={classes.title2}>{name}</Typography>
        ) : (
          <Typography className={classes.title}>{name}</Typography>
        )}
        <a href={linkedIn} target="_blank">
          <IconButton>
            <LinkedIn />
          </IconButton>
        </a>
        {github ? (
          <a href={github} target="_blank">
            <IconButton>
              <GitHub />
            </IconButton>
          </a>
        ) : null}
        <a href={`mailto:${email}`} target="_blank">
          <IconButton>
            <Email />
          </IconButton>
        </a>
      </CardContent>
    </Card>
  );
};

export default DomainCard;
