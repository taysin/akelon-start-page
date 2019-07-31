import React from "react";
import { makeStyles, styled } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SmmLink from "../SmmLink";
import SwipeableBar from "../SwipeableBar";
import {
  faFacebook,
  faVk,
  faInstagram,
  faSlack
} from "@fortawesome/free-brands-svg-icons";

const LINKS = {
  FACEBOOK: process.env.REACT_APP_FACEBOOK_LINK,
  VK: process.env.REACT_APP_VK_LINK,
  INSTAGRAM: process.env.REACT_APP_INSTAGRAM_LINK,
  SLACK: process.env.REACT_APP_SLACK_LINK
};

const Logo = styled("div")({
  maxHeight: 53,
  ["& img"]: {
    maxHeight: 53
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 20
  },
  title: {
    flexGrow: 1
  },
  appBarRoot: {
    background: "linear-gradient(45deg, rgba(255,255,255,1) 45%, rgba(252,61,109,1) 45%)",
    [theme.breakpoints.up('md')]: {
      background: "linear-gradient(45deg, rgba(255,255,255,1) 26%, rgba(252,61,109,1) 26%)"
    }
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarRoot} position="static">
        <Toolbar className={classes.toolbar}>
          <Logo>
            <img src="/img/logo_sign.png" alt="Akelon" />
          </Logo>
          <SwipeableBar breakpoints={[[400, 120]]}>
            <SmmLink icon={faFacebook} to={LINKS.FACEBOOK} />
            <SmmLink icon={faVk} to={LINKS.VK} />
            <SmmLink icon={faInstagram} to={LINKS.INSTAGRAM} />
            <SmmLink icon={faSlack} to={LINKS.SLACK} />
          </SwipeableBar>
        </Toolbar>
      </AppBar>
    </div>
  );
};
