"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    eyebrow: "Italian kitchen · New York",
    title: [
      <>A table worth</>,
      <>
        <em>gathering</em> around.
      </>,
    ],
    intro:
      "Seasonal plates, generous pours, and the kind of room that makes a Tuesday feel like a celebration.",
    badge: "01",
    info: "Est. 1998 · Downtown Manhattan",
    image: "/images/hero-pasta.jpg",
  },
  {
    eyebrow: "Slow dinners · Crafted nights",
    title: [
      <>Fresh pasta,</>,
      <>
        <em>better</em> company.
      </>,
    ],
    intro:
      "An intimate dining room, lively conversation, and plates designed to turn an ordinary evening into a ritual.",
    badge: "02",
    info: "Wine bar · Late reservations",
    image: "/images/menu-dinner.jpg",
  },
  {
    eyebrow: "Weekend rituals · Sunset service",
    title: [
      <>Enter through</>,
      <>
        <em>the glow.</em>
      </>,
    ],
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

    if (prefersReducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = slides[activeIndex];

  return (
    <section
      id="home"
      aria-live="polite"
      className="relative flex min-h-[680px] items-center overflow-hidden bg-[#171e1d] text-white md:min-h-[760px]"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={slide.badge}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${
              index === activeIndex
                ? "hero-photo-settle scale-100 opacity-100"
                : "scale-110 opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>
      <div className="hero-overlay-enter absolute inset-0 bg-[linear-gradient(90deg,rgba(14,25,24,0.82),rgba(20,29,28,0.32)_60%,rgba(20,29,28,0.18))]" />

      <div
        key={currentSlide.badge}
        className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-28 sm:px-6 md:pb-20 lg:px-8"
      >
        <p
          className="hero-enter mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3aa96]"
          style={{ animationDelay: "60ms" }}
        >
          {currentSlide.eyebrow}
        </p>
        <h1 className="max-w-[720px] font-serif text-[clamp(3.3rem,8vw,8.5rem)] leading-[0.86] tracking-[-0.07em] text-white">
          {currentSlide.title.map((line, index) => (
            <span
              key={`${currentSlide.badge}-${index}`}
              className="hero-enter block"
              style={{ animationDelay: `${160 + index * 140}ms` }}
            >
              {line}
            </span>
          ))}
        </h1>
        <p
          className="hero-enter mt-7 max-w-[420px] text-base leading-8 text-white/75 md:text-[17px]"
          style={{ animationDelay: "460ms" }}
        >
          {currentSlide.intro}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6 md:gap-8">
          <a
            href="#menu"
            className="hero-enter btn-primary"
            style={{ animationDelay: "600ms" }}
          >
            Explore the menu <span aria-hidden="true">↗</span>
          </a>
          <a
            href="#story"
            className="hero-enter inline-flex items-center gap-2 border-b border-white/50 pb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:text-[#f4a28f]"
            style={{ animationDelay: "720ms" }}
          >
            Our story <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-4 z-10 flex items-center gap-3 sm:right-8 lg:right-[max(32px,calc((100%-1180px)/2))]">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() =>
            setActiveIndex(
              (current) => (current - 1 + slides.length) % slides.length,
            )
          }
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/5 text-lg text-white transition hover:-translate-y-0.5 hover:bg-white/15"
        >
          ←
        </button>
        <div className="flex items-center gap-2" aria-label="Slide navigation">
          {slides.map((slide, index) => (
            <button
              key={slide.badge}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full border-0 bg-white/45 transition-all ${
                index === activeIndex ? "w-7 bg-white" : "w-2.5"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next slide"
          onClick={() =>
            setActiveIndex((current) => (current + 1) % slides.length)
          }
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/5 text-lg text-white transition hover:-translate-y-0.5 hover:bg-white/15"
        >
          →
        </button>
      </div>

      <div className="absolute bottom-8 left-4 z-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.12em] text-white/70 sm:left-8 lg:left-[max(32px,calc((100%-1180px)/2))]">
        <span>{currentSlide.badge}</span>
        <i className="h-px w-16 bg-white/50" />
        <span>{currentSlide.info}</span>
      </div>
    </section>
  );
}
