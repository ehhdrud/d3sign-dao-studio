import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/artists.css";

export default function Artists() {
  return (
    <div className="artists">
      <h1>🎨 Artists</h1>
      <Link to={`/artists/V1VI`} className="link">
        <div className="artist-card">
          <h2 className="name">👨‍🦲 V1VI</h2>
          <span className="genre">"Collage Art"</span>
          <p>
            The collage art of V1VI transports visitors to a realm of
            fantastical beauty with its visual symphony of forms, hues, and
            textures. V1VI painstakingly fuses antique and modern elements to
            produce thought-provoking works that push the limits of conventional
            art genres.
          </p>
        </div>
      </Link>
      <Link to={`/artists/P0LA`} className="link">
        <div className="artist-card">
          <h2 className="name">👨‍🦲 P0LA</h2>
          <span className="genre">"Pop Art"</span>
          <p>
            The vivid pop art works of P0LA capture the spirit of popular
            culture with a fresh perspective. P0LA examines topics of
            consumerism and mass media via vibrant colors and recognizable
            iconography, turning the ordinary into spectacular.
          </p>
        </div>
      </Link>
      <Link to={`/artists/R0RO`} className="link">
        <div className="artist-card">
          <h2 className="name">👨‍🦲 R0RO</h2>
          <span className="genre">"Pattern Fabric Art"</span>
          <p>
            The intricate detail and fine craftsmanship are celebrated in R0RO's
            pattern fabric artwork. R0RO develops captivating textile-based
            compositions that are both aesthetically appealing and rich in
            cultural meaning by deftly weaving together various materials.
          </p>
        </div>
      </Link>
      <Link to={`/artists/T0RI`} className="link">
        <div className="artist-card">
          <h2 className="name">👨‍🦲 T0RI</h2>
          <span className="genre">"Anime Art"</span>
          <p>
            With simple and alluring artwork, T0RI brings the world of anime to
            life. T0RI's artwork, which draws inspiration from Japanese
            animation and manga, has vibrant storyline and dynamic characters
            that are appealing to both art lovers and anime fans.
          </p>
        </div>
      </Link>
      <Link to={`/artists/CHR1S`} className="link">
        <div className="artist-card">
          <h2 className="name">👨‍🦲 CHR1S</h2>
          <span className="genre">"Cubism"</span>
          <p>
            CHR1S's artwork dissects and reassembles visual components to
            produce arresting, three-dimensional compositions, drawing
            inspiration from early cubists. CHR1S presents a novel viewpoint on
            reality which promotes reflection through disjointed patterns and
            abstract shapes.
          </p>
        </div>
      </Link>
      <Link to={`/artists/ZER1`} className="link">
        <div className="artist-card">
          <h2 className="name">👨‍🦲 ZER1</h2>
          <span className="genre">"Pixel Art"</span>
          <p>
            Pixel art by ZER1 is a wistful ode to the digital era, exhibiting
            elaborate creations made from the little pixel. ZER1's work is
            humorous and smart, fusing contemporary methods with a nostalgic
            style, and appealing to a broad spectrum of consumers.
          </p>
        </div>
      </Link>
      <Link to={`/artists/J1N`} className="link">
        <div className="artist-card">
          <h2 className="name">👨‍🦲 J1N</h2>
          <span className="genre">"Abstractism"</span>
          <p>
            Abstract paintings by J1N explore emotion and motion via vivid
            colors, organic forms, and unplanned brushstrokes. J1N's art enables
            viewers to go on a special, sensual trip by overcoming the
            limitations of conventional representation.
          </p>
        </div>
      </Link>
      <Link to={`/artists/MIRR0R`} className="link">
        <div className="artist-card">
          <h2 className="name">👨‍🦲 MIRR0R</h2>
          <span className="genre">"Watercolor"</span>
          <p>
            Watercolor paintings by MIRR0R are serene and graceful, with
            delicate colors blending and dancing over the surface. MIRR0R
            captures the transient beauty of nature and the complexities of
            human emotion by expertly managing the fluidity of the medium.
          </p>
        </div>
      </Link>
      <Link to={`/artists/Paul0`} className="link">
        <div className="artist-card">
          <h2 className="name">👨‍🦲 Paul0</h2>
          <span className="genre">"Expressionism"</span>
          <p>
            Through vivid colors and strong brushstrokes, Paul's expressionist
            artwork delves deeply into the human psyche, revealing raw emotions
            and untold stories. Paul's art challenges viewers to examine their
            own perceptions and experiences using a style that is both seductive
            and intriguing.
          </p>
        </div>
      </Link>
      <Link to={`/artist/R1N`} className="link">
        <div className="artist-card">
          <h2 className="name">👨‍🦲 R1N</h2>
          <span className="genre">"Cyberpunk Art"</span>
          <p>
            A visionary artist who brings life to future cities and mecca girls.
            Their fascinating work mixes the beauty of science fiction with
            complex mechanical and robotic elements. Experience the art of R1N's
            endless possibilities and imaginative creations.
          </p>
        </div>
      </Link>
    </div>
  );
}
