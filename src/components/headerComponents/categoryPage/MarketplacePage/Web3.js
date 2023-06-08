import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import "boxicons/css/boxicons.min.css";
import "../../../../styles/web3.css";

export default function Web3() {
  const { deleteCategoryLayout, categoryLayoutChanged } =
    useContext(ToggleContext);

  const handleClick = (event) => {
    deleteCategoryLayout(event);
  };

  return (
    <div
      className={`web3 ${categoryLayoutChanged ? "rearranged" : ""}`}
      onClick={handleClick}
    >
      <h1>Web 3.0</h1>

      <div className="web3-event">
        <h2>
          <i className="bx bx-stats"></i>&nbsp;NFT
        </h2>

        <div className="list">
          <div className="list-title">
            <span className="genre">Cyberpunk Art</span>
            <span className="by">by</span>
            <span className="artist">R1N</span>
          </div>
          <ul>
            <li className="marketplace-li">
              <i class="bx bx-link-external"></i>
              <a
                className="marketplace-link"
                href="https://mintsquare.io/zksync/ZkMechaSociety"
                target="_blank"
                rel="noreferrer noopener"
              >
                mintsquare.io/ZkMechaSociety
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="web3-event">
        <h2>
          <i className="bx bx-cube-alt"></i>&nbsp;Metaverse
        </h2>
      </div>
    </div>
  );
}
