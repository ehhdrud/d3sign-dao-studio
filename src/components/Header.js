import React, { useContext } from "react";
import { ToggleContext } from "../ToggleContext";
import Toggle from "./headerComponents/Toggle";
import Logo from "./headerComponents/Logo";
import Category from "./headerComponents/Category";
import "../styles/header.css";

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
      <Toggle />
      <Logo />
      <Category />
    </nav>
  );
}
