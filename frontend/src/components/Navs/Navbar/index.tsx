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
import useTokenStore from "../../../store/tokenStore";
import { logout } from "../../../utils/auth/logout";

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
      [theme.breakpoints.up("lg")]: {
        display: "none",
      },
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontWeight: "bold",
      fontSize: "1.4rem",
      width: "30vw",
      color: "white",
    },
    other: {
      color: "white",
      paddingLeft: 20,
    },
    drawerList: {
      width: 300,
      background: "#14335f",
      height: "100vh",
      color: "white",
    },
    pseudolink: {
      cursor: "pointer",
    },
  })
);
const HomePage: React.FC = () => {
  const token = useTokenStore((state) => state.token);
  const setToken = useTokenStore((state) => state.setToken);
  const classes = useStyles();
  const [drawerOpen, setdrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setdrawerOpen(!drawerOpen);
    return undefined;
  };
  const history = useHistory();

  const handleLogout = async (url: string) => {
    const res = await logout(setToken);
    if (res) {
      history.push(url);
    }
  };

  const drawerList = () => (
    <div
      className={classes.drawerList}
      role="presentation"
      onClick={toggleDrawer}
    >
      <List>
        {linklist.map((e, key) => {
          if (e.loginReq) {
            if (!!token)
              return (
                <div
                  className={classes.pseudolink}
                  onClick={async () => await handleLogout(e.url)}
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
            <Typography className={classes.title}>
              The Programming Club
            </Typography>
          </Link>
          <Container className={classes.flexbox}>
            {linklist.map((e, key) => {
              if (e.loginReq) {
                if (!!token) {
                  return (
                    <div
                      onClick={async () => await handleLogout(e.url)}
                      className={classes.pseudolink}
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
