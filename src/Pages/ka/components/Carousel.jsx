import styles from '@/Css/Carousel.module.css';
import { allImages } from '@/globals';
import { useEffect, useRef, useState } from 'react';

function Carousel() {
  const slideRefs = useRef([]);
  const [index, setIndex] = useState(0);
  let slideWidth = 0; // or get dynamically via ref
  const extraMargin = 20;

  const resetAutoSlide = () => {
    clearInterval(autoSlide.current);
    autoSlide.current = setInterval(() => moveSlide('Right'), 3000);
  };

  const autoSlide = useRef(null);

  const moveSlide = (direction) => {
    resetAutoSlide();

    setIndex((prev) => {
      const nOfSlides = allImages.length-2;
      const newIndex =
        direction === 'Right'
          ? (prev + 1) % nOfSlides
          : (prev - 1 + nOfSlides) % nOfSlides;

      // Update transform for each slide
      slideRefs.current.forEach((slide, i) => {
        if (slide) {
            slideWidth = slide.offsetWidth + 0.5;
            const offset = -1 * (slideWidth + extraMargin) * newIndex;
            slide.style.transform = `translateX(${offset}px)`;
        }
      });

      return newIndex;
    });
  };

  useEffect(() => {
    // Initial transform
    slideRefs.current.forEach((slide) => {
      if (slide) slide.style.transition = 'transform 0.5s ease';
    });

    autoSlide.current = setInterval(() => moveSlide('Right'), 2000);
    return () => clearInterval(autoSlide.current);
  }, []);

  return (
    <section className={styles.carousel}>
      <div className={styles.leftArrow}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
          <path
            data-slider="Left"
            onClick={() => moveSlide('Left')}
            stroke="#fff"
            strokeLinecap="round"
            strokeWidth="5"
            d="M41 53L60.354 71.9239C62.1028 73.6338 64.8972 73.6338 66.646 71.9239L86 53"
          />
        </svg>
      </div>

      <div className={styles.slideContainer}>
        {allImages.map((details, i) => (
          <div
            key={details.id}
            className={styles.slide}
            ref={(el) => (slideRefs.current[i] = el)}
            style={{ backgroundImage: `url(${details.imgUrl})` }}
          >
            <div data-translate={`descriptionId${details.id}`} className={styles.slideDescription}>
              <p>{details.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.rightArrow}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 128 128">
          <path
            data-slider="Right"
            onClick={() => moveSlide('Right')}
            stroke="#000"
            strokeLinecap="round"
            strokeWidth="5"
            d="M41 53L60.354 71.9239C62.1028 73.6338 64.8972 73.6338 66.646 71.9239L86 53"
          />
        </svg>
      </div>
    </section>
  );
}

export default Carousel;
