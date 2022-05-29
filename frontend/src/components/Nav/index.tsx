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
import { linklist } from "./linklist";
import useTokenStore from "../../store/tokenStore";
import { logout } from "../../utils/auth/logout";

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
    menuIcon: {
      fontSize: "4rem",
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
      background: "#171717",
      height: "100vh",
      color: "white",
    },
    pseudolink: {
      cursor: "pointer",
    },
  })
);
const Nav: React.FC = () => {
  const token = useTokenStore((state) => state.token);
  const setToken = useTokenStore((state) => state.setToken);
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  const history = useHistory();

  const handleLogout = async (url: string) => {
    const res = await logout(setToken);
    if (res) {
      history.push(url);
    }
  };

  const drawerList = (
    <div
      className={classes.drawerList}
      role="presentation"
      onClick={toggleDrawer}
    >
      <List>
        {linklist.map((linkData, key) => {
          if (linkData.loginReq) {
            return !!token ? (
              <div
                className={classes.pseudolink}
                onClick={async () => await handleLogout(linkData.url)}
                key={key}
              >
                <ListItem button>
                  <Typography className={classes.other}>
                    {linkData.name}
                  </Typography>
                </ListItem>
              </div>
            ) : null;
          }
          return (
            <Link to={linkData.url} key={key}>
              <ListItem button>
                <Typography className={classes.other}>
                  {linkData.name}
                </Typography>
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
            <img
              className={classes.logo}
              src="/webix.iiitdmj.ac.in/tpclogo.png"
              alt="TPC"
            />
          </Link>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon className={classes.menuIcon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor={"right"} open={drawerOpen} onClose={toggleDrawer}>
        {drawerList}
      </Drawer>
    </div>
  );
};

export default Nav;
