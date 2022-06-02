import { faBars, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Container,
  HamburgerText,
  HeadLine,
  ThemeSwitcher,
  HamburgerContainer,
} from "./Header.component.styles";
import React from "react";

interface HeaderProps {
  switchTheme: () => void;
}

const Header = ({ switchTheme }: HeaderProps) => {
  return (
    <Container>
      <HamburgerContainer>
        <FontAwesomeIcon icon={faBars} />
        <HamburgerText>Menu</HamburgerText>
        <ThemeSwitcher onClick={switchTheme}>
          <FontAwesomeIcon icon={faMoon} />
        </ThemeSwitcher>
      </HamburgerContainer>
      <HeadLine>Today</HeadLine>
    </Container>
  );
};

export default Header;
