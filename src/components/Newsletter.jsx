"use client";

import { useState } from "react";

export default function Newsletter() {
  const [joined, setJoined] = useState(false);
  return (
    <section className="reveal bg-[#c9573d] py-16 text-white md:py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ffe0d5]">
            From our table to your inbox
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[0.95] tracking-[-0.04em] text-white">
            The good stuff,
            <br />
            <em className="text-[#1b2423]">occasionally.</em>
          </h2>
        </div>
        {joined ? (
          <p className="max-w-[440px] font-serif text-[24px] text-white">
            You&apos;re on the list. See you at the table.
          </p>
        ) : (
          <form
            className="w-full max-w-[440px]"
            onSubmit={(event) => {
              event.preventDefault();
              setJoined(true);
            }}
          >
            <div className="grid grid-cols-[1fr_46px] border-b border-white/65 pb-2">
              <label className="sr-only" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                required
                className="min-w-0 border-0 bg-transparent px-0 py-2 text-white placeholder:text-white/70 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="text-2xl text-white transition-transform hover:translate-x-0.5"
              >
                ↗
              </button>
            </div>
            <p className="mt-4 text-[11px] text-[#ffe0d5]">
              No spam, just seasonal menus, events, and reasons to visit.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
