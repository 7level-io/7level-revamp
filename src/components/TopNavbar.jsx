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
  const [isDarkBg, setIsDarkBg] = useState(() => location.pathname === "/");

  const navRef = useRef(null);
  const stripRef = useRef(null);
  const marqueeMetricsRef = useRef({ top: 0, height: 0, ready: false });

  // Update cached metrics for marquee strip positioning on load/resize (prevents forced reflow during scroll)
  const measureMarquee = useCallback(() => {
    if (location.pathname !== "/") {
      marqueeMetricsRef.current.ready = false;
      return;
    }
    const marquee = document.querySelector(".marquee-strip");
    if (marquee) {
      const rect = marquee.getBoundingClientRect();
      marqueeMetricsRef.current = {
        top: rect.top + window.scrollY,
        height: rect.height,
        ready: true,
      };
    }
  }, [location.pathname]);

  // Keep theme in sync with route without DOM layout thrashing
  useEffect(() => {
    setIsDarkBg(location.pathname === "/");
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    measureMarquee();
    const handleResize = () => {
      measureMarquee();
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [measureMarquee]);

  useEffect(() => {
    let ticking = false;

    const updateNavbar = () => {
      const scrollY = window.scrollY;
      const isScrolledNow = scrollY > 60;
      setScrolled(isScrolledNow);

      // Contrast: Home page is dark at top (<60px), light elsewhere/scrolled
      if (location.pathname === "/") {
        setIsDarkBg(!isScrolledNow);
      } else {
        setIsDarkBg(false);
      }

      // Sticky Marquee Accent Strip calculation using pre-cached metrics (zero reflow)
      const strip = stripRef.current;
      const nav = navRef.current;
      const { top: marqueeTop, height: marqueeHeight, ready } = marqueeMetricsRef.current;

      if (ready && strip && nav && !menuOpen && location.pathname === "/") {
        const navHeight = 70; // Fixed navbar height
        const marqueeBottom = marqueeTop + marqueeHeight;
        const currentNavBottom = scrollY + navHeight;
        const dist = marqueeBottom - currentNavBottom;
        const STRIP_HEIGHT = 5;

        if (dist <= 60 && dist >= -100) {
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

    // Initial check
    updateNavbar();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [location.pathname, menuOpen]);

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
            width="32"
            height="32"
            fetchpriority="high"
            decoding="async"
          />
          <span className="navbar__logo-text">7Level</span>
        </Link>

        <nav className="navbar__links">
          <a href="/#ventures">Ventures</a>
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
