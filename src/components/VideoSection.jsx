"use client";

import { useState } from "react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  return (
    <section className="video-section">
      <div className="video-overlay" />
      <div className="container video-content">
        <p className="eyebrow">Behind the scenes</p>
        <h2>
          Come hungry.
          <br />
          <em>Leave glowing.</em>
        </h2>
        <button
          className="play-button"
          aria-label={playing ? "Pause kitchen story" : "Play kitchen story"}
          onClick={() => setPlaying(!playing)}
        >
          {playing ? "Ⅱ" : "▶"}
        </button>
        <span className="video-label">
          {playing ? "Playing · The Pato Place story" : "Watch our story"}
        </span>
      </div>
    </section>
  );
}
