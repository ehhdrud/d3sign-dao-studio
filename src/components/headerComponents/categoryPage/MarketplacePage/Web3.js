import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import "boxicons/css/boxicons.min.css";
import "../../../../styles/web3.css";

export default function Web3() {
  const { categoryLayoutChanged } = useContext(ToggleContext);

  return (
    <div className={`web3 ${categoryLayoutChanged ? "rearranged" : ""}`}>
      <h1>Web 3.0</h1>

      <div className="web3-event">
        <h2>
          <i className="bx bx-stats"></i>&nbsp;NFT
        </h2>

        <div className="list">
          <div className="list-title">
            <span className="genre">&nbsp;Cyberpunk Art</span>
            <span className="by">by</span>
            <span className="artist">R1N</span>
          </div>
          <ul>
            <li className="marketplace-li">
              <i class="bx bx-link-external"></i>
              <span className="marketplace-name">Mintsquare:</span>
              <a
                className="marketplace-link"
                href="https://mintsquare.io/zksync/ZkMechaSociety"
                target="_blank"
                rel="noreferrer noopener"
              >
                mintsquare.io/zksync/ZkMechaSociety
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
