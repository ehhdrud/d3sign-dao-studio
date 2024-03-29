import React, { useContext } from 'react';
import { ToggleContext } from '../../../store/ToggleContext';
import { Link } from 'react-router-dom';
import './styles/artsAndArtists.css';
import { MetasPageArtsAndArtists } from '../../../metadatas/metadatas';

import V1VI from '../../../images/arts/V1VI/V1VI-01.webp';
import P0LA from '../../../images/arts/P0LA/P0LA-01.webp';
import R0RO from '../../../images/arts/R0RO/R0RO-01.webp';
import T0RI from '../../../images/arts/T0RI/T0RI-01.webp';
import CHR1S from '../../../images/arts/CHR1S/CHR1S-01.webp';
import ZER1 from '../../../images/arts/ZER1/ZER1-01.webp';
import J1N from '../../../images/arts/J1N/J1N-01.webp';
import MIRR0R from '../../../images/arts/MIRR0R/MIRR0R-01.webp';
import PAUL0 from '../../../images/arts/PAUL0/PAUL0-01.webp';
import R1N from '../../../images/arts/R1N/R1N-01.webp';

function ArtAndArtists() {
    const { categoryLayoutChanged } = useContext(ToggleContext);

    return (
        <div className={`artists ${categoryLayoutChanged ? 'rearranged' : ''}`}>
            <MetasPageArtsAndArtists></MetasPageArtsAndArtists>

            <div>
                <h1>Arts and artists</h1>
                <Link to={`/artsandartists/V1VI`} className="link">
                    <div className="container">
                        <div className="img-container">
                            <img className="main-img" src={V1VI} alt="V1VI" />
                        </div>
                        <div className="artist-card">
                            <h2 className="name">V1VI</h2>
                            <p className="genre">Collage Art</p>
                            <p className="description">
                                The collage art of V1VI transports visitors to a realm of
                                fantastical beauty with its visual symphony of forms, hues, and
                                textures. V1VI painstakingly fuses antique and modern elements to
                                produce thought-provoking works that push the limits of conventional
                                art genres.
                            </p>
                        </div>
                    </div>
                </Link>

                <Link to={`/artsandartists/P0LA`} className="link">
                    <div className="container">
                        <div className="img-container">
                            <img className="main-img" src={P0LA} alt="P0LA" />
                        </div>
                        <div className="artist-card">
                            <h2 className="name">P0LA</h2>
                            <p className="genre">Pop Art</p>
                            <p className="description">
                                The vivid pop art works of P0LA capture the spirit of popular
                                culture with a fresh perspective. P0LA examines topics of
                                consumerism and mass media via vibrant colors and recognizable
                                iconography, turning the ordinary into spectacular.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={`/artsandartists/R0RO`} className="link">
                    <div className="container">
                        <div className="img-container">
                            <img className="main-img" src={R0RO} alt="R0RO" />
                        </div>
                        <div className="artist-card">
                            <h2 className="name">R0RO</h2>
                            <p className="genre">Pattern Fabric Art</p>
                            <p className="description">
                                The intricate detail and fine craftsmanship are celebrated in R0RO's
                                pattern fabric artwork. R0RO develops captivating textile-based
                                compositions that are both aesthetically appealing and rich in
                                cultural meaning by deftly weaving together various materials.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={`/artsandartists/T0RI`} className="link">
                    <div className="container">
                        <div className="img-container">
                            {' '}
                            <img className="main-img" src={T0RI} alt="T0RI" />
                        </div>
                        <div className="artist-card">
                            <h2 className="name">T0RI</h2>
                            <p className="genre">Anime Art</p>
                            <p className="description">
                                With simple and alluring artwork, T0RI brings the world of anime to
                                life. T0RI's artwork, which draws inspiration from Japanese
                                animation and manga, has vibrant storyline and dynamic characters
                                that are appealing to both art lovers and anime fans.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={`/artsandartists/CHR1S`} className="link">
                    <div className="container">
                        <div className="img-container">
                            <img className="main-img" src={CHR1S} alt="CHR1S" />
                        </div>
                        <div className="artist-card">
                            <h2 className="name">CHR1S</h2>
                            <p className="genre">Cubism</p>
                            <p className="description">
                                CHR1S's artwork dissects and reassembles visual components to
                                produce arresting, three-dimensional compositions, drawing
                                inspiration from early cubists. CHR1S presents a novel viewpoint on
                                reality which promotes reflection through disjointed patterns and
                                abstract shapes.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={`/artsandartists/ZER1`} className="link">
                    <div className="container">
                        <div className="img-container">
                            <img className="main-img" src={ZER1} alt="ZER1" />
                        </div>
                        <div className="artist-card">
                            <h2 className="name">ZER1</h2>
                            <p className="genre">Pixel Art</p>
                            <p className="description">
                                Pixel art by ZER1 is a wistful ode to the digital era, exhibiting
                                elaborate creations made from the little pixel. ZER1's work is
                                humorous and smart, fusing contemporary methods with a nostalgic
                                style, and appealing to a broad spectrum of consumers.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={`/artsandartists/J1N`} className="link">
                    <div className="container">
                        <div className="img-container">
                            <img className="main-img" src={J1N} alt="J1N" />
                        </div>
                        <div className="artist-card">
                            <h2 className="name">J1N</h2>
                            <p className="genre">Abstractism</p>
                            <p className="description">
                                Abstract paintings by J1N explore emotion and motion via vivid
                                colors, organic forms, and unplanned brushstrokes. J1N's art enables
                                viewers to go on a special, sensual trip by overcoming the
                                limitations of conventional representation.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={`/artsandartists/MIRR0R`} className="link">
                    <div className="container">
                        <div className="img-container">
                            <img className="main-img" src={MIRR0R} alt="MIRR0R" />
                        </div>
                        <div className="artist-card">
                            <h2 className="name">MIRR0R</h2>
                            <p className="genre">Watercolor</p>
                            <p className="description">
                                Watercolor paintings by MIRR0R are serene and graceful, with
                                delicate colors blending and dancing over the surface. MIRR0R
                                captures the transient beauty of nature and the complexities of
                                human emotion by expertly managing the fluidity of the medium.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={`/artsandartists/PAUL0`} className="link">
                    <div className="container">
                        <div className="img-container">
                            <img className="main-img" src={PAUL0} alt="PAUL0" />
                        </div>

                        <div className="artist-card">
                            <h2 className="name">PAUL0</h2>
                            <p className="genre">Expressionism</p>
                            <p className="description">
                                Through vivid colors and strong brushstrokes, Paul's expressionist
                                artwork delves deeply into the human psyche, revealing raw emotions
                                and untold stories. Paul's art challenges viewers to examine their
                                own perceptions and experiences using a style that is both seductive
                                and intriguing.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to={`/artsandartists/R1N`} className="link">
                    <div className="container">
                        <div className="img-container">
                            <img className="main-img" src={R1N} alt="R1N" />
                        </div>

                        <div className="artist-card">
                            <h2 className="name">R1N</h2>
                            <p className="genre">Cyberpunk Art</p>
                            <p className="description">
                                A visionary artist who brings life to future cities and mecca girls.
                                Their fascinating work mixes the beauty of science fiction with
                                complex mechanical and robotic elements. Experience the art of R1N's
                                endless possibilities and imaginative creations.
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default React.memo(ArtAndArtists);
