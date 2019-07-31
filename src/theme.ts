import { createMuiTheme } from "@material-ui/core/styles";
import { Theme as MUITheme } from "@material-ui/core/styles/createMuiTheme";

const primary = {
  main: "#fc3d6c"
};

const secondary = {
  main: "#8c92a4"
};

const additionalPalette = {
  light: "#06b7b7",
  main: "#3399ff",
  strong: "#9266c9",
  warning: "#fdbc30"
};

export interface Theme extends MUITheme {
  additionalPalette: {
    light: string;
    main: string;
    strong: string;
    warning: string;
  };
}

const ThemeObject = {
  palette: {
    primary,
    secondary
  },
  additionalPalette
};

export default createMuiTheme(ThemeObject);
