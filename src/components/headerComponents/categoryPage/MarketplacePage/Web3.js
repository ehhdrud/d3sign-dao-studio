import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import "../../../../styles/web3.css";

export default function Web3() {
  const { categoryLayoutChanged } = useContext(ToggleContext);

  return (
    <div className={`web3 ${categoryLayoutChanged ? "rearranged" : ""}`}>
      <h1>Web 3.0</h1>
      <h2>
        <i class="bx bx-stats"></i>&nbsp;NFT
      </h2>
      <details>
        <summary>
          <span className="genre">&nbsp;Cyberpunk Art</span>
          <span className="by">by</span>
          <span className="artist">R1N</span>
        </summary>
        <div>
          <a
            className="marketplace-link"
            href="https://mintsquare.io/zksync/ZkMechaSociety"
            target="_blank"
            rel="noreferrer noopener"
          >
            Mintsquare
          </a>
        </div>
      </details>

      <h2>
        <i class="bx bx-cube-alt"></i>&nbsp;Metaverse
      </h2>
    </div>
  );
}
