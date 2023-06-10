import React, { useContext } from "react";
import { ToggleContext } from "../ToggleContext";
import linktreeIcon from "../images/linktree.svg";
import discordIcon from "../images/discord.svg";
import twitterIcon from "../images/twitter.svg";
import instagramIcon from "../images/instagram.svg";
import mediumIcon from "../images/medium.svg";
import "../styles/sns.css";

export default function Sns() {
  const { categoryLayoutChanged } = useContext(ToggleContext);

  return (
    <div className={`sns ${categoryLayoutChanged ? "rearranged" : ""}`}>
      {/* <p className="sns-text">Sns</p> */}
      <div className="sns-a-container">
        <a
          className={`${categoryLayoutChanged ? "rearranged" : ""}`}
          href="https://linktr.ee/d3signdaostudio"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="linktree" src={linktreeIcon} alt="linktree" />
        </a>
        <a
          className={`${categoryLayoutChanged ? "rearranged" : ""}`}
          href="https://discord.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={discordIcon} alt="Discord" />
        </a>
        <a
          className={`${categoryLayoutChanged ? "rearranged" : ""}`}
          href="https://twitter.com/D3signDao"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a
          className={`${categoryLayoutChanged ? "rearranged" : ""}`}
          href="https://www.instagram.com/d3sign_dao/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a
          className={`${categoryLayoutChanged ? "rearranged" : ""}`}
          href="https://medium.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={mediumIcon} alt="Medium" />
        </a>
      </div>
    </div>
  );
}
