import Image from "next/image";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    title: "Romantic rooms",
    text: "Low lights, linen napkins, and a little room to linger.",
    image: "/images/discover-room.jpg",
  },
  {
    title: "Delicious food",
    text: "Bright, generous plates built around the best of the market.",
    image: "/images/discover-food.jpg",
  },
  {
    title: "Wines to love",
    text: "Old-world classics and new favorites chosen with feeling.",
    image: "/images/discover-wine.jpg",
  },
];

export default function Discover() {
  return (
    <section className="reveal bg-[#eee9df] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Discover"
          title={
            <>
              Why Pato
              <br />
              <em>Place?</em>
            </>
          }
          text="A little bit of Italy, a little bit of the city, and a lot of reasons to come back."
        />
        <div
          className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          data-reveal-stagger
        >
          {pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              data-scroll-reveal="image"
              className="group rounded-[28px] p-2 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative mx-auto aspect-square w-full max-w-[360px] overflow-hidden rounded-full">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 768px) 80vw, 30vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <span className="mt-6 block text-[11px] font-bold uppercase tracking-[0.15em] text-[#c9573d]">
                0{index + 1}
              </span>
              <h3 className="mt-2 font-serif text-[28px] leading-none text-[#1b2423]">
                {pillar.title}
              </h3>
              <p className="mt-3 max-w-[280px] text-[14px] leading-7 text-[#5d6a66]">
                {pillar.text}
              </p>
              <a
                href="#contact"
                className="mt-5 inline-flex items-center gap-2 border-b border-[#1b2423]/60 pb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#1b2423] transition-colors hover:text-[#c9573d]"
              >
                Discover <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
