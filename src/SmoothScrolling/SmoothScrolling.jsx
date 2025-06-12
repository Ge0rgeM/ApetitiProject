// src/hooks/useFadeInOnScroll.js
import { useEffect, useRef } from "react";

const ANIMATION_TIME = 0.8; // seconds

export default function useFadeInOnScroll(skipIfInsideCarousel = true) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Skip if inside carousel (unless it IS the carousel)
    if (
      skipIfInsideCarousel &&
      el.closest(".carousel") &&
      !el.classList.contains("carousel")
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transition = `opacity ${ANIMATION_TIME}s ease-in-out`;
          el.style.opacity = 1;
        } else {
          el.style.transition = `opacity ${ANIMATION_TIME}s ease-in-out`;
          el.style.opacity = 0;
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.27,
      }
    );

    el.style.opacity = 0;
    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [skipIfInsideCarousel]);

  return ref;
}
