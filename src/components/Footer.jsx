import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* CTA band (temporarily hidden until ready): */}
      {/* 
      <div className="footer-cta-band">
        <div className="container footer-cta-inner">
          <h2 className="footer-cta-heading">
            Need to talk business<br />with one of our teams?
          </h2>
          <a href="mailto:contact@7level.in" className="footer-cta-btn">
            Send an email <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      */}

      {/* Main footer */}
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-col footer-brand-col">
            <Link to="/" className="footer-logo">7Level</Link>
            <p className="footer-bio">
              Parent company for SpeedX Rental, Navkar Metal, GreenRocket TV,
              LRN Studio, and 7level-io.
            </p>
          </div>

          <div className="footer-col">
            <p className="footer-col-label">Ventures</p>
            <ul>
              <li><a href="https://speedxrental.7level.in" target="_blank" rel="noopener noreferrer">SpeedX Rental <ArrowUpRight size={11} /></a></li>
              <li><a href="https://navkarmetals.7level.in/" target="_blank" rel="noopener noreferrer">Navkar Metal <ArrowUpRight size={11} /></a></li>
              <li><a href="https://greenrockettv.com/" target="_blank" rel="noopener noreferrer">GreenRocket TV <ArrowUpRight size={11} /></a></li>
              <li><Link to="/lrn-studio">LRN Studio</Link></li>
              <li><Link to="/7level-io">7level-io</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-col-label">Navigate</p>
            <ul>
              <li><a href="#ventures">Ventures</a></li>
              {/* <li><a href="#about">About</a></li> */}
              {/* <li><a href="#contact">Contact</a></li> */}
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-col-label">Contact</p>
            <a href="mailto:contact@7level.in" className="footer-email">
              contact@7level.in
            </a>
            <p className="footer-location">India</p>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} 7Level Group. All rights reserved.</p>
          <p className="footer-tagline">Operating from India across mobility, metals, media, and tech.</p>
        </div>
      </div>
    </footer>
  );
}
