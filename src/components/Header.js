import React from "react";
import Category from "./headerComponents/Category";
import Logo from "./headerComponents/Logo";
import Sns from "./headerComponents/Sns";
import "../styles/Header.css";

export default function Header(props) {
  return (
    <div className="header">
      <Logo />
      <Category />
      <Sns />
    </div>
  );
}
