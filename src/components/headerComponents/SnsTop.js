import React from "react";
import linktreeTextIcon from "../../images/linktree-with-text.svg";
import discordIcon from "../../images/discord.svg";
import twitterIcon from "../../images/twitter.svg";
import instagramIcon from "../../images/instagram.svg";
import mediumIcon from "../../images/medium.svg";
import "./styles/sns-top.css";

export default function SnsTop() {
  return (
    <div className="snsbox">
      <div className="linktree-container">
        <a
          href="https://linktr.ee/d3signdaostudio"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="linktree" src={linktreeTextIcon} alt="Linktree" />
        </a>
      </div>
      <div className="another-container">
        <a
          href="https://discord.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="discord" src={discordIcon} alt="Discord" />
        </a>
        <a
          href="https://twitter.com/D3signDao"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="twitter" src={twitterIcon} alt="Twitter" />
        </a>
        <a
          href="https://www.instagram.com/d3sign_dao/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img className="instagram" src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://medium.com/" target="_blank" rel="noreferrer noopener">
          <img className="medium" src={mediumIcon} alt="Medium" />
        </a>
      </div>
    </div>
  );
}
