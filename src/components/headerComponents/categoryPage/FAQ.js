import React, { useContext } from "react";
import { ToggleContext } from "../../../ToggleContext";
import "../../../styles/faq.css";

export default function Faq() {
  const { deleteCategoryLayout, categoryLayoutChanged } =
    useContext(ToggleContext);

  const handleClick = (event) => {
    deleteCategoryLayout(event);
  };

  return (
    <div
      className={`faq ${categoryLayoutChanged ? "rearranged" : ""}`}
      onClick={handleClick}
    >
      <h1>FAQ</h1>

      <div className="details-container">
        <h2>Information</h2>

        <details>
          <summary>How is the artist of D3sign DAO Studio shaped?</summary>
          <p>
            It consists of a total of 10 artists. Each artist can create
            creative and innovative art composition.
          </p>
        </details>

        <details>
          <summary>What is the vision/mission of D3sign DAO Studio?</summary>
          <p>
            Our vision is to create art that customers want and meet their
            needs.
          </p>
        </details>
      </div>

      <div className="details-container">
        <h2>About art</h2>

        <details>
          <summary>
            What kind of digital art does D3sign DAO Studio sell?
          </summary>
          <p>
            Create digital art to suit the skills of a total of 10 artists. The
            goal is to create various types of art, such as watercolor, pop,
            anime, abstract art, and visually convey pleasure to customers. In
            addition to digital art, we sell goods, frames, and T-shirts using
            POD companies.
          </p>
        </details>

        <details>
          <summary>How is the price of each piece determined?</summary>
          <p>
            We aim to form a slightly lower price than the price formed in the
            marketplace.
          </p>
        </details>

        <details>
          <summary>Can I preview the art before I buy it?</summary>
          <p>
            Sure. We're active on Twitter and Instagram and you can check out
            the colorful art.
          </p>
        </details>
      </div>

      <div className="details-container">
        <h2>Purchase and payment</h2>

        <details>
          <summary>What would you like to pay for?</summary>
          <p>
            Because it uses the POD platform, customers can pay by credit card
            within the site.
          </p>
        </details>

        <details>
          <summary>
            Is it safe to buy artwork online from D3sign DAO Studio?
          </summary>
          <p>Of course.</p>
        </details>
      </div>

      <div className="details-container">
        <h2>Shipping and ownership</h2>

        <details>
          <summary>How does purchased digital art get delivered?</summary>
          <p>It will be delivered to your house.</p>
        </details>
      </div>

      <div className="details-container">
        <h2>Communities</h2>

        <details>
          <summary>How do I join the D3sign DAO Studio community?</summary>
          <p>
            I'm running Instagram, Twitter, and Discord. Please refer to the
            link.
          </p>
        </details>

        <details>
          <summary>What are the benefits of being part of a community?</summary>
          <p>
            If you become a member of the community, we will provide you with
            private services such as personal digital art production, discount
            coupons, etc.
          </p>
        </details>

        <details>
          <summary>Do you have any community events or activities?</summary>
          <p>We are preparing for an online-based digital art exhibition.</p>
        </details>
      </div>
      <p className="help">
        If you have a problem with your purchase, please contact Instagram DM or
        <span className="email"> d3signdaostudio@gmail.com</span> for affiliate
        inquiries.
      </p>
    </div>
  );
}
