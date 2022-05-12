import React from "react";
import NavBar from "../../components/Navs/Navbar";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Container, Typography } from "@material-ui/core";
import DomainCard from "src/components/Cards/DomainCard";
import { teamlist } from "./teamlist";

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
          Coordinator
        </Typography>
        <Container className={classes.flexbox}>
          {teamlist.map((e, i) => {
            if (e.team === "coordinator") {
              return <DomainCard key={i} {...e} />;
            }
            return null;
          })}
        </Container>
      </Container>
      <Container>
        <Typography className={classes.title} align="center">
          Co-Coordinator
        </Typography>
        <Container className={classes.flexbox}>
          {teamlist.map((e, i) => {
            if (e.team === "coco") {
              return <DomainCard key={i} {...e} />;
            }
            return null;
          })}
        </Container>
      </Container>
      <Container>
        <Typography className={classes.title} align="center">
          Developers
        </Typography>
        <Container className={classes.flexbox}>
          {teamlist.map((e, i) => {
            if (e.team === "dev") {
              return <DomainCard key={i} {...e} />;
            }
            return null;
          })}
        </Container>
      </Container>
      <Container>
        <Typography className={classes.title} align="center">
          Competitive Programmers
        </Typography>
        <Container className={classes.flexbox}>
          {teamlist.map((e, i) => {
            if (e.team === "cp") {
              return <DomainCard key={i} {...e} />;
            }
            return null;
          })}
        </Container>
      </Container>
    </div>
  );
};

export default Domains;
