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
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, [data-scroll-reveal]");

    if (!elements.length) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        if (element.hasAttribute("data-scroll-reveal")) {
          element.setAttribute("data-revealed", "true");
        } else {
          element.classList.add("is-visible");
        }
      });
      return undefined;
    }

    document.querySelectorAll("[data-reveal-stagger]").forEach((group) => {
      group
        .querySelectorAll(":scope > [data-scroll-reveal]")
        .forEach((element, index) => {
          element.style.setProperty(
            "--reveal-delay",
            `${Math.min(index * 90, 360)}ms`,
          );
        });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.hasAttribute("data-scroll-reveal")) {
              entry.target.setAttribute("data-revealed", "true");
            } else {
              entry.target.classList.add("is-visible");
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -40px 0px" },
    );
    const observed = new WeakSet();
    const observeTargets = (root) => {
      const targets = [];
      if (root.matches?.(".reveal, [data-scroll-reveal]")) {
        targets.push(root);
      }
      targets.push(...root.querySelectorAll(".reveal, [data-scroll-reveal]"));

      targets.forEach((element) => {
        if (observed.has(element)) return;
        observed.add(element);

        const group = element.parentElement;
        if (
          element.hasAttribute("data-scroll-reveal") &&
          group?.hasAttribute("data-reveal-stagger")
        ) {
          const siblings = [
            ...group.querySelectorAll(":scope > [data-scroll-reveal]"),
          ];
          const index = siblings.indexOf(element);
          element.style.setProperty(
            "--reveal-delay",
            `${Math.min(index * 90, 360)}ms`,
          );
        }

        observer.observe(element);
      });
    };

    observeTargets(document);

    const mutations = new MutationObserver((records) => {
      records.forEach((record) => {
        record.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) observeTargets(node);
        });
      });
    });
    mutations.observe(document.querySelector("main"), {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
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
      </main>
      <Footer />
    </>
  );
}
