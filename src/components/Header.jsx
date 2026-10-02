"use client";

import { useEffect, useState } from "react";

const links = [
  ["Home", "#home"],
  ["Story", "#story"],
  ["Menu", "#menu"],
  ["Events", "#events"],
  ["Journal", "#journal"],
  ["Contact", "#contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <a className="brand" href="#home" aria-label="Pato Place home">
          <span className="brand-mark">P</span>
          <span className="brand-copy">
            <strong>PATO</strong>
            <small>PLACE</small>
          </span>
        </a>

        <nav
          className={open ? "main-nav is-open" : "main-nav"}
          aria-label="Primary navigation"
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#reserve">
          Book a table <span aria-hidden="true">↗</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
