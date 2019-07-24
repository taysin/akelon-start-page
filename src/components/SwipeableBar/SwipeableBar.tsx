import React, { FunctionComponent } from "react";
import GridList from "@material-ui/core/GridList";
import Swipeable from "./SwipeableBar.styled";
import useStyles from "./SwibeableBar.useStyles";
import { Props } from "./types";

const SwipeableBar: FunctionComponent<Props> = ({ children, breakpoints }) => {
  const classes = useStyles();

  return (
    <Swipeable className={classes.root} breakpoints={breakpoints}>
      <GridList className={classes.gridList}>{children}</GridList>
    </Swipeable>
  );
};

export default SwipeableBar;
