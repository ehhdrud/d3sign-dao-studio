import React, { useContext } from "react";
import { ToggleContext } from "../ToggleContext";
import Sns from "./Sns";
import "../styles/footer.css";

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
      <div className="container copyright">
        <p className="title">Copyright</p>
        <p className="text text-main">
          © 2023 D3sign DAO Studio. All rights reserved.
        </p>
        <p className="text text-sub">
          This website and its content are protected by copyright law.
        </p>
      </div>

      <div className="container contact">
        <p className="title">Contact</p>
        <p className="text contact-text">
          If you have any questions, please contact me via Instagram DM or
          email.
        </p>
        <p className="via instagram">instagram.com/d3sign_dao</p>
        <p className="via email">d3signdaostudio@gmail.com</p>
      </div>

      <Sns />
    </div>
  );
}
