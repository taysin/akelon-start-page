import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from "@material-ui/core/IconButton";
import { Props } from "./types";

export default ({ icon, to }: Props) => {
  if (!to) {
    console.error(
      `Link to ${
        icon.iconName
      } not found in .env file. Please, fill .env file following that naming style: REACT_APP_${icon.iconName.toUpperCase()}_LINK=http://${icon.iconName}.com/akelon`
    );
    return null;
  }

  return (
    <a href={to} target="_blank" rel="noopener noreferrer" style={{color: "#fff"}}>
      <IconButton
        aria-label="Account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
      >
        <FontAwesomeIcon icon={icon} />
      </IconButton>
    </a>
  );
};
