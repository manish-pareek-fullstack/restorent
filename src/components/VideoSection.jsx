"use client";

import { useState } from "react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="reveal relative min-h-[560px] overflow-hidden bg-[url('/images/video-kitchen.jpg')] bg-cover bg-center text-white">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,28,27,0.82),rgba(17,28,27,0.2))]" />
      <div
        className="relative z-10 mx-auto flex min-h-[560px] max-w-7xl flex-col justify-center px-4 sm:px-6 lg:px-8"
        data-reveal-stagger
      >
        <p
          data-scroll-reveal="left"
          className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3a994]"
        >
          Behind the scenes
        </p>
        <h2
          data-scroll-reveal="up"
          className="mb-8 font-serif text-[clamp(3rem,6vw,5.8rem)] leading-[0.9] tracking-[-0.05em] text-white"
        >
          Come hungry.
          <br />
          <em className="text-[#f3a994]">Leave glowing.</em>
        </h2>
        <button
          data-scroll-reveal="image"
          aria-label={playing ? "Pause kitchen story" : "Play kitchen story"}
          onClick={() => setPlaying(!playing)}
          className="flex h-16 w-16 items-center justify-center rounded-full border border-white/70 bg-transparent text-lg transition-colors hover:bg-white hover:text-[#1b2423]"
        >
          {playing ? "Ⅱ" : "▶"}
        </button>
        <span
          data-scroll-reveal="up"
          className="mt-4 text-[11px] uppercase tracking-[0.12em] text-white/75"
        >
          {playing ? "Playing · The Pato Place story" : "Watch our story"}
        </span>
      </div>
    </section>
  );
}
