import React from "react";
import {
  AppBar,
  Typography,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { Link, useHistory } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { linklist } from "../linklist";
import { getToken } from "src/store/tokenStore";
import { logout } from "../../../utils/logout";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    bg: {
      background: "rgba(33, 51, 130, 0.52)",
    },
    flexbox: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("lg")]: {
        display: "flex",
      },
      marginLeft: "60vh",
      [theme.breakpoints.up("xl")]: {
        marginLeft: "80vh",
      },
      flexDirection: "row",
      justifyContent: "space-around",
    },
    menuButton: {
      // display: "block",
      [theme.breakpoints.up("lg")]: {
        display: "none",
      },
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: "bold",
      fontSize: "1.4rem",
      color: "white",
    },
    other: {
      color: "white",
    },
    drawerList: {
      width: 300,
      background: "#14335f",
      height: "100vh",
      color: "white",
    },
  })
);
const HomePage: React.FC = () => {
  const classes = useStyles();
  const [drawerOpen, setdrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setdrawerOpen(!drawerOpen);
    return undefined;
  };
  const history = useHistory();

  const drawerList = () => (
    <div
      className={classes.drawerList}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onClick={toggleDrawer}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {linklist.map((e, key) => {
          if (e.loginReq) {
            const token = getToken();
            if (!!token)
              return (
                <div
                  onClick={async () => await logout(history, e.url)}
                  key={key}
                >
                  <ListItem button>
                    <Typography className={classes.other}>{e.name}</Typography>
                  </ListItem>
                </div>
              );
            else return null;
          }
          return (
            <Link to={e.url} key={key}>
              <ListItem button>
                <Typography className={classes.other}>{e.name}</Typography>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar className={classes.bg} position="static">
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Typography className={classes.title} align="center">
              BitByte
            </Typography>
          </Link>
          <Container className={classes.flexbox}>
            {linklist.map((e, key) => {
              if (e.loginReq) {
                const token = getToken();
                if (!!token) {
                  return (
                    <div
                      onClick={async () => await logout(history, e.url)}
                      key={key}
                    >
                      <Typography className={classes.other}>
                        {e.name}
                      </Typography>
                    </div>
                  );
                } else {
                  return null;
                }
              }
              return (
                <Link to={e.url} key={key}>
                  <Typography className={classes.other}>{e.name}</Typography>
                </Link>
              );
            })}
          </Container>
        </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} open={drawerOpen} onClose={toggleDrawer}>
        {drawerList()}
      </Drawer>
    </div>
  );
};

export default HomePage;
