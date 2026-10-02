export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a className="brand brand-footer" href="#home">
          <span className="brand-mark">P</span>
          <span className="brand-copy">
            <strong>PATO</strong>
            <small>PLACE</small>
          </span>
        </a>
        <p>
          Italian instinct.
          <br />
          New York spirit.
        </p>
        <nav aria-label="Footer navigation">
          <a href="#menu">Menu</a>
          <a href="#events">Events</a>
          <a href="#journal">Journal</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="footer-arrow" href="#home" aria-label="Back to top">
          ↑
        </a>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Pato Place. Made for long lunches.</span>
        <span>Privacy · Terms</span>
      </div>
    </footer>
  );
}
