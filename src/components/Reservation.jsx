"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="reservation section-pad" id="reserve">
      <div className="container split-layout reservation-layout">
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
            <div className="form-success">
              <strong>Your table is on our radar.</strong>
              <span>We will confirm your reservation shortly.</span>
              <button className="text-link" onClick={() => setSubmitted(false)}>
                Make another request
              </button>
            </div>
          ) : (
            <form
              className="booking-form"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="form-row">
                <label>
                  Date
                  <input type="date" required defaultValue="2026-10-01" />
                </label>
                <label>
                  Time
                  <select defaultValue="19:00">
                    <option>19:00</option>
                    <option>19:30</option>
                    <option>20:00</option>
                    <option>20:30</option>
                    <option>21:00</option>
                  </select>
                </label>
              </div>
              <div className="form-row">
                <label>
                  Guests
                  <select defaultValue="2">
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4 guests</option>
                    <option>5+ guests</option>
                  </select>
                </label>
                <label>
                  Name
                  <input type="text" placeholder="Your name" required />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Email
                  <input type="email" placeholder="you@email.com" required />
                </label>
                <label>
                  Phone
                  <input type="tel" placeholder="+1 212 000 0000" />
                </label>
              </div>
              <button className="button button-dark" type="submit">
                Request a table <span aria-hidden="true">↗</span>
              </button>
            </form>
          )}
        </div>
        <div className="image-frame reservation-image">
          <Image
            src="/images/reservation.jpg"
            alt="A Pato Place table set for dinner"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
          />
          <div className="reservation-note">
            Dinner is
            <br />
            <em>better together.</em>
          </div>
        </div>
      </div>
    </section>
  );
}
