import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import sevenLevelLogo from "../assets/imgs/logos/7level_logo.webp";
import sevenLevelLogoOutlined from "../assets/imgs/logos/7level_logo_outlined.png";
import "./TopNavbar.css";

export default function TopNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // On the hero (dark bg), use all-white logo. After scroll (cream bg), use original colors with outline.
  const isHeroMode = !scrolled;

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : "navbar--hero"}`}>
      <div className="navbar__inner container">

        {/* Logo: icon mark + wordmark */}
        <Link to="/" className="navbar__logo">
          <img
            src={isHeroMode ? sevenLevelLogo : sevenLevelLogoOutlined}
            alt="7Level logo"
            className="navbar__logo-img"
          />
          <span className="navbar__logo-text">7Level</span>
        </Link>

        <nav className="navbar__links">
          <a href="/#ventures">Ventures</a>
          {/* <a href="/#about">About</a> */}
          {/* <a href="/#contact">Contact</a> */}
        </nav>

        <a href="mailto:contact@7level.in" className="navbar__cta">
          <span>Let's Talk</span>
          <ArrowUpRight size={14} strokeWidth={2.5} />
        </a>

        <button
          className={`navbar__burger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="navbar__drawer">
          <a href="/#ventures" onClick={() => setMenuOpen(false)}>Ventures</a>
          {/* <a href="/#about" onClick={() => setMenuOpen(false)}>About</a> */}
          {/* <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a> */}
          <a href="mailto:contact@7level.in" className="drawer__cta" onClick={() => setMenuOpen(false)}>
            contact@7level.in <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
