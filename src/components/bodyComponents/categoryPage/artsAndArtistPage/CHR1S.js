import React, { useContext } from 'react';
import { ToggleContext } from '../../../../store/ToggleContext';
import Carousel from './artsAndArtistPageElements/Carousel';
import image1 from '../../../../images/arts/CHR1S/CHR1S-00.webp';
import image2 from '../../../../images/arts/CHR1S/CHR1S-01.webp';
import image3 from '../../../../images/arts/CHR1S/CHR1S-02.webp';
import image4 from '../../../../images/arts/CHR1S/CHR1S-03.webp';
import image5 from '../../../../images/arts/CHR1S/CHR1S-04.webp';
import image6 from '../../../../images/arts/CHR1S/CHR1S-05.webp';
import image7 from '../../../../images/arts/CHR1S/CHR1S-06.webp';
import './styles/artsAndArtistsPage.css';

const imagePaths = [image1, image2, image3, image4, image5, image6, image7];

export default function CHR1S() {
    const { categoryLayoutChanged } = useContext(ToggleContext);

    return (
        <div className={`artist-page-container ${categoryLayoutChanged ? 'rearranged' : ''}`}>
            <h1 className="artist-page-title">CHR1S</h1>
            <p className="description">
                CHR1S's artwork dissects and reassembles visual components to produce arresting,
                three-dimensional compositions, drawing inspiration from early cubists. CHR1S
                presents a novel viewpoint on reality which promotes reflection through disjointed
                patterns and abstract shapes.
            </p>
            <Carousel imagePaths={imagePaths} />
        </div>
    );
}
