"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  slides: Slide[];
  intervalMs?: number;
};

export default function ImageCarousel({
  slides,
  intervalMs = 5000,
}: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [paused, slides.length, intervalMs]);

  const go = (next: number) => {
    setIndex((next + slides.length) % slides.length);
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="carousel-stage" aria-roledescription="carousel">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`carousel-slide${i === index ? " is-active" : ""}`}
            aria-hidden={i !== index}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 1120px) 100vw, 1120px"
              priority={i === 0}
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}

        <button
          type="button"
          className="carousel-btn prev"
          aria-label="Previous image"
          onClick={() => go(index - 1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="carousel-btn next"
          aria-label="Next image"
          onClick={() => go(index + 1)}
        >
          ›
        </button>
      </div>

      <div className="carousel-dots" role="tablist" aria-label="Carousel slides">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show image ${i + 1}`}
            className={i === index ? "is-active" : undefined}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
