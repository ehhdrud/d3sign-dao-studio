import React, { useContext } from "react";
import { ToggleContext } from "../ToggleContext";
import "./styles/footer.css";
import logo from "../images/logo.jpg";
import SnsBottom from "./footerComponents/SnsBottom";

export default function Footer() {
  const { categoryLayoutChanged } = useContext(ToggleContext);

  return (
    <div className={`footer ${categoryLayoutChanged ? "rearranged" : ""}`}>
      <div className="logo-and-text">
        <img className="logo" src={logo} alt="logo" />
        <p className="text">
          © 2023 D3sign DAO Studio. All rights reserved.
          <br />
          Contact us: Instagram or d3signdaostudio@gmail.com
        </p>
      </div>
      <SnsBottom className="sns-component" />
    </div>
  );
}
