import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function Story() {
  return (
    <section className="story section-pad" id="story">
      <div className="container split-layout">
        <div className="story-copy">
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
          <p className="body-copy">
            From hand-rolled pasta to a late-night espresso, every detail is
            made to feel both considered and easy. Come for dinner, stay for the
            stories.
          </p>
          <a className="text-link" href="#contact">
            Meet the people <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="image-frame story-image">
          <Image
            src="/images/story-kitchen.jpg"
            alt="Chef preparing fresh pasta in the Pato Place kitchen"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
          />
          <span className="image-caption">Pasta, made by hand</span>
        </div>
      </div>
    </section>
  );
}
