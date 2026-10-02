"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const eventDate = new Date("2026-11-21T20:00:00");

function getTimeLeft() {
  const difference = Math.max(0, eventDate.getTime() - Date.now());

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Events() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="events section-pad section-ink reveal" id="events">
      <div className="container split-layout event-layout">
        <div>
          <SectionHeading
            eyebrow="Upcoming"
            title={
              <>
                Good things
                <br />
                <em>coming up.</em>
              </>
            }
            text="A table is even better when there is something to celebrate. Join us for the next one."
            light
          />

          <div className="event-meta">
            <span className="event-date">
              <strong>21</strong>
              <small>
                NOV
                <br />
                2026
              </small>
            </span>
            <span>
              <b>Tuesday · 8:00 PM</b>
              <br />
              Wines from the coast of Liguria
            </span>
          </div>

          <div className="event-countdown" aria-label="Time until event">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="countdown-box">
                <strong>{String(value).padStart(2, "0")}</strong>
                <span>{unit}</span>
              </div>
            ))}
          </div>

          <p className="event-description">
            An intimate evening of coastal Italian cooking, candlelight, and a
            flight of bright, mineral wines. Six courses, one long table.
          </p>
          <a className="button button-outline" href="#reserve">
            View event details <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="image-frame event-image">
          <Image
            src="/images/event-table.jpg"
            alt="A candlelit dinner table prepared for an event"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
          />
          <div className="event-tag">
            Save
            <br />
            the date
          </div>
        </div>
      </div>
    </section>
  );
}
