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

    if (prefersReducedMotion) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % reviews.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const review = reviews[active];

  return (
    <section className="reviews section-pad section-cream reveal">
      <div className="container reviews-inner">
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
        <div className="review-card" key={review.name}>
          <div className="review-avatar">
            <Image src={review.image} alt={review.name} fill sizes="72px" />
          </div>
          <blockquote>“{review.quote}”</blockquote>
          <p className="review-author">
            {review.name} <span>· {review.city}</span>
          </p>
          <div className="review-controls">
            <button
              aria-label="Previous review"
              onClick={() =>
                setActive(
                  (current) => (current + reviews.length - 1) % reviews.length,
                )
              }
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
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
