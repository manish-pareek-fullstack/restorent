import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section className="contact section-pad" id="contact">
      <div className="container contact-grid">
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
          <div className="contact-details">
            <p>
              <span>Visit</span>8th floor, 379 Hudson St
              <br />
              New York, NY 10018
            </p>
            <p>
              <span>Call or write</span>
              <a href="tel:+1967166879">+1 96 716 6879</a>
              <a href="mailto:hello@patoplace.com">hello@patoplace.com</a>
            </p>
          </div>
        </div>
        <div className="hours-panel">
          <span className="panel-kicker">Opening times</span>
          <h3>
            Always a good
            <br />
            <em>time to come by.</em>
          </h3>
          <div className="hours-row">
            <span>Monday - Thursday</span>
            <strong>09:30 — 23:00</strong>
          </div>
          <div className="hours-row">
            <span>Friday - Saturday</span>
            <strong>09:30 — 00:00</strong>
          </div>
          <div className="hours-row">
            <span>Sunday</span>
            <strong>10:00 — 22:00</strong>
          </div>
          <a className="button button-dark" href="#reserve">
            Make a reservation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
