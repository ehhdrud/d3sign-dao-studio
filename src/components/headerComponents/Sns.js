import discordIcon from "../../images/discord.svg";
import twitterIcon from "../../images/twitter.svg";
import instagramIcon from "../../images/instagram.svg";
import mediumIcon from "../../images/medium.svg";
import "../../styles/sns.css";

export default function Sns() {
  return (
    <div className="sns">
      <a href="https://discord.com/" target="_blank">
        <img src={discordIcon} alt="Discord" />
      </a>
      <a href="https://twitter.com/" target="_blank">
        <img src={twitterIcon} alt="Twitter" />
      </a>
      <a href="https://www.instagram.com" target="_blank">
        <img src={instagramIcon} alt="Instagram" />
      </a>
      <a href="https://medium.com/" target="_blank">
        <img src={mediumIcon} alt="Medium" />
      </a>
    </div>
  );
}
