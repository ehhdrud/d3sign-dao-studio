import React from "react";
import Category from "./Category";
import Logo from "./Logo";
import "../styles/Header.css";

export default function Header(props) {
  return (
    <div className="header">
      <Logo />
      <Category />
    </div>
  );
}
