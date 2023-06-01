import linktreeIcon from "../images/linktree.svg";
import discordIcon from "../images/discord.svg";
import twitterIcon from "../images/twitter.svg";
import instagramIcon from "../images/instagram.svg";
import mediumIcon from "../images/medium.svg";
import "../styles/sns.css";

export default function Sns() {
  return (
    <div className="sns">
      <div className="line-1">
        <a
          href="https://linktr.ee/d3signdaostudio"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={linktreeIcon} alt="linktree" />
        </a>
      </div>
      <div className="line-2">
        <a
          href="https://discord.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={discordIcon} alt="Discord" />
        </a>
        <a
          href="https://twitter.com/D3signDao"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a
          href="https://www.instagram.com/d3sign_dao/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
        <a href="https://medium.com/" target="_blank" rel="noreferrer noopener">
          <img src={mediumIcon} alt="Medium" />
        </a>
      </div>
    </div>
  );
}
