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
    <section className="discover section-pad section-cream">
      <div className="container">
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
        <div className="pillar-grid">
          {pillars.map((pillar, index) => (
            <article className="pillar" key={pillar.title}>
              <div className="round-image">
                <Image
                  src={pillar.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 80vw, 30vw"
                />
              </div>
              <span className="pillar-number">0{index + 1}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
              <a className="text-link" href="#contact">
                Discover <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
