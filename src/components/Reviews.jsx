"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const reviews = [
  {
    quote:
      "A rare restaurant that makes the whole evening feel effortless. We came for pasta and stayed for one more glass.",
    name: "Marie Simmons",
    city: "New York",
    image: "/images/reviewer-marie.jpg",
  },
  {
    quote:
      "The room is gorgeous, the service is warm, and the food tastes like someone genuinely cared while making it.",
    name: "Luca Bennett",
    city: "Brooklyn",
    image: "/images/reviewer-luca.jpg",
  },
  {
    quote:
      "Our new favorite downtown table. The tiramisu alone is worth crossing the bridge for.",
    name: "Sofia Reed",
    city: "Queens",
    image: "/images/reviewer-sofia.jpg",
  },
];

export default function Reviews() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return undefined;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % reviews.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const review = reviews[active];

  return (
    <section className="reveal bg-[#eee9df] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-[8%] lg:px-8">
        <SectionHeading
          eyebrow="Customers say"
          title={
            <>
              A little love
              <br />
              <em>from our tables.</em>
            </>
          }
        />
        <div
          key={review.name}
          data-reveal-stagger
          className="relative pl-24 md:pl-28"
        >
          <div
            data-scroll-reveal="image"
            className="absolute left-0 top-0 h-[72px] w-[72px] overflow-hidden rounded-full"
          >
            <Image
              src={review.image}
              alt={review.name}
              fill
              sizes="72px"
              className="object-cover"
            />
          </div>
          <blockquote
            data-scroll-reveal="right"
            className="max-w-[620px] font-serif text-[clamp(1.7rem,3vw,2.5rem)] leading-[1.18] text-[#1b2423]"
          >
            “{review.quote}”
          </blockquote>
          <p
            data-scroll-reveal="up"
            className="mt-6 text-[11px] font-bold uppercase tracking-[0.14em] text-[#c9573d]"
          >
            {review.name}{" "}
            <span className="text-[#5d6a66]">· {review.city}</span>
          </p>
          <div
            data-scroll-reveal="up"
            className="mt-8 flex items-center gap-4 text-[10px] uppercase tracking-[0.1em] text-[#5d6a66]"
          >
            <button
              aria-label="Previous review"
              onClick={() =>
                setActive(
                  (current) => (current + reviews.length - 1) % reviews.length,
                )
              }
              className="flex h-9 w-9 items-center justify-center border border-[#d7d1ca] bg-transparent text-[#1b2423] transition-colors hover:bg-white"
            >
              ←
            </button>
            <span>
              {String(active + 1).padStart(2, "0")} /
              {String(reviews.length).padStart(2, "0")}
            </span>
            <button
              aria-label="Next review"
              onClick={() =>
                setActive((current) => (current + 1) % reviews.length)
              }
              className="flex h-9 w-9 items-center justify-center border border-[#d7d1ca] bg-transparent text-[#1b2423] transition-colors hover:bg-white"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
