import React from "react";
import Toggle from "./headerComponents/Toggle";
import Category from "./headerComponents/Category";
import Logo from "./headerComponents/Logo";
import Sns from "./headerComponents/Sns";
import "../styles/header.css";

export default function Header(props) {
  return (
    <nav className="header">
      {/* <div className="top"> */}
      <Toggle />
      <Logo />
      <Sns />
      {/* </div> */}
      <Category />
    </nav>
  );
}
