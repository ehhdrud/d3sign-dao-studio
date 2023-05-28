import React from "react";
import "../../../styles/whatsOn.css";
import "boxicons";

export default function WhatsOn() {
  return (
    <div className="whatson">
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
          <h2>
            <box-icon name="world" color="#ffffff"></box-icon>
            Globalized Art
          </h2>
          <p>
            At D3sign DAO Studio, we aim to transcend geographical barriers by
            exhibiting the remarkable work of our artists on a global scale. Our
            digital platform allows us to share diverse artistic expressions
            with audiences worldwide, fostering a greater appreciation for the
            richness of art from various cultures.
          </p>

          <h2>
            <box-icon name="group" type="solid" color="#ffffff"></box-icon>
            DAO Governance and Customized Art
          </h2>
          <p>
            Our platform operates through DAO governance, empowering our
            community to actively participate in decision-making processes. This
            approach enables us to provide personalized and customized digital
            art that caters to the unique needs and preferences of our
            customers.
          </p>

          <h2>
            {" "}
            <box-icon name="diamond" color="#ffffff"></box-icon>
            High-Quality Digital Artwork
          </h2>
          <p>
            D3sign DAO Studio is committed to delivering exceptional digital art
            that meets the highest standards of quality. Our artists work
            tirelessly to create visually stunning and thought-provoking pieces
            that captivate and inspire audiences.
          </p>

          <h2>
            <box-icon name="layer" color="#ffffff"></box-icon>
            Versatile Offerings and Solutions
          </h2>
          <p>
            We offer a diverse range of design art configurations, ensuring that
            our customers can find the perfect solution to meet their needs. By
            providing an array of artistic styles and formats, D3sign DAO Studio
            can cater to a wide variety of preferences and requirements.
          </p>

          <h2>
            <box-icon name="chat" color="#ffffff"></box-icon>
            Community and Belonging
          </h2>
          <p>
            Our centralized community platform fosters a sense of belonging
            among consumers, as they engage with our artists and their work. By
            creating a welcoming space for dialogue and interaction, we nurture
            a thriving and interconnected art community.
          </p>

          <h2>
            <box-icon name="network-chart" color="#ffffff"></box-icon>
            Global Governance Structure
          </h2>
          <p>
            D3sign DAO Studio's governance structure is designed to include
            individuals from various backgrounds, without the need for corporate
            authorization. This approach enables us to operate in the global
            market, promoting diversity and inclusivity in the art world.
          </p>
        </div>
      </div>
      <div className="vision">
        <h1>Vision</h1>
        <div className="vision-body">
          <h2>
            <box-icon name="compass" color="#ffffff"></box-icon>Accessibility
          </h2>
          <p>
            Allows you around the world to experience contemporary and pop art
            collections without geographical limitations.
          </p>
          <h2>
            <box-icon name="alarm" color="#ffffff"></box-icon>Convenience
          </h2>
          <p>
            With 24/7 availability, you can explore and appreciate the art at
            their own pace and convenience, making it easier to fit into their
            busy schedules.
          </p>
          <h2>
            <box-icon name="bulb" type="solid" color="#ffffff"></box-icon>
            Inspiration
          </h2>
          <p>
            By showing a variety of artistic expressions, D3sign DAO Studio can
            inspire you to be creative and explore new ideas, skills, or styles
            in our artistic pursuits.
          </p>
          <h2>
            <box-icon name="book" color="#ffffff"></box-icon>
            Education
          </h2>
          <p>
            Our art community serves as a valuable educational resource that
            provides insight into various art styles, techniques, and creative
            processes of various artists. This allows you to broaden their
            knowledge of art and promotes a deeper understanding and
            appreciation of these art forms.
          </p>
          <h2>
            <box-icon name="gift" color="#ffffff"></box-icon>Community rewards
          </h2>
          <p>
            We are offering financial rewards to each other's art community
            activists. For example, buying D3sign DAO Studio's art at an
            affordable price, art airdrop, community pool rewards, etc.
          </p>
        </div>
      </div>
    </div>
  );
}
