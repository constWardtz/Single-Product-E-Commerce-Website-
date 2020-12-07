import React from "react";
import { IconButton } from "@material-ui/core";
import { OnMobileIcon } from "../Navbar/style";
import MenuIcon from "@material-ui/icons/Menu";

const ToggleMenu = ({ handleOnClick }) => {
  return (
    <div>
      <OnMobileIcon onClick={handleOnClick}>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </OnMobileIcon>
    </div>
  );
};

export default ToggleMenu;
