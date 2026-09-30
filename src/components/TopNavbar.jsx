import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import sevenLevelLogo from "../assets/imgs/logos/7level_logo.webp";
import sevenLevelLogoOutlined from "../assets/imgs/logos/7level_logo_outlined.png";
import "./TopNavbar.css";

export default function TopNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const stripRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const updateNavbar = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 60);

      const marquee = document.querySelector(".marquee-strip");
      const strip = stripRef.current;
      const nav = navRef.current;

      if (marquee && strip && nav && !menuOpen) {
        const marqueeRect = marquee.getBoundingClientRect();
        const navRect = nav.getBoundingClientRect();
        const STRIP_HEIGHT = 5;

        // Distance from navbar bottom to marquee bottom
        const dist = marqueeRect.bottom - navRect.bottom;

        // As the marquee approaches from below (within 60px of the navbar bottom):
        // The strip comes up from below in lockstep with the scroll, then locks
        // to the navbar at translateY(0) when it reaches the bottom of the navbar.
        if (dist <= 60) {
          const yOffset = Math.max(0, dist - STRIP_HEIGHT);
          strip.style.transform = `translateY(${yOffset}px)`;
          strip.style.opacity = "1";
          strip.style.visibility = "visible";
        } else {
          strip.style.transform = `translateY(40px)`;
          strip.style.opacity = "0";
          strip.style.visibility = "hidden";
        }
      } else if (strip) {
        strip.style.opacity = "0";
        strip.style.visibility = "hidden";
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    // Initial evaluation
    updateNavbar();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [location, menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // On the hero (dark bg), use all-white logo. After scroll (cream bg), use original colors with outline.
  const isHeroMode = !scrolled;

  return (
    <header
      ref={navRef}
      className={`navbar ${scrolled ? "navbar--scrolled" : "navbar--hero"}`}
    >
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

      {/* Sticky Marquee Accent Strip */}
      <div
        ref={stripRef}
        className="navbar__accent-strip"
        aria-hidden="true"
      />

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
