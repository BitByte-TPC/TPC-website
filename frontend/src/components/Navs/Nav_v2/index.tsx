import React from "react";
import {
  AppBar,
  Typography,
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
      background: "transparent",
    },
    wrapper: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "space-between",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    logo: {
      width: "15vh",
    },
    other: {
      color: "white",
      paddingLeft: 20,
    },
    drawerList: {
      width: 300,
      background: "#262626",
      height: "100vh",
      color: "white",
    },
    pseudolink: {
      cursor: "pointer",
    },
  })
);
const Nav2: React.FC = () => {
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
        <Toolbar className={classes.wrapper} variant="regular">
          <Link to="/">
            <img className={classes.logo} src="/tpclogo.png" alt="TPC" />
          </Link>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor={"right"} open={drawerOpen} onClose={toggleDrawer}>
        {drawerList()}
      </Drawer>
    </div>
  );
};

export default Nav2;
