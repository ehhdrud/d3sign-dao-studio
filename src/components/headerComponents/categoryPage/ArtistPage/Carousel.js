// import React, { useEffect } from "react";
// import "../../../../styles/Carousel.css";

// export default function Carousel({ imagePaths }) {
//   useEffect(() => {
//     const carouselContainer = document.querySelector(".carousel");
//     const carouselItems = document.querySelectorAll(".carousel-item");
//     const carouselControlsContainer =
//       document.querySelector(".carousel-controls");
//     const carouselControls = ["previous", "next"];

//     class SetCarousel {
//       constructor(container, items, controls) {
//         this.carouselContainer = container;
//         this.carouselItems = [...items];
//         this.carouselControls = controls;
//       }

//       updateCarousel() {
//         this.carouselItems.forEach((element) => {
//           element.classList.remove("carousel-item-1");
//           element.classList.remove("carousel-item-2");
//           element.classList.remove("carousel-item-3");
//           element.classList.remove("carousel-item-4");
//           element.classList.remove("carousel-item-5");
//         });

//         this.carouselItems.slice(0, 5).forEach((element, index) => {
//           element.classList.add(`carousel-item-${index + 1}`);
//         });
//       }

//       setCurrentState(direction) {
//         if (direction.className === "carousel-controls-previous") {
//           this.carouselItems.unshift(this.carouselItems.pop());
//         } else {
//           this.carouselItems.push(this.carouselItems.shift());
//         }
//         this.updateCarousel();
//       }

//       setControls() {
//         this.carouselControls.forEach((control) => {
//           carouselControlsContainer.appendChild(
//             document.createElement("button")
//           ).className = `carousel-controls-${control}`;
//         });
//       }

//       useControls() {
//         const triggers = [...carouselControlsContainer.childNodes];
//         triggers.forEach((control) => {
//           control.addEventListener("click", (e) => {
//             e.preventDefault();
//             this.setCurrentState(control);
//           });
//         });
//       }
//     }

//     const newSetCarousel = new SetCarousel(
//       carouselContainer,
//       carouselItems,
//       carouselControls
//     );

//     newSetCarousel.setControls();
//     newSetCarousel.useControls();
//   }, []);

//   return (
//     <div className="carousel">
//       <div className="carousel-container">
//         {imagePaths.map((imagePath, index) => (
//           <img
//             className={`carousel-item carousel-item-${index + 1}`}
//             src={imagePath}
//             data-index={`${index + 1}`}
//             alt={`${index + 1}`}
//           />
//         ))}
//       </div>
//       <div className="carousel-controls"></div>
//     </div>
//   );
// }

import React, { useEffect } from "react";
import "../../../../styles/Carousel.css";

export default function Carousel({ imagePaths }) {
  useEffect(() => {
    const carouselContainer = document.querySelector(".carousel");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const carouselControlsContainer =
      document.querySelector(".carousel-controls");
    const carouselControls = ["previous", "next"];

    class SetCarousel {
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

    const newSetCarousel = new SetCarousel(
      carouselContainer,
      carouselItems,
      carouselControls
    );

    newSetCarousel.useControls();
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-container">
        {imagePaths.map((imagePath, index) => (
          <img
            className={`carousel-item carousel-item-${index + 1}`}
            src={imagePath}
            data-index={`${index + 1}`}
            alt={`${index + 1}`}
          />
        ))}
      </div>
      <div className="carousel-controls">
        <button className="carousel-controls-button carousel-controls-previous">
          <div className="left-arrow"></div>
        </button>
        <button className="carousel-controls-button carousel-controls-next">
          <div className="right-arrow"></div>
        </button>
      </div>
    </div>
  );
}
