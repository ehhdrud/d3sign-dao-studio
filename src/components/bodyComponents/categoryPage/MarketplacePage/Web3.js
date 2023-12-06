import React, { useContext } from 'react';
import { ToggleContext } from '../../../../store/ToggleContext';
import './styles/marketplacePage.css';
import R1N from '../../../../images/arts/R1N/R1N-00.webp';

export default function Web3() {
    const { categoryLayoutChanged } = useContext(ToggleContext);

    return (
        <div className={`marketplace-page ${categoryLayoutChanged ? 'rearranged' : ''}`}>
            <h1>NFT</h1>
            <div className="marketplace-title">
                <span className="artist">R1N</span>
                <span className="genre">Cyberpunk Art</span>
            </div>

            <div className="marketplace-items">
                <div className="marketplace-item">
                    <a
                        className="marketplace-link"
                        href="https://mintsquare.io/zksync/ZkMechaSociety"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <img className="marketplace-img" src={R1N} alt="Cyberfunk Art by R1N" />
                        <p className="marketplace-name">Mintsquare</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
