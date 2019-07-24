import React, { FunctionComponent } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import Swipeable from "./SwipeableBar.styled";
import { Props } from "./types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
    },
    gridList: {
      flexWrap: "nowrap",
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: "translateZ(0)",
      margin: '0 !important'
    },
    title: {
      color: theme.palette.primary.light
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
    }
  })
);

const SwipeableBar: FunctionComponent<Props> = ({ children, breakpoints }) => {
  const classes = useStyles();

  return (
    <Swipeable className={classes.root} breakpoints={breakpoints}>
      <GridList className={classes.gridList}>{children}</GridList>
    </Swipeable>
  );
};

export default SwipeableBar;
