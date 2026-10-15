import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import sevenLevelLogo from "../assets/imgs/logos/7level_logo.webp";
import sevenLevelLogoOutlined from "../assets/imgs/logos/7level_logo_outlined.png";
import "./TopNavbar.css";

export default function TopNavbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Default to dark background only on the home page root which has the dark HeroBanner
  const [isDarkBg, setIsDarkBg] = useState(() => location.pathname === "/");

  const navRef = useRef(null);
  const stripRef = useRef(null);

  // Dynamic contrast detection: inspects what is physically underneath the navbar
  const detectIsDarkBackground = useCallback(() => {
    // When scrolled, the navbar has an opaque/frosted cream background (light)
    if (window.scrollY > 60) {
      return false;
    }

    const nav = navRef.current;
    if (!nav) {
      return location.pathname === "/";
    }

    const sampleX = Math.min(Math.max(window.innerWidth / 2, 50), window.innerWidth - 50);
    const sampleY = 35; // Center point of the navbar

    let elements = [];
    if (typeof document.elementsFromPoint === "function") {
      elements = document.elementsFromPoint(sampleX, sampleY);
    }

    for (const el of elements) {
      if (nav.contains(el)) continue;

      // 1. Check explicit data-theme or data-nav-theme attribute
      const explicitTheme = el.closest("[data-theme], [data-nav-theme]");
      if (explicitTheme) {
        const theme =
          explicitTheme.getAttribute("data-theme") ||
          explicitTheme.getAttribute("data-nav-theme");
        if (theme === "dark") return true;
        if (theme === "light") return false;
      }

      // 2. Climb DOM tree to find effective background color
      let curr = el;
      while (curr && curr !== document.documentElement) {
        const style = window.getComputedStyle(curr);
        const bg = style.backgroundColor;
        if (bg && bg !== "transparent" && bg !== "rgba(0, 0, 0, 0)") {
          const match = bg.match(
            /rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/
          );
          if (match) {
            const a = match[4] !== undefined ? parseFloat(match[4]) : 1;
            if (a > 0.4) {
              const r = parseInt(match[1], 10);
              const g = parseInt(match[2], 10);
              const b = parseInt(match[3], 10);
              // ITU-R BT.709 perceived luminance
              const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
              return luminance < 140; // True if dark background, false if light
            }
          }
        }
        curr = curr.parentElement;
      }
    }

    // Default route-based fallback: "/" has dark hero, all others have cream
    return location.pathname === "/";
  }, [location.pathname]);

  useEffect(() => {
    let ticking = false;

    const updateNavbar = () => {
      const scrollY = window.scrollY;
      const isScrolledNow = scrollY > 60;
      setScrolled(isScrolledNow);

      const darkNow = detectIsDarkBackground();
      setIsDarkBg(darkNow);

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

    // Initial evaluation immediately and on next animation frame
    updateNavbar();
    const rafId = requestAnimationFrame(updateNavbar);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [location, menuOpen, detectIsDarkBackground]);

  useEffect(() => {
    setMenuOpen(false);
    // When route changes, sync initial dark background expectation immediately
    setIsDarkBg(location.pathname === "/");
  }, [location]);

  // Dark mode active when background is dark and not scrolled into cream glass
  const isDark = isDarkBg && !scrolled;

  const navClass = [
    "navbar",
    scrolled
      ? "navbar--scrolled"
      : isDark
      ? "navbar--hero navbar--dark"
      : "navbar--light",
  ].join(" ");

  return (
    <header ref={navRef} className={navClass}>
      <div className="navbar__inner container">
        {/* Logo: icon mark + wordmark */}
        <Link to="/" className="navbar__logo">
          <img
            src={isDark ? sevenLevelLogo : sevenLevelLogoOutlined}
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
          <a href="/#ventures" onClick={() => setMenuOpen(false)}>
            Ventures
          </a>
          {/* <a href="/#about" onClick={() => setMenuOpen(false)}>About</a> */}
          {/* <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a> */}
          <a
            href="mailto:contact@7level.in"
            className="drawer__cta"
            onClick={() => setMenuOpen(false)}
          >
            contact@7level.in <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </header>
  );
}
