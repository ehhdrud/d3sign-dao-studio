import React, { useState, useEffect, useRef } from "react";
import { GridLoader } from "react-spinners";
import "./styles/carousel.css";

export default function Carousel({ imagePaths }) {
  const carouselRef = useRef(null);
  const carouselItemsRef = useRef([]);
  const carouselControlsRef = useRef([]);

  const carouselContainerRef = useRef(null);

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = imagePaths.map((file) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve();
        img.src = file;
      });
    });
    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (imagesLoaded) {
      const carouselRefCurrent = carouselRef.current;
      const carouselItemsRefCurrentArray = carouselItemsRef.current;
      const carouselControlsRefCurrentArray = carouselControlsRef.current;

      class SetCarousel {
        constructor(container, items) {
          this.carouselRefCurrent = container;
          this.carouselItemsRefCurrentArray = [...items];
        }

        updateCarousel() {
          this.carouselItemsRefCurrentArray.forEach((element, index) => {
            element.classList.remove("carousel-item-1");
            element.classList.remove("carousel-item-2");
            element.classList.remove("carousel-item-3");
            element.classList.remove("carousel-item-4");
            element.classList.remove("carousel-item-5");
            element.classList.remove("carousel-item-hidden");

            if (index >= 5) {
              element.classList.add("carousel-item-hidden");
            }
          });

          this.carouselItemsRefCurrentArray
            .slice(0, 5)
            .forEach((element, index) => {
              element.classList.add(`carousel-item-${index + 1}`);
            });
        }

        setCurrentState(direction) {
          if (direction.className === "carousel-controls-previous") {
            this.carouselItemsRefCurrentArray.unshift(
              this.carouselItemsRefCurrentArray.pop()
            );
          } else if (direction.className === "carousel-controls-next") {
            this.carouselItemsRefCurrentArray.push(
              this.carouselItemsRefCurrentArray.shift()
            );
          }
          this.updateCarousel();
        }

        useControls() {
          const triggers = Array.from(
            carouselControlsRefCurrentArray[0].childNodes
          ).concat(Array.from(carouselControlsRefCurrentArray[1].childNodes));
          triggers.forEach((control) => {
            control.addEventListener("click", (e) => {
              e.preventDefault();
              this.setCurrentState(control);
            });
          });
        }
      }

      const newSetCarousel = new SetCarousel(
        carouselRefCurrent,
        carouselItemsRefCurrentArray
      );

      newSetCarousel.useControls();

      const handleKeyDown = (event) => {
        if (event.key === "ArrowLeft") {
          newSetCarousel.setCurrentState({
            className: "carousel-controls-previous",
          });
        } else if (event.key === "ArrowRight") {
          newSetCarousel.setCurrentState({
            className: "carousel-controls-next",
          });
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      const carouselContainerRefCurrent = carouselContainerRef.current;
      let startX;
      let endX;

      carouselContainerRefCurrent.addEventListener(
        "touchstart",
        handleTouchStart,
        false
      );
      carouselContainerRefCurrent.addEventListener(
        "touchmove",
        handleTouchMove,
        false
      );
      carouselContainerRefCurrent.addEventListener(
        "touchend",
        handleTouchEnd,
        false
      );

      function handleTouchStart(event) {
        startX = event.touches[0].clientX;
      }

      function handleTouchMove(event) {
        endX = event.touches[0].clientX;
      }

      function handleTouchEnd() {
        const distance = endX - startX;

        if (distance > 50) {
          newSetCarousel.setCurrentState({
            className: "carousel-controls-previous",
          });
        } else if (distance < -50) {
          newSetCarousel.setCurrentState({
            className: "carousel-controls-next",
          });
        }
        startX = NaN;
        endX = NaN;
      }
    }
  }, [imagesLoaded]);

  return (
    <div ref={carouselRef} className="carousel">
      <div
        ref={(element) => carouselControlsRef.current.push(element)}
        className="carousel-controls"
      >
        <button className="carousel-controls-previous">
          <div className="left-arrow"></div>
        </button>
      </div>
      {imagesLoaded ? (
        <>
          <div ref={carouselContainerRef} className="carousel-container">
            {imagePaths.map((imagePath, index) => (
              <img
                ref={(element) => (carouselItemsRef.current[index] = element)}
                className={`carousel-item carousel-item-${index + 1}`}
                src={imagePath}
                alt={`${index + 1}`}
                key={index}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="loading">
          <GridLoader color={"#ffffd7"} size={5} />
        </div>
      )}
      <div
        ref={(element) => carouselControlsRef.current.push(element)}
        className="carousel-controls"
      >
        <button className="carousel-controls-next">
          <div className="right-arrow"></div>
        </button>
      </div>
    </div>
  );
}
