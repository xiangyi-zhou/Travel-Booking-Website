import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components/macro";
import { MenuData } from "../data/MenuData";
import "../styles/Navbar.css";

import { Button } from "./Button";


const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
`;
const Logo = styled.a`
  ${NavLink}
  font-family: "Montserrat", sans-serif;
  font-family: "Pacifico", cursive;
  font-size: 1.8rem;

  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
`;
const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    background-size: contain;
    height: 30px;
    width: 35px;
    color: white;
    cursor: pointer;
    top: 0;
    right: 0;
    transform: translate(-20px, -2px);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -50px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggole }) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <nav className={navbar ? "navbar actives" : "navbar"}>
        <Logo>Travel War.</Logo>
        <MenuBars onClick={toggole} />
        <NavMenu>
          {MenuData.map((item, index) => (
            <NavMenuLinks to={item.links} key={index}>
              {item.title}
            </NavMenuLinks>
          ))}
        </NavMenu>
        <NavBtn>
          <Button to="/contact" primary="true">
            Contact Us
          </Button>
        </NavBtn>
      </nav>
    </>
  );
};

export default Navbar;
