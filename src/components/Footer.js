import React, { useContext } from "react";
import { ToggleContext } from "../ToggleContext";
import Sns from "./footerComponents/Sns";
import "../styles/footer.css";
import logo from "../images/logo.jpg";

export default function Footer() {
  const { deleteCategoryLayout, categoryLayoutChanged } =
    useContext(ToggleContext);

  const handleClick = (event) => {
    deleteCategoryLayout(event);
  };

  return (
    <div
      className={`footer ${categoryLayoutChanged ? "rearranged" : ""}`}
      onClick={handleClick}
    >
      <div className="logo-and-text">
        <img className="logo" src={logo} alt="logo" />
        <p className="text">
          © 2023 D3sign DAO Studio. All rights reserved.
          <br />
          Contact us: Instagram or d3signdaostudio@gmail.com
        </p>
      </div>
      <Sns />
    </div>
  );
}
