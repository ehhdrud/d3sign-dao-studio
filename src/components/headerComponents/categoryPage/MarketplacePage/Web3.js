import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import "../../../../styles/web3.css";

export default function Web3() {
  const { categoryLayoutChanged } = useContext(ToggleContext);

  return (
    <div className={`web3 ${categoryLayoutChanged ? "rearranged" : ""}`}>
      <h1>Web 3.0 marketplace</h1>
      <h2># NFT</h2>
      <a
        className="marketplace-link"
        href="https://mintsquare.io/zksync/ZkMechaSociety"
        target="_blank"
        rel="noreferrer noopener"
      >
        Mintsquare
      </a>
      <h2># Metaverse</h2>
    </div>
  );
}
