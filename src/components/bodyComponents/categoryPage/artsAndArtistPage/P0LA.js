import React, { useContext } from 'react';
import { ToggleContext } from '../../../../store/ToggleContext';
import Carousel from './artsAndArtistPageElements/Carousel';
import image1 from '../../../../images/arts/P0LA/P0LA-00.webp';
import image2 from '../../../../images/arts/P0LA/P0LA-01.webp';
import image3 from '../../../../images/arts/P0LA/P0LA-02.webp';
import image4 from '../../../../images/arts/P0LA/P0LA-03.webp';
import image5 from '../../../../images/arts/P0LA/P0LA-04.webp';
import './styles/artsAndArtistsPage.css';

const imagePaths = [image1, image2, image3, image4, image5];

export default function P0LA() {
    const { categoryLayoutChanged } = useContext(ToggleContext);

    return (
        <div className={`artist-page-container ${categoryLayoutChanged ? 'rearranged' : ''}`}>
            <h1 className="artist-page-title">P0LA</h1>
            <p className="description">
                The vivid pop art works of P0LA capture the spirit of popular culture with a fresh
                perspective. P0LA examines topics of consumerism and mass media via vibrant colors
                and recognizable iconography, turning the ordinary into spectacular.
            </p>
            <Carousel imagePaths={imagePaths} />
        </div>
    );
}
