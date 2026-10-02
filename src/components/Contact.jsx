import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="reveal bg-[#eee9df] py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-[12%] lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Come say hello"
            title={
              <>
                Find your
                <br />
                <em>way here.</em>
              </>
            }
            text="The door is open, the pasta is on, and there is probably a seat with your name on it."
          />
          <div
            data-scroll-reveal="left"
            className="mt-10 flex flex-col gap-7 text-[14px] text-[#5d6a66] md:flex-row md:gap-14"
          >
            <p>
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-[#c9573d]">
                Visit
              </span>
              8th floor, 379 Hudson St
              <br />
              New York, NY 10018
            </p>
            <p>
              <span className="mb-2 block text-[10px] font-bold uppercase tracking-[0.14em] text-[#c9573d]">
                Call or write
              </span>
              <a
                href="tel:+1967166879"
                className="block transition-colors hover:text-[#c9573d]"
              >
                +1 96 716 6879
              </a>
              <a
                href="mailto:hello@patoplace.com"
                className="block transition-colors hover:text-[#c9573d]"
              >
                hello@patoplace.com
              </a>
            </p>
          </div>
        </div>

        <div
          data-scroll-reveal="right"
          className="rounded-[26px] bg-white p-7 shadow-[0_18px_45px_rgba(17,18,18,0.06)] md:p-10"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#c9573d]">
            Opening times
          </span>
          <h3 className="mt-5 font-serif text-[36px] leading-[0.98] text-[#1b2423]">
            Always a good
            <br />
            <em>time to come by.</em>
          </h3>
          <div className="mt-8 space-y-0">
            <div className="flex justify-between gap-3 border-t border-[#e4ddd6] py-4 text-[12px] text-[#5d6a66]">
              <span>Monday - Thursday</span>
              <strong className="font-bold text-[#1b2423]">
                09:30 — 23:00
              </strong>
            </div>
            <div className="flex justify-between gap-3 border-t border-[#e4ddd6] py-4 text-[12px] text-[#5d6a66]">
              <span>Friday - Saturday</span>
              <strong className="font-bold text-[#1b2423]">
                09:30 — 00:00
              </strong>
            </div>
            <div className="flex justify-between gap-3 border-t border-[#e4ddd6] py-4 text-[12px] text-[#5d6a66]">
              <span>Sunday</span>
              <strong className="font-bold text-[#1b2423]">
                10:00 — 22:00
              </strong>
            </div>
          </div>
          <a
            href="#reserve"
            className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#1b2423] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-transform hover:-translate-y-0.5 hover:bg-[#c9573d]"
          >
            Make a reservation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
