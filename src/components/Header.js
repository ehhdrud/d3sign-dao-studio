import React, { useContext } from "react";
import { ToggleContext } from "../ToggleContext";
import Toggle from "./headerComponents/Toggle";
import Logo from "./headerComponents/Logo";
import Category from "./headerComponents/Category";
import Sns from "./headerComponents/Sns";
import "../styles/header.css";

export default function Header() {
  const { deleteCategoryLayout } = useContext(ToggleContext);

  const handleClick = () => {
    deleteCategoryLayout();
  };

  return (
    <nav className="header" onClick={handleClick}>
      <Toggle />
      <Logo />
      <Category />
      <Sns />
    </nav>
  );
}
