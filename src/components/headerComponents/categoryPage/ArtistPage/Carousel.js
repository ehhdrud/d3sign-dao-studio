import React, { useEffect } from "react";
import "../../../../styles/carousel.css";

export default function Carousel({ imagePaths }) {
  useEffect(() => {
    const carouselContainer = document.querySelector(".carousel");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const carouselControlsContainer =
      document.querySelectorAll(".carousel-controls");
    const carouselControlsArray = [...carouselControlsContainer];

    class SetCarousel {
      constructor(container, items) {
        this.carouselContainer = container;
        this.carouselItems = [...items];
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
        const triggers = Array.from(carouselControlsArray[0].childNodes).concat(
          Array.from(carouselControlsArray[1].childNodes)
        );
        console.log(triggers);
        triggers.forEach((control) => {
          control.addEventListener("click", (e) => {
            e.preventDefault();
            this.setCurrentState(control);
          });
        });
      }
    }

    const newSetCarousel = new SetCarousel(carouselContainer, carouselItems);

    newSetCarousel.useControls();

    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        newSetCarousel.setCurrentState({
          className: "carousel-controls-previous",
        });
      } else if (event.key === "ArrowRight") {
        newSetCarousel.setCurrentState({ className: "carousel-controls-next" });
      }
    };

    document.addEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="carousel">
      <div className="carousel-controls">
        <button className="carousel-controls-previous">
          <div className="left-arrow"></div>
        </button>
      </div>
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
        <button className="carousel-controls-next">
          <div className="right-arrow"></div>
        </button>
      </div>
    </div>
  );
}