import React, { useContext, useState, useEffect } from 'react';
import { ToggleContext } from '../../../store/ToggleContext';
import { Link } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import './styles/marketplace.css';

import goodsImg from '../../../images/goods-img.jpg';
import homedecorImg from '../../../images/homedecor-img.jpg';
import web3Img from '../../../images/web3-img.jpg';

const imageFiles = [homedecorImg, goodsImg, web3Img];

export default function Marketplace() {
    const { categoryLayoutChanged } = useContext(ToggleContext);

    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const imagePromises = imageFiles.map((file) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = file;
                img.onload = () => resolve();
            });
        });
        Promise.all(imagePromises).then(() => {
            setImagesLoaded(true);
        });
    }, []);

    return (
        <div className={`marketplace ${categoryLayoutChanged ? 'rearranged' : ''}`}>
            {imagesLoaded ? (
                <>
                    <div className="marketplace-category">
                        <Link
                            to="/marketplace/web3"
                            className="marketplace-category-button web3-container"
                        >
                            <div className="img-container">
                                <img className="web3-img" src={imageFiles[2]} alt="web3" />
                            </div>

                            <div className="marketplace-category-button-text web3-text">
                                Web 3.0
                            </div>
                        </Link>

                        <Link
                            to="/marketplace/goods"
                            className="marketplace-category-button goods-container"
                        >
                            <div className="img-container">
                                <img className="goods-img" src={imageFiles[1]} alt="goods" />
                            </div>
                            <div className="marketplace-category-button-text goods-text">Goods</div>
                        </Link>

                        <Link
                            to="/marketplace/homedecor"
                            className="marketplace-category-button homedecor-container"
                        >
                            <div className="img-container">
                                <img
                                    className="homedecor-img"
                                    src={imageFiles[0]}
                                    alt="homedecor"
                                />
                            </div>
                            <div className="marketplace-category-button-text homedecor-text">
                                Home decor
                            </div>
                        </Link>
                    </div>
                </>
            ) : (
                <div className="loading">
                    <SyncLoader color={'#36d7b7'} size={7} />
                </div>
            )}
        </div>
    );
}
