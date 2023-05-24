// import React from "react";
// import Carousel from "./Carousel";
// import "../../../../styles/artistPage.css";

// const imagePaths = [
//   require("../../../../images/arts/V1VI/V1VI-00.png"),
//   require("../../../../images/arts/V1VI/V1VI-01.png"),
//   require("../../../../images/arts/V1VI/V1VI-02.png"),
//   require("../../../../images/arts/V1VI/V1VI-03.png"),
//   require("../../../../images/arts/V1VI/V1VI-04.png"),
//   require("../../../../images/arts/V1VI/V1VI-05.png"),
// ];

// export default function V1VI() {
//   return (
//     <div className="artist-page-container">
//       <h1 className="artist-page-title">🎨 V1VI's Artwork</h1>
//       <Carousel imagePaths={imagePaths} />
//     </div>
//   );
// }

// V1VI.js
import React, { useEffect } from "react";
import Carousel from "./Carousel";
import "../../../../styles/artistPage.css";

const imagePaths = [
  require("../../../../images/arts/V1VI/V1VI-00.png"),
  require("../../../../images/arts/V1VI/V1VI-01.png"),
  require("../../../../images/arts/V1VI/V1VI-02.png"),
  require("../../../../images/arts/V1VI/V1VI-03.png"),
  require("../../../../images/arts/V1VI/V1VI-04.png"),
  require("../../../../images/arts/V1VI/V1VI-05.png"),
];

export default function V1VI() {
  useEffect(() => {
    const carouselContainer = document.querySelector(".carousel");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const carouselControlsContainer =
      document.querySelector(".carousel-controls");
    const carouselControls = ["previous", "next"];

    class Carousel {
      constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselItems = [...items];
        this.carouselControls = controls;
      }

      updateCarousel() {
        this.carouselItems.forEach((element) => {
          element.classList.remove("carousel-item-1");
          element.classList.remove("carousel-item-2");
          element.classList.remove("carousel-item-3");
          element.classList.remove("carousel-item-4");
          element.classList.remove("carousel-item-5");
        });

        this.carouselItems.slice(0, 5).forEach((element, index) => {
          element.classList.add(`carousel-item-${index + 1}`);
        });
      }

      setCurrentState(direction) {
        if (direction.className === "carousel-controls-previous") {
          this.carouselItems.unshift(this.carouselItems.pop());
        } else {
          this.carouselItems.push(this.carouselItems.shift());
        }
        this.updateCarousel();
      }

      setControls() {
        this.carouselControls.forEach((control) => {
          carouselControlsContainer.appendChild(
            document.createElement("button")
          ).className = `carousel-controls-${control}`;
          document.querySelector(`.carousel-controls-${control}`).innerText =
            control;
        });
      }

      useControls() {
        const triggers = [...carouselControlsContainer.childNodes];
        triggers.forEach((control) => {
          control.addEventListener("click", (e) => {
            e.preventDefault();
            this.setCurrentState(control);
          });
        });
      }
    }

    const exampleCarousel = new Carousel(
      carouselContainer,
      carouselItems,
      carouselControls
    );

    exampleCarousel.setControls();
    exampleCarousel.useControls();
  }, []);

  return (
    <div className="artist-page-container">
      <h1 className="artist-page-title">🎨 V1VI's Artwork</h1>
      <Carousel imagePaths={imagePaths} />
    </div>
  );
}
