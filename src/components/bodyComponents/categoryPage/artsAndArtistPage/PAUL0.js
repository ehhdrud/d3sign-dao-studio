import React, { useContext } from 'react';
import { ToggleContext } from '../../../../store/ToggleContext';
import Carousel from './artsAndArtistPageElements/Carousel';
import image1 from '../../../../images/arts/PAUL0/PAUL0-00.webp';
import image2 from '../../../../images/arts/PAUL0/PAUL0-01.webp';
import image3 from '../../../../images/arts/PAUL0/PAUL0-02.webp';
import image4 from '../../../../images/arts/PAUL0/PAUL0-03.webp';
import image5 from '../../../../images/arts/PAUL0/PAUL0-04.webp';
import image6 from '../../../../images/arts/PAUL0/PAUL0-05.webp';
import image7 from '../../../../images/arts/PAUL0/PAUL0-06.webp';
import './styles/artsAndArtistsPage.css';

const imagePaths = [image1, image2, image3, image4, image5, image6, image7];

export default function PAUL0() {
    const { categoryLayoutChanged } = useContext(ToggleContext);

    return (
        <div className={`artist-page-container ${categoryLayoutChanged ? 'rearranged' : ''}`}>
            <h1 className="artist-page-title">PAUL0</h1>
            <p className="description">
                Through vivid colors and strong brushstrokes, Paul's expressionist artwork delves
                deeply into the human psyche, revealing raw emotions and untold stories. Paul's art
                challenges viewers to examine their own perceptions and experiences using a style
                that is both seductive and intriguing.
            </p>
            <Carousel imagePaths={imagePaths} />
        </div>
    );
}
