import React, { useContext } from 'react';
import { ToggleContext } from '../../../store/ToggleContext';
import { Link } from 'react-router-dom';
import './styles/marketplace.css';
import { MetasPageMarketplace } from '../../../metadatas/metadatas';

import goodsImg from '../../../images/goods-img.jpg';
import homedecorImg from '../../../images/homedecor-img.jpg';
import web3Img from '../../../images/web3-img.jpg';

const imageFiles = [homedecorImg, goodsImg, web3Img];

function Marketplace() {
    const { categoryLayoutChanged } = useContext(ToggleContext);

    return (
        <div className={`marketplace ${categoryLayoutChanged ? 'rearranged' : ''}`}>
            <MetasPageMarketplace></MetasPageMarketplace>

            <div className="marketplace-category">
                <Link to="/marketplace/web3" className="marketplace-category-button web3-container">
                    <div className="img-container">
                        <img className="marketplace-main-img" src={imageFiles[2]} alt="web3" />
                    </div>

                    <div className="marketplace-category-button-text web3-text">Web 3.0</div>
                </Link>

                <Link
                    to="/marketplace/goods"
                    className="marketplace-category-button goods-container"
                >
                    <div className="img-container">
                        <img className="marketplace-main-img" src={imageFiles[1]} alt="goods" />
                    </div>
                    <div className="marketplace-category-button-text goods-text">Goods</div>
                </Link>

                <Link
                    to="/marketplace/homedecor"
                    className="marketplace-category-button homedecor-container"
                >
                    <div className="img-container">
                        <img className="marketplace-main-img" src={imageFiles[0]} alt="homedecor" />
                    </div>
                    <div className="marketplace-category-button-text homedecor-text">
                        Home decor
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default React.memo(Marketplace);
