import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { Email, GitHub, LinkedIn } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "350px",
      background: "transparent",
      border: "2px solid cyan",
      borderRadius: "24px",
      boxShadow: "0px 0px 14px 5px var(--my-dcyan)",
    },
    title: {
      fontSize: "1.2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
      textAlign: "center",
      color: "white",
      opacity: 1,
      fontFamily: "monospace",
      fontWeight: "bold",
    },
    subTitle: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.2rem",
      },
      fontFamily: "monospace",
      textAlign: "center",
      color: "var(--subtitle-color)",
    },
    media: {
      aspectRatio: "4/3",
      margin: "10px",
      borderRadius: "15px 15px 0 0",
      objectFit: "fill",
    },
    iconsContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    icons: {
      color: "white",
    },
  })
);

interface AlumniCardProps {
  name: string;
  description: string;
  description2?: string;
  codeforcesProfileUrl?: string;
  githubProfileUrl?: string;
  linkedInProfileUrl?: string;
  email: string;
  profileImg: string;
}

const AlumniCard: React.FC<AlumniCardProps> = ({
  name,
  description,
  description2 = "",
  githubProfileUrl,
  profileImg,
  email,
  linkedInProfileUrl,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={"/webix.iiitdmj.ac.in/images/Alumniprofile/" + profileImg}
      />
      <CardContent>
        <Typography className={classes.title}>{name}</Typography>
        <Typography className={classes.subTitle}>{description}</Typography>
        <Typography className={classes.subTitle}>{description2}</Typography>

        <div className={classes.iconsContainer}>
          {githubProfileUrl ? (
            <a href={githubProfileUrl} target="_blank">
              <IconButton>
                <GitHub className={classes.icons} />
              </IconButton>
            </a>
          ) : null}

          {email ? (
            <a href={"mailto:" + email} target="_blank">
              <IconButton>
                <Email className={classes.icons} />
              </IconButton>
            </a>
          ) : null}

          {linkedInProfileUrl ? (
            <a href={linkedInProfileUrl} target="_blank">
              <IconButton>
                <LinkedIn className={classes.icons} />
              </IconButton>
            </a>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
};
export default AlumniCard;
