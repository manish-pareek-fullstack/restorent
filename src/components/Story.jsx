import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function Story() {
  return (
    <section id="story" className="reveal bg-[#f8f5ef] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-[10%]">
          <div>
            <SectionHeading
              eyebrow="Welcome"
              title={
                <>
                  The long way
                  <br />
                  <em>home.</em>
                </>
              }
              text="Pato Place is a neighborhood Italian restaurant built around the simple pleasure of taking your time. Our kitchen follows the seasons, our cellar follows curiosity, and our table is always set for one more."
            />
            <p
              data-scroll-reveal="up"
              className="mt-8 max-w-[450px] text-[15px] leading-8 text-[#5d6a66]"
            >
              From hand-rolled pasta to a late-night espresso, every detail is
              made to feel both considered and easy. Come for dinner, stay for
              the stories.
            </p>
            <a
              href="#contact"
              data-scroll-reveal="left"
              className="mt-7 inline-flex items-center gap-2 border-b border-[#1b2423]/60 pb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#1b2423] transition-colors hover:text-[#c9573d]"
            >
              Meet the people <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div
            data-scroll-reveal="image"
            className="relative h-[420px] overflow-hidden rounded-[28px] md:h-[520px]"
          >
            <Image
              src="/images/story-kitchen.jpg"
              alt="Chef preparing fresh pasta in the Pato Place kitchen"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover transition duration-700 hover:scale-105"
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-[#120f0c]/30 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
              Pasta, made by hand
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
