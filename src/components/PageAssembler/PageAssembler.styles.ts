import { createStyles, makeStyles } from "@material-ui/core";
import { Theme } from "../../theme";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden"
    },
    gridList: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: "0 0 7px 0 rgba(200, 200, 200, 0.5)",
      width: "100%",
      margin: "0 0 25px !important",
      padding: "10px"
    },
    gridListTileBar: {
      height: 38,
      backgroundColor: theme.additionalPalette.light,
      ["& .MuiGridListTileBar-title"]: {
        fontSize: "0.9rem",
        whiteSpace: "inherit",
        lineHeight: "17px"
      }
    },
    listSubheader: {
      position: "relative",
      padding: 0,
      fontSize: "1rem",
      fontWeight: 400,
      ["&:before"]: {
        content: "''",
        display: "block",
        position: "absolute",
        left: 0,
        bottom: 10,
        width: 45,
        height: 2,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: theme.palette.primary.main
      }
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)"
    },
    item: {
      display: "block",
      width: "100%",
      height: "100%",
      ["& img"]: {
        opacity: 0.7,
        transition: "150ms"
      },
      ["&:hover img"]: {
        opacity: 1
      },
      // ["& .MuiGridListTileBar-title"]: {
      //   transition: "150ms"
      // },
      // ["&:hover .MuiGridListTileBar-title"]: {
      //   color: theme.additionalPalette.light
      // }
    }
  })
);
