import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { IconButton, Typography } from "@material-ui/core";
import { Email, GitHub, LinkedIn, Person } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "5vh 2vh",
      height: "25vh",
      width: "22vw",
      [theme.breakpoints.down("sm")]: {
        height: "30vh",
        width: "90vw",
      },
      background: "transparent",
      border: "2px solid cyan",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      alignItems: "center",
      borderRadius: "24px",
      boxShadow: "0px 0px 14px 5px #11BFD7",
    },
    title: {
      fontSize: "1.2rem",
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.5rem",
      },
      color: "white",
      opacity: 1,
      textAlign: "center",
      fontFamily: "monospace",
      fontWeight: "bold",
      transform: "translateY(-5vh)",
    },
    subTitle: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.2rem",
      },
      fontFamily: "monospace",
      textAlign: "center",
      color: "#BFC7D1",
      transform: "translateY(-5vh)",
    },
    media: {
      width: "15vh",
      height: "15vh",
      borderRadius: "100%",
      border: "2px solid white",
      transform: "translateY(-6vh)",
    },
    iconsContainer: {
      transform: "translateY(-5vh)",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      padding: "0 7vh",
    },
    icons: {
      color: "white",
    },
    imgIcon: {
      width: "25px",
      padding: "12px",
      marginTop: "10px",
    },
  })
);

interface DomainCardInterface {
  name: string;
  team: string;
  codeforcesProfileUrl?: string;
  githubProfileUrl?: string;
  linkedInProfileUrl?: string;
  email: string;
  profileImg: string;
  facultyProfileUrl?: string;
}

const DomainCard: React.FC<DomainCardInterface> = ({
  name,
  team,
  codeforcesProfileUrl,
  githubProfileUrl,
  email,
  profileImg,
  linkedInProfileUrl,
  facultyProfileUrl,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src={"/webix.iiitdmj.ac.in/images/profile/" + profileImg}
        alt={name}
        className={classes.media}
      />
      <Typography className={classes.title}>{name}</Typography>
      <Typography className={classes.subTitle}>{team}</Typography>
      <div className={classes.iconsContainer}>
        {codeforcesProfileUrl ? (
          <a
            href={codeforcesProfileUrl}
            className={classes.imgIcon}
            target="_blank"
          >
            <img
              src="/webix.iiitdmj.ac.in/images/other/codeforces.svg"
              alt="codeforces"
            />
          </a>
        ) : null}
        {githubProfileUrl ? (
          <a href={githubProfileUrl} target="_blank">
            <IconButton>
              <GitHub className={classes.icons} />
            </IconButton>
          </a>
        ) : null}
        <a href={"mailto:" + email} target="_blank">
          <IconButton>
            <Email className={classes.icons} />
          </IconButton>
        </a>
        {linkedInProfileUrl ? (
          <a href={linkedInProfileUrl} target="_blank">
            <IconButton>
              <LinkedIn className={classes.icons} />
            </IconButton>
          </a>
        ) : null}
        {facultyProfileUrl ? (
          <a href={facultyProfileUrl} target="_blank">
            <IconButton>
              <Person className={classes.icons} />
            </IconButton>
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default DomainCard;
