import React, { useContext } from 'react';
import { ToggleContext } from '../../../../store/ToggleContext';
import './styles/marketplacePage.css';
import T0RI from '../../../../images/arts/T0RI/T0RI-00.webp';
import R1N from '../../../../images/arts/R1N/R1N-00.webp';

export default function Goods() {
    const { categoryLayoutChanged } = useContext(ToggleContext);

    return (
        <div className={`marketplace-page ${categoryLayoutChanged ? 'rearranged' : ''}`}>
            <h1>Goods</h1>

            <div className="marketplace-title">
                <span className="artist">T0RI</span>
                <span className="genre">Anime Art</span>
            </div>
            <div className="marketplace-items">
                <div className="marketplace-item">
                    <a
                        className="marketplace-link"
                        href="https://oround.com/torianimeartist"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <img className="marketplace-img" src={T0RI} alt="Anime Art by T0RI" />
                        <p className="marketplace-name">Oround</p>
                    </a>
                </div>
            </div>

            <div className="marketplace-title">
                <span className="artist">R1N</span>
                <span className="genre">Cyberpunk Art</span>
            </div>
            <div className="marketplace-items">
                <div className="marketplace-item">
                    <a
                        className="marketplace-link"
                        href="https://www.redbubble.com/people/MechaSociety/explore?asc=u&page=1&sortOrder=recent"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <img className="marketplace-img" src={R1N} alt="Cyberfunk Art by R1N" />
                        <p className="marketplace-name">Redbubble</p>
                    </a>
                </div>

                <div className="marketplace-item">
                    <a
                        className="marketplace-link"
                        href="https://marpple.shop/artist_r1n?page=0"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <img className="marketplace-img" src={R1N} alt="Cyberfunk Art by R1N" />
                        <p className="marketplace-name">Marpple Shop</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
