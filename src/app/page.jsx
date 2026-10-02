"use client";

import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Discover from "@/components/Discover";
import Menu from "@/components/Menu";
import Events from "@/components/Events";
import Reservation from "@/components/Reservation";
import Reviews from "@/components/Reviews";
import VideoSection from "@/components/VideoSection";
import Blog from "@/components/Blog";
import Newsletter from "@/components/Newsletter";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!elements.length) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <Discover />
        <Menu />
        <Events />
        <Reservation />
        <Reviews />
        <VideoSection />
        <Blog />
        <Newsletter />
        <Contact />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
