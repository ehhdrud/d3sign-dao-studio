import React, { useContext } from "react";
import { ToggleContext } from "../ToggleContext";
import Toggle from "./headerComponents/Toggle";
import Logo from "./headerComponents/Logo";
import Category from "./headerComponents/Category";
import "../styles/header.css";
import SnsBox from "./headerComponents/SnsBox";

export default function Header() {
  const { deleteCategoryLayout, categoryLayoutChanged } =
    useContext(ToggleContext);

  const handleClick = (event) => {
    deleteCategoryLayout(event);
  };

  return (
    <nav
      className={`header ${categoryLayoutChanged ? "rearranged" : ""}`}
      onClick={handleClick}
    >
      <Logo />
      <Category />
      <SnsBox />
      <Toggle />
    </nav>
  );
}
