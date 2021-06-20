import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Container, Link, Typography, Theme } from "@material-ui/core";
import { Email, Facebook, GitHub, Instagram } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: "2vh",
      [theme.breakpoints.down("md")]: {
        paddingTop: 0,
      },
      minHeight: "9vh",
      background: "var(--svg-bg)",
    },
    flexbox: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    atag: {
      display: "flex",
      justifyContent: "space-around",
      alignContent: "center",
      margin: "1vh",
    },
    text: {
      color: "#ededed",
      marginLeft: "1vh",
    },
    icon: {
      color: "#ededed",
    },
  })
);

const ContactUs: React.FC = () => {
  const classes = useStyles();
  return (
    <div id="contact" className={classes.root}>
      <Container className={classes.flexbox}>
        <a
          href="https://github.com/BitByte-TPC"
          target="_blank"
          className={classes.atag}
        >
          <GitHub className={classes.icon} fontSize="small" />
          <Typography className={classes.text} component="span">
            BitByte
          </Typography>
        </a>
        <a
          href="https://www.facebook.com/geeks.IIITJ/"
          target="_blank"
          className={classes.atag}
        >
          <Facebook className={classes.icon} fontSize="small" />
          <Typography className={classes.text} component="span">
            BitByte
          </Typography>
        </a>
        <a
          href="mailto:theprogclub@iiitdmj.ac.in"
          target="_blank"
          className={classes.atag}
        >
          <Email className={classes.icon} fontSize="small" />
          <Typography className={classes.text} component="span">
            BitByte
          </Typography>
        </a>
        <a href="#" target="_blank" className={classes.atag}>
          <Instagram className={classes.icon} fontSize="small" />
          <Typography className={classes.text} component="span">
            BitByte
          </Typography>
        </a>
        <span className={classes.atag}>
          <Typography className={classes.text} component="span">
            Contribute to the website{" "}
            <Link
              underline="always"
              href="https://github.com/BitByte-TPC/TPC-website"
              target="_blank"
              className={classes.icon}
            >
              here
            </Link>
          </Typography>
        </span>
      </Container>
    </div>
  );
};

export default ContactUs;
