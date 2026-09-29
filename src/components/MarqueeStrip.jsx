import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./MarqueeStrip.css";

const ITEMS = [
  "SpeedX Rental",
  "Navkar Metal",
  "GreenRocket TV",
  "LRN Studio",
  "7level-io",
  "Clean Mobility",
  "Industrial Steel",
  "Digital Media",
];

export default function MarqueeStrip() {
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const totalWidth = track.scrollWidth / 2;

      gsap.to(track, {
        x: -totalWidth,
        duration: 28,
        ease: "none",
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, []);

  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee-strip" aria-hidden>
      <div className="marquee-track" ref={trackRef}>
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
