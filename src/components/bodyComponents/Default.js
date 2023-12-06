import React, { useState, useEffect, useContext } from 'react';
import { ToggleContext } from '../../store/ToggleContext';
import { Link } from 'react-router-dom';
import { SyncLoader } from 'react-spinners';
import './styles/default.css';
import { MetasPageDefault } from '../../metadatas/metadatas';

import V1VI from '../../images/arts/resized_img/Resize_V1VI-00.webp';
import P0LA from '../../images/arts/resized_img/Resize_P0LA-00.webp';
import R0RO from '../../images/arts/resized_img/Resize_R0RO-00.webp';
import T0RI from '../../images/arts/resized_img/Resize_T0RI-00.webp';
import CHR1S from '../../images/arts/resized_img/Resize_CHR1S-00.webp';
import ZER1 from '../../images/arts/resized_img/Resize_ZER1-00.webp';
import J1N from '../../images/arts/resized_img/Resize_J1N-00.webp';
import MIRR0R from '../../images/arts/resized_img/Resize_MIRR0R-00.webp';
import PAUL0 from '../../images/arts/resized_img/Resize_PAUL0-00.webp';
import R1N from '../../images/arts/resized_img/Resize_R1N-00.webp';

const imageFiles = [V1VI, P0LA, R0RO, T0RI, CHR1S, ZER1, J1N, MIRR0R, PAUL0, R1N];

const arts = [
    {
        path: imageFiles[0],
        artist: 'V1VI',
        genre: 'Collage Art',
    },
    {
        path: imageFiles[1],
        artist: 'P0LA',
        genre: 'Pop Art',
    },
    {
        path: imageFiles[2],
        artist: 'R0RO',
        genre: 'Pattern Fabric Art',
    },
    {
        path: imageFiles[3],
        artist: 'T0RI',
        genre: 'Anime Art',
    },
    {
        path: imageFiles[4],
        artist: 'CHR1S',
        genre: 'Cubism',
    },
    {
        path: imageFiles[5],
        artist: 'ZER1',
        genre: 'Pixel Art',
    },
    {
        path: imageFiles[6],
        artist: 'J1N',
        genre: 'Abstractism',
    },
    {
        path: imageFiles[7],
        artist: 'MIRR0R',
        genre: 'Watercolor',
    },
    {
        path: imageFiles[8],
        artist: 'PAUL0',
        genre: 'Expressionism',
    },
    {
        path: imageFiles[9],
        artist: 'R1N',
        genre: 'Cyberpunk Art',
    },
];

function Default() {
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
        <div className={`default ${categoryLayoutChanged ? 'rearranged' : ''}`}>
            <MetasPageDefault></MetasPageDefault>
            {imagesLoaded ? (
                <>
                    <div className="intro">
                        <span className="intro-item-1">A Community of</span>
                        <span className="intro-item-2">&nbsp;10 Passionate</span>
                        <span className="intro-item-3">&nbsp;Graphic Design Artists .</span>
                    </div>
                    <div className="gallery-container">
                        {arts.map((art, index) => (
                            <Link
                                className="link"
                                key={`artist-${index}`}
                                to={`/artsandartists/${art.artist}`}
                            >
                                <div className="art-card">
                                    <div className="art-img-container">
                                        <img
                                            className="art-img"
                                            src={art.path}
                                            alt={`${art.artist} 's artwork`}
                                        />
                                        <div className="genre-on-img">{art.genre}</div>
                                        <div className="artist-on-img">{art.artist}</div>
                                    </div>
                                </div>
                            </Link>
                        ))}
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

export default React.memo(Default);
