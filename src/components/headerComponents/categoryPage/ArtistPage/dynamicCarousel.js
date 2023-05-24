const carouselContainer = document.querySelector(".carousel");
const carouselItems = document.querySelector(".carousel-item");
const carouselControlsContainer = document.querySelector(".carousel-controls");
const carouselControls = [previous, next];

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
      element.classList.add(`carousel-item-${i + 1}`);
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
