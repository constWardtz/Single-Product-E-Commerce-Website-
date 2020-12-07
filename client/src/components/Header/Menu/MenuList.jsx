import { Link } from "react-router-dom";

import React from "react";
import { ButtonContainer, MenuItem } from "../Navbar/style";
import MenuDropDown from "./MenuDropDown";

const MenuList = () => {
  return (
    <div>
      <ButtonContainer>
        <MenuDropDown />
        <MenuItem>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Fashion</li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Bags</li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Swimwear</li>
          </Link>
        </MenuItem>
      </ButtonContainer>
    </div>
  );
};

export default MenuList;
