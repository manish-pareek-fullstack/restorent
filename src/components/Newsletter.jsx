"use client";

import { useState } from "react";

export default function Newsletter() {
  const [joined, setJoined] = useState(false);
  return (
    <section className="newsletter section-terracotta">
      <div className="container newsletter-inner">
        <div>
          <p className="eyebrow">From our table to your inbox</p>
          <h2>
            The good stuff,
            <br />
            <em>occasionally.</em>
          </h2>
        </div>
        {joined ? (
          <p className="newsletter-success">
            You&apos;re on the list. See you at the table.
          </p>
        ) : (
          <form
            className="newsletter-form"
            onSubmit={(event) => {
              event.preventDefault();
              setJoined(true);
            }}
          >
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Your email address"
              required
            />
            <button type="submit" aria-label="Subscribe to newsletter">
              ↗
            </button>
            <p>No spam, just seasonal menus, events, and reasons to visit.</p>
          </form>
        )}
      </div>
    </section>
  );
}
