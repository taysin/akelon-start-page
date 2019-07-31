import React, { FC } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Item, Store } from "../../store/types";
import { useBreakpoints } from "./hooks";
import { useStyles } from "./PageAssembler.styles";
import Img from "../Img";

interface Props {
  store: Store;
}

const getImgUrl = (item: Item) =>
  item.img ? `/img/content/${item.img}` : `http://placehold.it/300x157/`;

const PageAssembler: FC<Props> = ({ store }) => {
  const classes = useStyles();
  const breakpoint = useBreakpoints();
  const cols = { xxs: 1, xs: 2, sm: 3, md: 4, lg: 5, xl: 5 };

  return (
    <div className={classes.root}>
      {store.map(storeItem => (
        <GridList
          key={storeItem.id}
          cols={cols[breakpoint]}
          className={classes.gridList}
        >
          <GridListTile
            key="Subheader"
            cols={cols[breakpoint]}
            style={{ height: "auto" }}
          >
            <ListSubheader className={classes.listSubheader} component="div">
              {storeItem.title}
            </ListSubheader>
          </GridListTile>
          {storeItem.items.map((item: Item) => (
            <GridListTile key={item.id}>
              <a
                href={item.url}
                className={classes.item}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Img src={getImgUrl(item)} alt={item.description} />
                <GridListTileBar
                  title={item.name}
                  className={classes.gridListTileBar}
                />
              </a>
            </GridListTile>
          ))}
        </GridList>
      ))}
    </div>
  );
};

export default PageAssembler;
