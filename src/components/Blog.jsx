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
    <section className="blog section-pad" id="journal">
      <div className="container">
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
        <div className="blog-grid">
          {posts.map((post) => (
            <article className="post" key={post.title}>
              <a className="post-image" href="#contact">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(max-width: 700px) 100vw, 33vw"
                />
                <span>Read story ↗</span>
              </a>
              <p className="post-date">{post.date}</p>
              <h3>{post.title}</h3>
              <p>{post.text}</p>
              <a className="text-link" href="#contact">
                Continue reading <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
