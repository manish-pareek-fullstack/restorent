"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="reserve" className="reveal bg-[#f8f5ef] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-[10%]">
          <div>
            <SectionHeading
              eyebrow="Reservations"
              title={
                <>
                  Meet me
                  <br />
                  <em>at Pato.</em>
                </>
              }
              text="Tell us when you would like to join us and we will take care of the rest."
            />
            {submitted ? (
              <div className="mt-10 space-y-3 rounded-[20px] border-l-[3px] border-[#c9573d] bg-[#eee9df] p-6">
                <strong className="block font-serif text-[25px] leading-none text-[#1b2423]">
                  Your table is on our radar.
                </strong>
                <span className="block text-[#5d6a66]">
                  We will confirm your reservation shortly.
                </span>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 border-b border-[#1b2423]/60 pb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#1b2423] hover:text-[#c9573d]"
                  onClick={() => setSubmitted(false)}
                >
                  Make another request
                </button>
              </div>
            ) : (
              <form
                data-scroll-reveal="left"
                data-reveal-stagger
                className="mt-10"
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
              >
                <div
                  data-scroll-reveal="up"
                  className="grid gap-4 md:grid-cols-2"
                >
                  <label className="flex flex-col gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5d6a66]">
                    Date
                    <input
                      type="date"
                      required
                      defaultValue="2026-10-01"
                      className="w-full border-0 border-b border-[#d7d1ca] bg-transparent px-0 py-2 text-[14px] text-[#1b2423] outline-none transition-colors focus:border-[#c9573d]"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5d6a66]">
                    Time
                    <select
                      defaultValue="19:00"
                      className="w-full border-0 border-b border-[#d7d1ca] bg-transparent px-0 py-2 text-[14px] text-[#1b2423] outline-none transition-colors focus:border-[#c9573d]"
                    >
                      <option>19:00</option>
                      <option>19:30</option>
                      <option>20:00</option>
                      <option>20:30</option>
                      <option>21:00</option>
                    </select>
                  </label>
                </div>
                <div
                  data-scroll-reveal="up"
                  className="mt-4 grid gap-4 md:grid-cols-2"
                >
                  <label className="flex flex-col gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5d6a66]">
                    Guests
                    <select
                      defaultValue="2"
                      className="w-full border-0 border-b border-[#d7d1ca] bg-transparent px-0 py-2 text-[14px] text-[#1b2423] outline-none transition-colors focus:border-[#c9573d]"
                    >
                      <option>1 guest</option>
                      <option>2 guests</option>
                      <option>3 guests</option>
                      <option>4 guests</option>
                      <option>5+ guests</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5d6a66]">
                    Name
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      className="w-full border-0 border-b border-[#d7d1ca] bg-transparent px-0 py-2 text-[14px] text-[#1b2423] outline-none transition-colors placeholder:text-[#7d847f] focus:border-[#c9573d]"
                    />
                  </label>
                </div>
                <div
                  data-scroll-reveal="up"
                  className="mt-4 grid gap-4 md:grid-cols-2"
                >
                  <label className="flex flex-col gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5d6a66]">
                    Email
                    <input
                      type="email"
                      placeholder="you@email.com"
                      required
                      className="w-full border-0 border-b border-[#d7d1ca] bg-transparent px-0 py-2 text-[14px] text-[#1b2423] outline-none transition-colors placeholder:text-[#7d847f] focus:border-[#c9573d]"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-[10px] font-bold uppercase tracking-[0.13em] text-[#5d6a66]">
                    Phone
                    <input
                      type="tel"
                      placeholder="+1 212 000 0000"
                      className="w-full border-0 border-b border-[#d7d1ca] bg-transparent px-0 py-2 text-[14px] text-[#1b2423] outline-none transition-colors placeholder:text-[#7d847f] focus:border-[#c9573d]"
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  data-scroll-reveal="left"
                  className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-[#1b2423] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5 hover:bg-[#c9573d]"
                >
                  Request a table <span aria-hidden="true">↗</span>
                </button>
              </form>
            )}
          </div>

          <div
            data-scroll-reveal="image"
            className="relative h-[420px] overflow-hidden rounded-[28px] md:h-[590px]"
          >
            <Image
              src="/images/reservation.jpg"
              alt="A Pato Place table set for dinner"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute bottom-5 right-5 text-right font-serif text-[28px] leading-[1.05] text-white">
              Dinner is
              <br />
              <em className="text-[#f3a994]">better together.</em>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
