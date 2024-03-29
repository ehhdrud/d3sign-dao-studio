import React, { useContext } from 'react';
import { ToggleContext } from '../../../../store/ToggleContext';
import Carousel from './artsAndArtistPageElements/Carousel';
import image1 from '../../../../images/arts/T0RI/T0RI-00.webp';
import image2 from '../../../../images/arts/T0RI/T0RI-01.webp';
import image3 from '../../../../images/arts/T0RI/T0RI-02.webp';
import image4 from '../../../../images/arts/T0RI/T0RI-03.webp';
import image5 from '../../../../images/arts/T0RI/T0RI-04.webp';
import image6 from '../../../../images/arts/T0RI/T0RI-05.webp';
import './styles/artsAndArtistsPage.css';

const imagePaths = [image1, image2, image3, image4, image5, image6];

export default function T0RI() {
    const { categoryLayoutChanged } = useContext(ToggleContext);

    return (
        <div className={`artist-page-container ${categoryLayoutChanged ? 'rearranged' : ''}`}>
            <h1 className="artist-page-title">T0RI</h1>
            <p className="description">
                With simple and alluring artwork, T0RI brings the world of anime to life. T0RI's
                artwork, which draws inspiration from Japanese animation and manga, has vibrant
                storyline and dynamic characters that are appealing to both art lovers and anime
                fans.
            </p>
            <Carousel imagePaths={imagePaths} />
        </div>
    );
}
