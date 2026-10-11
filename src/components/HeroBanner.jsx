import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import sevenLevelLogo from "../assets/imgs/logos/7level_logo.webp";
import "./HeroBanner.css";

const BRANDS = ["7Level", "SpeedX", "Navkar Metal", "LRN Studio", "GreenRocket"];
const COLORS = ["#2840e8", "#8bb51f", "#7a58db", "#58799e", "#00a775"];

export default function HeroBanner() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const tickerRef = useRef(null);
  const itemRef = useRef(null);
  const scrollContentRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [itemHeight, setItemHeight] = useState(0);
  const total = BRANDS.length;

  // GSAP hero entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-headline-line",
        { clipPath: "inset(0 0 100% 0)", y: 30 },
        { clipPath: "inset(0 0 0% 0)", y: 0, duration: 0.9, stagger: 0.08 }
      )
        .fromTo(
          [".hero-sub", ".hero-actions"],
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.12 },
          "-=0.4"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Brand ticker measurement
  useEffect(() => {
    if (itemRef.current && scrollContentRef.current) {
      const h = itemRef.current.getBoundingClientRect().height;
      const gap = parseFloat(window.getComputedStyle(scrollContentRef.current).gap || "0");
      setItemHeight(h + gap);
    }
  }, []);

  // Brand ticker cycle
  useEffect(() => {
    const id = setInterval(() => setIndex((p) => p + 1), 2600);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = scrollContentRef.current;
    if (!itemHeight || !el) return;

    if (index === total) {
      el.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
      el.style.transform = `translateY(-${index * itemHeight}px)`;
      const t = setTimeout(() => {
        el.style.transition = "none";
        el.style.transform = "translateY(0)";
        requestAnimationFrame(() => setIndex(0));
      }, 420);
      return () => clearTimeout(t);
    }

    el.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
    el.style.transform = `translateY(-${index * itemHeight}px)`;
  }, [index, total, itemHeight]);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__inner container">
        {/* Headline */}
        <h1 className="hero-headline" ref={headlineRef}>
          <span className="hero-headline-line hero-ticker-wrap">
            <span className="hero-ticker-scroll" ref={tickerRef}>
              <span className="hero-ticker-inner" ref={scrollContentRef}>
                {BRANDS.concat(BRANDS[0], BRANDS[1]).map((name, i) => (
                  <span
                    key={i}
                    className="hero-ticker-item"
                    ref={i === 0 ? itemRef : null}
                    style={{ color: COLORS[i % COLORS.length] }}
                  >
                    {name}
                  </span>
                ))}
              </span>
            </span>
          </span>
          <span className="hero-headline-line hero-headline-static">
            ready to assist.
          </span>
        </h1>

        {/* Sub */}
        <p className="hero-sub" ref={subRef}>
          We run five independent companies across electric mobility, industrial steel,
          video production, custom embroidery, and software systems.
        </p>

        {/* CTAs */}
        <div className="hero-actions" ref={ctaRef}>
          <a href="#ventures" className="hero-btn hero-btn--primary">
            Explore our ventures <ArrowRight size={16} />
          </a>
          <a href="mailto:contact@7level.in" className="hero-btn hero-btn--ghost">
            Write to our desk <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Ambient decorative logo */}
      <img
        src={sevenLevelLogo}
        alt=""
        aria-hidden="true"
        className="hero-ambient-logo"
      />
    </section>
  );
}
