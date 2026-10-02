"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Italian kitchen · New York",
    title: (
      <>
        A table worth
        <br />
        <em>gathering</em> around.
      </>
    ),
    intro:
      "Seasonal plates, generous pours, and the kind of room that makes a Tuesday feel like a celebration.",
    badge: "01",
    info: "Est. 1998 · Downtown Manhattan",
    image: "/images/hero-pasta.jpg",
  },
  {
    eyebrow: "Slow dinners · Crafted nights",
    title: (
      <>
        Fresh pasta,
        <br />
        <em>better</em> company.
      </>
    ),
    intro:
      "An intimate dining room, lively conversation, and plates designed to turn an ordinary evening into a ritual.",
    badge: "02",
    info: "Wine bar · Late reservations",
    image: "/images/menu-dinner.jpg",
  },
  {
    eyebrow: "Weekend rituals · Sunset service",
    title: (
      <>
        Enter through
        <br />
        <em>the glow.</em>
      </>
    ),
    intro:
      "From aperitivo to dessert, every course is paced for lingering, laughing, and just one more glass.",
    badge: "03",
    info: "Open until midnight · Fridays",
    image: "/images/event-table.jpg",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = slides[activeIndex];

  return (
    <section className="hero reveal" id="home" aria-live="polite">
      <div className="hero-slider" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={slide.badge}
            className={`hero-slide ${index === activeIndex ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>
      <div className="hero-shade" />

      <div className="hero-content container">
        <p className="eyebrow hero-eyebrow">{currentSlide.eyebrow}</p>
        <h1>{currentSlide.title}</h1>
        <p className="hero-intro">{currentSlide.intro}</p>

        <div className="hero-actions">
          <a className="button button-light" href="#menu">
            Explore the menu <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link light-link" href="#story">
            Our story <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="hero-controls" aria-label="Hero slides controls">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() =>
            setActiveIndex(
              (current) => (current - 1 + slides.length) % slides.length,
            )
          }
        >
          ←
        </button>
        <div className="hero-dots" aria-label="Slide navigation">
          {slides.map((slide, index) => (
            <button
              key={slide.badge}
              type="button"
              className={index === activeIndex ? "is-active" : ""}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() =>
            setActiveIndex((current) => (current + 1) % slides.length)
          }
        >
          →
        </button>
      </div>

      <div className="hero-note">
        <span>{currentSlide.badge}</span>
        <i /> <span>{currentSlide.info}</span>
      </div>
    </section>
  );
}
