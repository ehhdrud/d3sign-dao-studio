import React, { useContext } from 'react';
import { ToggleContext } from '../../../../store/ToggleContext';
import Carousel from './artsAndArtistPageElements/Carousel';
import image1 from '../../../../images/arts/MIRR0R/MIRR0R-00.webp';
import image2 from '../../../../images/arts/MIRR0R/MIRR0R-01.webp';
import image3 from '../../../../images/arts/MIRR0R/MIRR0R-02.webp';
import image4 from '../../../../images/arts/MIRR0R/MIRR0R-03.webp';
import image5 from '../../../../images/arts/MIRR0R/MIRR0R-04.webp';
import image6 from '../../../../images/arts/MIRR0R/MIRR0R-05.webp';
import './styles/artsAndArtistsPage.css';

const imagePaths = [image1, image2, image3, image4, image5, image6];

export default function MIRR0R() {
    const { categoryLayoutChanged } = useContext(ToggleContext);

    return (
        <div className={`artist-page-container ${categoryLayoutChanged ? 'rearranged' : ''}`}>
            <h1 className="artist-page-title">MIRR0R</h1>
            <p className="description">
                Watercolor paintings by MIRR0R are serene and graceful, with delicate colors
                blending and dancing over the surface. MIRR0R captures the transient beauty of
                nature and the complexities of human emotion by expertly managing the fluidity of
                the medium.
            </p>
            <Carousel imagePaths={imagePaths} />
        </div>
    );
}
