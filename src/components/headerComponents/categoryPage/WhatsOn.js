import React, { useContext } from "react";
import { ToggleContext } from "../../../ToggleContext";
import "../../../styles/whatsOn.css";
import "boxicons/css/boxicons.min.css";

export default function WhatsOn() {
  const { deleteCategoryLayout, categoryLayoutChanged } =
    useContext(ToggleContext);
  const handleClick = (event) => {
    deleteCategoryLayout(event);
  };

  return (
    <div
      className={`whatson ${categoryLayoutChanged ? "rearranged" : ""}`}
      onClick={handleClick}
    >
      <div className="about">
        <div className="about-head">
          <h1>About</h1>
          <p>
            D3sign DAO Studio is a forward-thinking digital art platform that
            brings together a global community of artists, showcasing their
            unique digital artwork to the world. We are dedicated to creating a
            decentralized and inclusive environment where artists and art
            enthusiasts alike can connect, collaborate, and grow together.
          </p>
        </div>
        <br />
        <div className="about-body">
          <div className="about-body-item">
            <h2>
              <i className="bx bx-world"></i>
              Globalized Art
            </h2>
            <p>
              At D3sign DAO Studio, we aim to transcend geographical barriers by
              exhibiting the remarkable work of our artists on a global scale.
              Our digital platform allows us to share diverse artistic
              expressions with audiences worldwide, fostering a greater
              appreciation for the richness of art from various cultures.
            </p>
          </div>
          <div className="about-body-item">
            <h2>
              <i class="bx bxs-group"></i>
              DAO Governance and Customized Art
            </h2>
            <p>
              Our platform operates through DAO governance, empowering our
              community to actively participate in decision-making processes.
              This approach enables us to provide personalized and customized
              digital art that caters to the unique needs and preferences of our
              customers.
            </p>
          </div>
          <div className="about-body-item">
            <h2>
              <i class="bx bx-diamond"></i>
              High-Quality Digital Artwork
            </h2>
            <p>
              D3sign DAO Studio is committed to delivering exceptional digital
              art that meets the highest standards of quality. Our artists work
              tirelessly to create visually stunning and thought-provoking
              pieces that captivate and inspire audiences.
            </p>
          </div>
          <div className="about-body-item">
            <h2>
              <i class="bx bx-layer"></i>
              Versatile Offerings and Solutions
            </h2>
            <p>
              We offer a diverse range of design art configurations, ensuring
              that our customers can find the perfect solution to meet their
              needs. By providing an array of artistic styles and formats,
              D3sign DAO Studio can cater to a wide variety of preferences and
              requirements.
            </p>
          </div>
          <div className="about-body-item">
            <h2>
              <i class="bx bx-chat"></i>
              Community and Belonging
            </h2>
            <p>
              Our centralized community platform fosters a sense of belonging
              among consumers, as they engage with our artists and their work.
              By creating a welcoming space for dialogue and interaction, we
              nurture a thriving and interconnected art community.
            </p>
          </div>
          <div className="about-body-item">
            <h2>
              <i class="bx bx-network-chart"></i>
              Global Governance Structure
            </h2>
            <p>
              D3sign DAO Studio's governance structure is designed to include
              individuals from various backgrounds, without the need for
              corporate authorization. This approach enables us to operate in
              the global market, promoting diversity and inclusivity in the art
              world.
            </p>
          </div>
        </div>
      </div>
      <div className="vision">
        <div className="vision-head">
          <h1>Vision</h1>
        </div>
        <div className="vision-body">
          <div className="vision-body-item">
            <h2>
              <i class="bx bx-compass"></i>Accessibility
            </h2>
            <p>
              Allows you around the world to experience contemporary and pop art
              collections without geographical limitations.
            </p>
          </div>
          <div className="vision-body-item">
            <h2>
              <i class="bx bx-alarm-off"></i>Convenience
            </h2>
            <p>
              With 24/7 availability, you can explore and appreciate the art at
              their own pace and convenience, making it easier to fit into their
              busy schedules.
            </p>
          </div>
          <div className="vision-body-item">
            <h2>
              <i class="bx bxs-bulb"></i>
              Inspiration
            </h2>
            <p>
              By showing a variety of artistic expressions, D3sign DAO Studio
              can inspire you to be creative and explore new ideas, skills, or
              styles in our artistic pursuits.
            </p>
          </div>
          <div className="vision-body-item">
            <h2>
              <i class="bx bx-book"></i>
              Education
            </h2>
            <p>
              Our art community serves as a valuable educational resource that
              provides insight into various art styles, techniques, and creative
              processes of various artists. This allows you to broaden their
              knowledge of art and promotes a deeper understanding and
              appreciation of these art forms.
            </p>
          </div>
          <div className="vision-body-item">
            <h2>
              <i class="bx bx-gift"></i>
              Community rewards
            </h2>
            <p>
              We are offering financial rewards to each other's art community
              activists. For example, buying D3sign DAO Studio's art at an
              affordable price, art airdrop, community pool rewards, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
