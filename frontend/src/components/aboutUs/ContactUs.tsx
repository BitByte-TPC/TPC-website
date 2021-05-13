import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: "20vh",
      background: "var(--svg-bg)",
    },
    flexbox: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
  })
);

const ContactUs: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container className={classes.flexbox}>
        <a href="#" target="_blank">
          <Typography>Bitbyte</Typography>
        </a>
        <a href="#" target="_blank">
          <Typography>Bitbyte</Typography>
        </a>
        <a href="#" target="_blank">
          <Typography>Bitbyte</Typography>
        </a>
        <a href="#" target="_blank">
          <Typography>Bitbyte</Typography>
        </a>
        <a href="#" target="_blank">
          <Typography>Bitbyte</Typography>
        </a>
      </Container>
    </div>
  );
};

export default ContactUs;
