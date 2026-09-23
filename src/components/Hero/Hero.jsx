import { useState, useEffect } from "react";
import "./Hero.css";

import hero1 from "../../assets/hero1.webp";
import hero2 from "../../assets/hero2.png";
import hero3 from "../../assets/hero3.webp";
import hero4 from "../../assets/hero4.jpg";
import hero5 from "../../assets/hero5.jpg";
import hero6 from "../../assets/hero6.jpg";

const slides = [
  {
    id: 1,
    src: hero1,
    alt: "Saara Photography Hero Image 1",
  },
  {
    id: 2,
    src: hero2,
    alt: "Saara Photography Hero Image 2",
  },
  {
    id: 3,
    src: hero3,
    alt: "Saara Photography Hero Image 3",
  },
  {
    id: 4,
    src: hero4,
    alt: "Saara Photography Hero Image 4",
  },
  {
    id: 5,
    src: hero5,
    alt: "Saara Photography Hero Image 5",
  },
  {
    id: 6,
    src: hero6,
    alt: "Saara Photography Hero Image 6",
  },
];

const INTERVAL = 5000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, INTERVAL);

    return () => clearInterval(interval);
  }, [paused]);

  const goTo = (index) => {
    setCurrent(index);
    setPaused(true);

    setTimeout(() => {
      setPaused(false);
    }, INTERVAL * 2);
  };

  return (
    <section className="hero" aria-label="Hero slideshow">
      {/* Slides */}
      <div className="hero__slides">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero__slide ${
              index === current ? "hero__slide--active" : ""
            }`}
            aria-hidden={index !== current}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className="hero__slide-img"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="hero__overlay" aria-hidden="true"></div>

      {/* Content */}
      <div className="hero__content">
        <p className="hero__eyebrow">
          Wedding • Engagement • Couple Sessions
        </p>

        <h1 className="hero__heading">
          Turning Moments
          <br />
          Into Forever
        </h1>

        <h2 className="hero-title">SAARA PHOTOGRAPHY</h2>

        <p className="hero__description">
          Every smile, every glance, and every emotion deserves to be
          remembered. We capture your love story through timeless,
          cinematic photography that you'll cherish for generations.
        </p>

        <a href="#contact" className="btn btn-light hero__cta">
          Book Your Session
        </a>
      </div>

      {/* Dots */}
      <div
        className="hero__dots"
        role="tablist"
        aria-label="Slide navigation"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`hero__dot ${
              index === current ? "hero__dot--active" : ""
            }`}
            onClick={() => goTo(index)}
            role="tab"
            aria-selected={index === current}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Hint */}
      <div className="hero__scroll-hint" aria-hidden="true">
        <span className="hero__scroll-line"></span>
      </div>
    </section>
  );
}