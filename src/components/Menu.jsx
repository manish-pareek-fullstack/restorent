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
    <section id="menu" className="reveal bg-[#f8f5ef] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div
          className="mt-10 flex flex-wrap gap-3"
          aria-label="Menu categories"
          data-reveal-stagger
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              data-scroll-reveal="up"
              className={`rounded-full border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] transition-all ${
                tab === activeTab
                  ? "border-[#1b2423] bg-[#1b2423] text-white"
                  : "border-[#d7d1ca] bg-transparent text-[#5d6a66] hover:border-[#1b2423] hover:text-[#1b2423]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div
          className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3"
          data-reveal-stagger
        >
          {visibleCategories.map((category, index) => (
            <a
              key={`${activeTab}-${category.name}`}
              href="#reserve"
              data-scroll-reveal="image"
              className="group relative min-h-[270px] overflow-hidden rounded-[22px] text-white"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 600px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_20%,rgba(13,25,24,0.86))]" />
              <div className="absolute inset-x-6 bottom-6 left-6">
                <span className="text-[11px] uppercase tracking-[0.12em] text-[#f3a994]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-serif text-[31px] leading-none text-white">
                  {category.name}
                </h3>
                <p className="mt-2 text-[12px] text-white/70">
                  {category.detail}
                </p>
                <span className="absolute bottom-0 right-0 text-[22px]">↗</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
