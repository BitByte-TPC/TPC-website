import React from "react";
import NavBar from "../../components/Navs/Navbar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import DomainCard from "src/components/Cards/DomainCard";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: "100vh",
    },
    title: {
      margin: "4vh",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.4rem",
    },
    flexbox: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
  })
);
const Domains: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar />
      <Container>
        <Typography className={classes.title} align="center">
          Web Development
        </Typography>
        <Container className={classes.flexbox}>
          <DomainCard />
          <DomainCard />
          <DomainCard />
          <DomainCard />
        </Container>
      </Container>
    </div>
  );
};

export default Domains;
