const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Story", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Events", href: "#events" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

const recentPosts = [
  { title: "Seasonal tasting menu is live", href: "#menu" },
  { title: "Saturday wine night details", href: "#events" },
  { title: "A slow Sunday brunch guide", href: "#journal" },
];

const galleryThumbs = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com", icon: "◎" },
  { label: "Facebook", href: "https://facebook.com", icon: "◌" },
  { label: "X", href: "https://x.com", icon: "X" },
];

export default function Footer() {
  return (
    <footer className="reveal bg-[#1b2423] py-0 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-[1.2fr_1fr_1fr_1.2fr_1fr]"
          data-reveal-stagger
        >
          <div data-scroll-reveal="left" className="space-y-5">
            <a
              href="#home"
              aria-label="Pato Place home"
              className="inline-flex items-center gap-3 text-white transition-transform hover:-translate-y-0.5"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full border border-current font-serif text-xl italic">
                P
              </span>
              <span className="flex flex-col leading-none tracking-[0.22em]">
                <strong className="text-base font-bold">PATO</strong>
                <small className="mt-1 text-[8px] tracking-[0.36em]">
                  PLACE
                </small>
              </span>
            </a>
            <p className="max-w-[220px] font-serif text-[20px] leading-[1.1] text-white/70">
              Italian instinct.
              <br />
              New York spirit.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-[12px] text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#f3a994] hover:text-[#f3a994]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div data-scroll-reveal="up">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3a994]">
              Contact
            </p>
            <div className="mt-5 space-y-4 text-[14px] leading-7 text-white/70">
              <p>
                XXXXXXXX
                <br />
                XXXXXXXX
              </p>
              <div>
                <a
                  href="tel:+1967166879"
                  className="block transition-colors hover:text-white"
                >
                  XXXXXXXX
                </a>
                <a
                  href="mailto:hello@patoplace.com"
                  className="block transition-colors hover:text-white"
                >
                  XXXXXXXX
                </a>
              </div>
            </div>
          </div>

          <div data-scroll-reveal="right">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3a994]">
              Opening times
            </p>
            <div className="mt-5 space-y-3 text-[13px] text-white/70">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
                <span>Mon – Thu</span>
                <strong className="text-white">09:30 — 23:00</strong>
              </div>
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
                <span>Fri – Sat</span>
                <strong className="text-white">09:30 — 00:00</strong>
              </div>
              <div className="flex items-center justify-between gap-4 pb-2">
                <span>Sunday</span>
                <strong className="text-white">10:00 — 22:00</strong>
              </div>
            </div>
          </div>

          <div data-scroll-reveal="up">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3a994]">
              Latest updates
            </p>
            <ul className="mt-5 space-y-3 text-[13px] text-white/70">
              {recentPosts.map((post) => (
                <li key={post.title}>
                  <a
                    href={post.href}
                    className="inline-flex items-start gap-2 transition-colors hover:text-white"
                  >
                    <span aria-hidden="true" className="mt-1 text-[#f3a994]">
                      •
                    </span>
                    <span>{post.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div id="gallery" data-scroll-reveal="right">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f3a994]">
              Gallery
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 xl:grid-cols-2">
              {galleryThumbs.map((image, index) => (
                <a
                  key={image}
                  href="#gallery"
                  className="group relative block overflow-hidden rounded-lg border border-white/10 bg-white/5"
                  aria-label={`Gallery image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt="Pato Place dining moment"
                    className="h-16 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <nav
            aria-label="Footer navigation"
            data-scroll-reveal="left"
            className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-[0.12em] text-white/65"
          >
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div
            data-scroll-reveal="right"
            className="flex flex-col gap-2 text-[10px] uppercase tracking-[0.08em] text-white/40 sm:flex-row sm:items-center sm:gap-5"
          >
            <span>© 2026 Pato Place. Made for long lunches.</span>
            <span>Privacy · Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
