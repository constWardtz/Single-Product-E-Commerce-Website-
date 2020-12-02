import React, { useState } from "react";

import {
  Header,
  HeaderMiddle,
  HeaderTop,
  Input,
  Logo,
  SearchButton,
  Menu,
  HeaderBottom,
  MenuItem,
  ButtonContainer,
  MenuContainer,
} from "./style";

import { NavBarContact } from "./Data";

import { Badge, IconButton } from "@material-ui/core";

import { Link } from "react-router-dom";

/* Icon */
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CallIcon from "@material-ui/icons/Call";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";

import MenuDropDown from "../Menu/MenuDropDown";
import ToggleMenu from "../Menu/ToggleMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Header>
      <HeaderTop>
        <Menu>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Products</li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>About</li>
          </Link>
        </Menu>
        <ul>
          <li>
            <CallIcon />
            &nbsp;&nbsp;{NavBarContact.phone}
          </li>
          <li>
            <MailOutlineIcon />
            &nbsp;&nbsp;{NavBarContact.email}
          </li>
        </ul>
      </HeaderTop>

      <HeaderMiddle>
        <ul>
          <li>
            <Logo />
          </li>
        </ul>
        <ul>
          <Input>
            <input type="text" placeholder="Search products.." />
            <SearchButton>
              <SearchIcon />
            </SearchButton>
          </Input>
        </ul>
        <ul>
          <li>
            <IconButton>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon
                  style={{
                    fontSize: "2.3rem",
                    color: "var(--secondary-color)",
                    cursor: "pointer",
                    hover: { color: "var(--primary-color)" },
                  }}
                />
              </Badge>
            </IconButton>
          </li>
        </ul>
      </HeaderMiddle>
      <HeaderBottom>
        <MenuContainer>
          <ToggleMenu handleOnClick={handleOnClick} />
          <ButtonContainer isOpen={isOpen}>
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
        </MenuContainer>
      </HeaderBottom>
    </Header>
  );
};

export default Navbar;
