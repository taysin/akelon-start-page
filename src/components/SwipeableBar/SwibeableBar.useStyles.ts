import { makeStyles } from "@material-ui/core";

export default makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome.
    // This cost memory but helps keeping high FPS.
    transform: "translateZ(0)",
    margin: "0 !important"
  }
});
