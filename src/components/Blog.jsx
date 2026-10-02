import Image from "next/image";
import SectionHeading from "./SectionHeading";

const posts = [
  {
    date: "21 Dec 2026",
    title: "The best places for wine in the city",
    text: "A sommelier's gentle guide to bottles worth slowing down for.",
    image: "/images/blog-wine.jpg",
  },
  {
    date: "15 Dec 2026",
    title: "Eggs, cheese, and a Sunday morning",
    text: "The secret to building a breakfast worth getting out of bed for.",
    image: "/images/blog-eggs.jpg",
  },
  {
    date: "12 Dec 2026",
    title: "How to host the good kind of dinner party",
    text: "A few notes on setting the table, then getting out of the way.",
    image: "/images/blog-party.jpg",
  },
];

export default function Blog() {
  return (
    <section id="journal" className="reveal bg-[#f8f5ef] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Latest news"
          title={
            <>
              Notes from
              <br />
              <em>the table.</em>
            </>
          }
        />
        <div
          className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3"
          data-reveal-stagger
        >
          {posts.map((post) => (
            <article
              key={post.title}
              data-reveal-stagger
              className="group rounded-[20px] bg-transparent"
            >
              <a
                href="#contact"
                data-scroll-reveal="image"
                className="group relative block h-[255px] overflow-hidden rounded-[18px]"
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute bottom-3 right-3 rounded-full bg-white px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#1b2423]">
                  Read story ↗
                </span>
              </a>
              <p
                data-scroll-reveal="up"
                className="mt-5 text-[10px] font-bold uppercase tracking-[0.13em] text-[#c9573d]"
              >
                {post.date}
              </p>
              <h3
                data-scroll-reveal="up"
                className="mt-2 max-w-[340px] font-serif text-[27px] leading-[1.05] text-[#1b2423]"
              >
                {post.title}
              </h3>
              <p
                data-scroll-reveal="up"
                className="mt-3 max-w-[330px] text-[14px] leading-7 text-[#5d6a66]"
              >
                {post.text}
              </p>
              <a
                href="#contact"
                data-scroll-reveal="left"
                className="mt-5 inline-flex items-center gap-2 border-b border-[#1b2423]/60 pb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#1b2423] transition-colors hover:text-[#c9573d]"
              >
                Continue reading <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
