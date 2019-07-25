import React, { FC } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import { Item } from "../../store/getStore";
import { useBreakpoints } from "./hooks";

interface Props {
  store: Item[];
}

const useStyles = makeStyles((theme: Theme) =>
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
    icon: {
      color: "rgba(255, 255, 255, 0.54)"
    }
  })
);

const getRandomColor = () => {
  const colors = [
    "#d75c56",
    "#8a5194",
    "#5a7cb4",
    "#74916f",
    "#796974",
    "#8c6870",
    "#614746",
    "#688a5c",
    "#8b6001"
  ];

  return colors[Math.floor(Math.random() * 8)];
};

const tileData = [
  {
    img: `http://placehold.it/250x250/${getRandomColor()}`,
    title: "Image",
    author: "author"
  },
  {
    img: `http://placehold.it/250x250/${getRandomColor()}`,
    title: "Image",
    author: "author"
  },
  {
    img: `http://placehold.it/250x250/${getRandomColor()}`,
    title: "Image",
    author: "author"
  },
  {
    img: `http://placehold.it/250x250/${getRandomColor()}`,
    title: "Image",
    author: "author"
  },
  {
    img: `http://placehold.it/250x250/${getRandomColor()}`,
    title: "Image",
    author: "author"
  },
  {
    img: `http://placehold.it/250x250/${getRandomColor()}`,
    title: "Image",
    author: "author"
  }
];

const PageAssembler: FC<Props> = ({ store }) => {
  const classes = useStyles();
  const breakpoint = useBreakpoints();
  const cols = { xxs: 1, xs: 2, sm: 3, md: 4, lg: 5, xl: 5 };

  return (
    <div className={classes.root}>
      <GridList cols={cols[breakpoint]} className={classes.gridList}>
        <GridListTile
          key="Subheader"
          cols={cols[breakpoint]}
          style={{ height: "auto" }}
        >
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map((tile: any) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      <GridList cols={cols[breakpoint]} className={classes.gridList}>
        <GridListTile
          key="Subheader"
          cols={cols[breakpoint]}
          style={{ height: "auto" }}
        >
          <ListSubheader component="div">December</ListSubheader>
        </GridListTile>
        {tileData.map((tile: any) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${tile.title}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default PageAssembler;
