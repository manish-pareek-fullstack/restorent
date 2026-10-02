"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

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
  const pointerStart = useRef(null);

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

  const handlePointerDown = (event) => {
    if (
      (event.pointerType !== "touch" && event.pointerType !== "pen") ||
      (event.target instanceof Element && event.target.closest("a, button"))
    ) {
      return;
    }

    pointerStart.current = { x: event.clientX, y: event.clientY };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event) => {
    const start = pointerStart.current;
    pointerStart.current = null;

    if (!start) return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;

    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) {
      return;
    }

    setActiveIndex(
      (current) =>
        (current + (deltaX < 0 ? 1 : -1) + slides.length) % slides.length,
    );
  };

  const handlePointerCancel = () => {
    pointerStart.current = null;
  };

  return (
    <section
      id="home"
      aria-live="polite"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      className="relative flex min-h-[680px] touch-pan-y items-start overflow-hidden bg-[#171e1d] text-white pb-16 md:min-h-[760px] md:items-center md:pb-0"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {slides.map((slide, index) => (
          <div
            key={slide.badge}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === activeIndex
                ? "hero-photo-settle scale-100 opacity-100"
                : "scale-110 opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              sizes="100vw"
              preload={index === 0}
              className="object-cover object-center"
            />
          </div>
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

      <div className="absolute bottom-6 left-4 right-4 z-10 flex items-center justify-between gap-3 sm:right-8 lg:right-[max(32px,calc((100%-1180px)/2))]">
        <button
          type="button"
          aria-label="Previous slide"
          onClick={() =>
            setActiveIndex(
              (current) => (current - 1 + slides.length) % slides.length,
            )
          }
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/5 text-lg text-white transition hover:-translate-y-0.5 hover:bg-white/15"
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
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/5 text-lg text-white transition hover:-translate-y-0.5 hover:bg-white/15"
        >
          →
        </button>
      </div>

      <div className="absolute bottom-[96px] left-4 right-4 z-10 flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-white/90 sm:gap-3 md:bottom-8 md:left-8 md:right-auto md:flex-nowrap lg:left-[max(32px,calc((100%-1180px)/2))]">
        <span className="min-w-0 truncate">{currentSlide.badge}</span>
        <i className="h-px w-12 bg-white/50 sm:w-16" />
        <span className="min-w-0 truncate">{currentSlide.info}</span>
      </div>
    </section>
  );
}
