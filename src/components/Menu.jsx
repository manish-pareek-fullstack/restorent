"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    name: "Lunch",
    detail: "Bright plates for the middle of the day",
    image: "/images/menu-lunch.jpg",
  },
  {
    name: "Dinner",
    detail: "The good stuff, after sunset",
    image: "/images/menu-dinner.jpg",
  },
  {
    name: "Happy hour",
    detail: "Small plates, generous pours",
    image: "/images/menu-hour.jpg",
  },
  {
    name: "Drinks",
    detail: "Aperitivo, wine, and after-dinner sips",
    image: "/images/menu-drinks.jpg",
  },
  {
    name: "Starters",
    detail: "A first bite worth remembering",
    image: "/images/menu-starters.jpg",
  },
  {
    name: "Dessert",
    detail: "Always leave room for something sweet",
    image: "/images/menu-dessert.jpg",
  },
];

const tabs = ["All", ...categories.map((category) => category.name)];

export default function Menu() {
  const [activeTab, setActiveTab] = useState("All");

  const visibleCategories =
    activeTab === "All"
      ? categories
      : categories.filter((category) => category.name === activeTab);

  return (
    <section className="menu-section section-pad reveal" id="menu">
      <div className="container">
        <SectionHeading
          eyebrow="From our kitchen"
          title={
            <>
              The Pato
              <br />
              <em>menu.</em>
            </>
          }
          text="Italian instinct, New York energy. Our menus change often, but the welcome stays the same."
        />

        <div className="menu-tabs" aria-label="Menu categories">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={tab === activeTab ? "is-active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {visibleCategories.map((category, index) => (
            <a className="menu-card" href="#reserve" key={category.name}>
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 600px) 100vw, 33vw"
              />
              <div className="menu-card-shade" />
              <div className="menu-card-content">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{category.name}</h3>
                <p>{category.detail}</p>
                <b aria-hidden="true">↗</b>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
