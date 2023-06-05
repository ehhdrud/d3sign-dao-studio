import React, { useContext } from "react";
import { ToggleContext } from "../../../../ToggleContext";
import "../../../../styles/web3.css";

export default function Web3() {
  const { categoryLayoutChanged } = useContext(ToggleContext);

  return (
    <div className={`web3 ${categoryLayoutChanged ? "rearranged" : ""}`}>
      <h1>Web3 market</h1>
      <a
        className="marketplace-link"
        href="https://mintsquare.io/zksync/ZkMechaSociety"
        target="_blank"
        rel="noreferrer noopener"
      >
        R1N - Web3 - Mintsquare
      </a>
    </div>
  );
}
