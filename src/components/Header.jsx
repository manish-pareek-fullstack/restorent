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

const mobileGallery = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
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

  useEffect(() => {
    if (!open) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        open ? "transition-colors md:transition-all" : "transition-all"
      } duration-300 ${
        scrolled
          ? `bg-[#131a1a]/80 shadow-[0_12px_32px_rgba(8,12,11,0.18)] ${
              open ? "md:backdrop-blur-md" : "backdrop-blur-md"
            }`
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          aria-label="Pato Place home"
          className="flex items-center gap-3 py-5 text-white"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full border border-current font-serif text-xl italic">
            P
          </span>
          <span className="flex flex-col leading-none tracking-[0.22em]">
            <strong className="text-base font-bold">PATO</strong>
            <small className="mt-1 text-[8px] tracking-[0.36em]">PLACE</small>
          </span>
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 md:flex"
        >
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="relative text-[11px] font-bold uppercase tracking-[0.12em] text-white/90 transition-colors hover:text-[#f4a28f] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#reserve"
          className="hidden items-center gap-2 border-b border-white/50 pb-1 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-colors hover:text-[#f4a28f] md:inline-flex"
        >
          Book a table <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/5 md:hidden"
        >
          <span className="flex flex-col gap-[5px]">
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </span>
        </button>
      </div>

      {open && (
        <button
          type="button"
          aria-label="Close mobile menu overlay"
          onClick={closeMenu}
          className="fixed inset-0 z-40 bg-[#101615]/65 backdrop-blur-[2px] md:hidden"
        />
      )}

      <aside
        className={`fixed right-0 top-0 z-50 h-full w-[86vw] max-w-sm transform border-l border-[#d8d4cb] bg-[#f8f5ef] text-[#1b2423] shadow-2xl transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-[#e5d9cf] px-5 py-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9573d]">
            Menu
          </span>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8d4cb] text-xl text-[#1b2423] transition-colors hover:bg-[#eee9df] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c9573d] active:bg-[#f1b29e]"
          >
            ×
          </button>
        </div>

        <nav className="space-y-2 px-5 py-6">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="flex items-center justify-between rounded-xl border border-transparent px-2 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#1b2423] transition-colors hover:border-[#eadfce] hover:bg-white focus-visible:border-[#d8d4cb] focus-visible:bg-white focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#c9573d] active:border-[#d98770] active:bg-[#f1b29e]"
            >
              {label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>

        <div className="px-5 pb-6">
          <a href="#reserve" onClick={closeMenu} className="btn-dark w-full">
            Reservation <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="border-t border-[#e7ddd4] px-5 py-5">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.22em] text-[#c9573d]">
            Gallery
          </p>
          <div className="grid grid-cols-3 gap-2">
            {mobileGallery.map((image, index) => (
              <a
                key={image}
                href="#gallery"
                onClick={closeMenu}
                className="group relative block overflow-hidden rounded-lg border border-[#e1d7cd] bg-[#ece2d7]"
                aria-label={`View gallery image ${index + 1}`}
              >
                <img
                  src={image}
                  alt="Pato Place dining moment"
                  className="h-20 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </header>
  );
}
