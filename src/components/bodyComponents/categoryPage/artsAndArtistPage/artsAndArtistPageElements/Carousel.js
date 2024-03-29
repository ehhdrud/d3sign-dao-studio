import React, { useEffect, useRef } from 'react';
import './styles/carousel.css';

function Carousel({ imagePaths }) {
    const carouselRef = useRef(null);
    const carouselItemsRef = useRef([]);
    const carouselControlsRef = useRef([]);
    const carouselContainerRef = useRef(null);

    useEffect(() => {
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
                    element.classList.remove('carousel-item-1');
                    element.classList.remove('carousel-item-2');
                    element.classList.remove('carousel-item-3');
                    element.classList.remove('carousel-item-4');
                    element.classList.remove('carousel-item-5');
                    element.classList.remove('carousel-item-hidden');

                    if (index >= 5) {
                        element.classList.add('carousel-item-hidden');
                    }
                });

                this.carouselItemsRefCurrentArray.slice(0, 5).forEach((element, index) => {
                    element.classList.add(`carousel-item-${index + 1}`);
                });
            }

            setCurrentState(direction) {
                if (direction.className === 'carousel-controls-previous') {
                    this.carouselItemsRefCurrentArray.unshift(
                        this.carouselItemsRefCurrentArray.pop()
                    );
                } else if (direction.className === 'carousel-controls-next') {
                    this.carouselItemsRefCurrentArray.push(
                        this.carouselItemsRefCurrentArray.shift()
                    );
                }
                this.updateCarousel();
            }

            useControls() {
                const triggers = Array.from(carouselControlsRefCurrentArray[0].childNodes).concat(
                    Array.from(carouselControlsRefCurrentArray[1].childNodes)
                );
                triggers.forEach((control) => {
                    control.addEventListener('click', (e) => {
                        e.preventDefault();
                        this.setCurrentState(control);
                    });
                });
            }
        }

        const newSetCarousel = new SetCarousel(carouselRefCurrent, carouselItemsRefCurrentArray);

        newSetCarousel.useControls();

        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                newSetCarousel.setCurrentState({
                    className: 'carousel-controls-previous',
                });
            } else if (event.key === 'ArrowRight') {
                newSetCarousel.setCurrentState({
                    className: 'carousel-controls-next',
                });
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        let startX;
        let startY;
        let endX;
        let endY;

        carouselRefCurrent.addEventListener('touchstart', handleTouchStart, false);
        carouselRefCurrent.addEventListener('touchmove', handleTouchMove, false);
        carouselRefCurrent.addEventListener('touchend', handleTouchEnd, false);

        function handleTouchStart(event) {
            startX = event.touches[0].clientX;
            startY = event.touches[0].clientY;

            if (event.touches.length >= 2) {
                startX = NaN;
                startY = NaN;
            }
        }

        function handleTouchMove(event) {
            endX = event.touches[0].clientX;
            endY = event.touches[0].clientY;

            const distanceX = endX - startX;
            const distanceY = endY - startY;

            if (Math.abs(distanceX) > Math.abs(distanceY)) {
                event.preventDefault();
            }
        }

        function handleTouchEnd() {
            const distanceX = endX - startX;
            const distanceY = endY - startY;

            if (Math.abs(distanceX) > Math.abs(distanceY) && distanceX > 50) {
                newSetCarousel.setCurrentState({
                    className: 'carousel-controls-previous',
                });
            } else if (Math.abs(distanceX) > Math.abs(distanceY) && distanceX < -50) {
                newSetCarousel.setCurrentState({
                    className: 'carousel-controls-next',
                });
            }

            startX = NaN;
            startY = NaN;
            endX = NaN;
            endY = NaN;
        }
    });

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
            <div ref={carouselContainerRef} className="carousel-container">
                {imagePaths.map((imagePath, index) => (
                    <img
                        ref={(element) => (carouselItemsRef.current[index] = element)}
                        className={`carousel-item carousel-item-${index + 1}`}
                        src={imagePath}
                        alt={`artwork-${index + 1}`}
                        key={`artwork-${index}`}
                    />
                ))}
            </div>
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

export default React.memo(Carousel);
