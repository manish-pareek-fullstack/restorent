"use client";

import { useState } from "react";
import Image from "next/image";

const gallery = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
  "/images/gallery-6.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery reveal" aria-label="Pato Place gallery">
      <div className="gallery-head container">
        <span className="eyebrow">A glimpse inside</span>
        <a className="text-link" href="#contact">
          Follow along @patoplace <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="gallery-grid">
        {gallery.map((image) => (
          <button
            type="button"
            className="gallery-item"
            key={image}
            onClick={() => setSelectedImage(image)}
            aria-label="Open gallery image"
          >
            <Image
              src={image}
              alt="Pato Place food and dining room"
              fill
              sizes="(max-width: 700px) 50vw, 16vw"
            />
            <span>View</span>
          </button>
        ))}
      </div>

      {selectedImage ? (
        <div
          className="gallery-modal"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded gallery image"
        >
          <div
            className="gallery-modal-inner"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="gallery-close"
              aria-label="Close gallery image"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="gallery-modal-image">
              <Image
                src={selectedImage}
                alt="Expanded view of the Pato Place dining experience"
                fill
                sizes="90vw"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
