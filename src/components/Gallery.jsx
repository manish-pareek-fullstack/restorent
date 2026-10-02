"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    if (!selectedImage) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setSelectedImage(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section
      id="gallery"
      className="reveal bg-[#1b2423] pb-2 pt-8 text-white"
      aria-label="Pato Place gallery"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3a994]">
          A glimpse inside
        </span>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 border-b border-white/60 pb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:text-[#f3a994]"
        >
          Follow along @patoplace <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-0 md:grid-cols-3 xl:grid-cols-6">
        {gallery.map((image) => (
          <button
            type="button"
            key={image}
            onClick={() => setSelectedImage(image)}
            aria-label="Open gallery image"
            className="group relative block aspect-square overflow-hidden border border-white/5 bg-[#1b2423]"
          >
            <Image
              src={image}
              alt="Pato Place food and dining room"
              fill
              sizes="(max-width: 700px) 50vw, 16vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-[#0d1414]/35 opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white text-[10px] font-bold uppercase tracking-[0.12em] text-white opacity-0 transition-opacity group-hover:opacity-100">
              View
            </span>
          </button>
        ))}
      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-[#090d0c]/75 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded gallery image"
        >
          <div
            className="relative w-[min(92vw,960px)] overflow-hidden border border-white/15 bg-[#111615] shadow-[0_30px_70px_rgba(0,0,0,0.35)]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close gallery image"
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-[#0d1414]/80 text-xl text-white"
            >
              ×
            </button>
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={selectedImage}
                alt="Expanded view of the Pato Place dining experience"
                fill
                sizes="90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
