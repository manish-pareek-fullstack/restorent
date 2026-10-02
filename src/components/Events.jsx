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
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const syncCountdown = () => setTimeLeft(getTimeLeft());
    syncCountdown();

    const timer = window.setInterval(syncCountdown, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="events"
      className="reveal bg-[#1b2423] py-20 text-white md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid min-w-0 grid-cols-1 items-start gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-8 lg:gap-[12%]">
          <div className="order-2 w-full min-w-0 max-w-full md:order-1">
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

            <div
              data-scroll-reveal="left"
              className="mt-8 flex items-center gap-5 text-[13px] text-white/70"
            >
              <span className="flex items-center gap-2 text-[#f3a994]">
                <strong className="font-serif text-[54px] leading-none">
                  21
                </strong>
                <small className="text-[10px] font-bold uppercase tracking-[0.12em] leading-[1.3]">
                  NOV
                  <br />
                  2026
                </small>
              </span>
              <span>
                <b className="block text-base font-bold text-white">
                  Tuesday · 8:00 PM
                </b>
                Wines from the coast of Liguria
              </span>
            </div>

            <div
              className="mt-6 grid w-full max-w-[420px] min-w-0 grid-cols-4 gap-3"
              aria-label="Time until event"
              data-reveal-stagger
            >
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div
                  key={unit}
                  data-scroll-reveal="up"
                  className="border border-white/10 bg-white/[0.02] px-3 py-4 text-center"
                >
                  <strong className="font-serif text-[32px] leading-none">
                    {String(value).padStart(2, "0")}
                  </strong>
                  <span className="mt-2 block text-[10px] uppercase tracking-[0.12em] text-white/70">
                    {unit}
                  </span>
                </div>
              ))}
            </div>

            <p
              data-scroll-reveal="up"
              className="mt-6 max-w-[410px] text-[14px] leading-7 text-white/65"
            >
              An intimate evening of coastal Italian cooking, candlelight, and a
              flight of bright, mineral wines. Six courses, one long table.
            </p>
            <a
              href="#reserve"
              data-scroll-reveal="left"
              className="btn-light mt-7"
            >
              View event details <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div
            data-scroll-reveal="image"
            className="relative order-1 h-[clamp(240px,72vw,320px)] w-full min-w-0 max-w-full overflow-hidden rounded-[28px] md:order-2 md:h-[550px]"
          >
            <Image
              src="/images/event-table.jpg"
              alt="A candlelit dinner table prepared for an event"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute bottom-5 right-5 grid h-24 w-24 place-items-center rounded-full bg-[#c9573d] text-center font-serif text-[15px] italic leading-tight text-white [transform:rotate(-8deg)] md:h-28 md:w-28">
              Save
              <br />
              the date
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
