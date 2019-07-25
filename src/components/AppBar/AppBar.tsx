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

const Logo = styled("img")({
  maxHeight: 60,
  padding: 10
});

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    marginBottom: 20
  },
  title: {
    flexGrow: 1
  },
  appBarRoot: {
    backgroundColor: "#fff"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  }
});

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarRoot} position="static">
        <Toolbar className={classes.toolbar}>
          <Logo src="/img/logo_alt.png" alt="Akelon" />
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
