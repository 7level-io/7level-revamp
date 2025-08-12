import { useEffect, useRef, useState } from "react";
import "./HeroBanner.css";

const words = [
  "7Level",
  "NeuLevel",
  "Navkar Metals",
  "LRN Studio",
  "HralhZo",
  "ReNeu",
];
const colors = [
  "#5c8cb5",
  "#8a3a34",
  "#cf9358",
  "#ac7758",
  "#00a76e",
  "#7a58db",
];

export default function HeroBanner() {
  const scrollRef = useRef(null);
  const itemRef = useRef(null);

  const [index, setIndex] = useState(0);
  const [itemHeight, setItemHeight] = useState(0);
  const total = words.length;

  useEffect(() => {
    if (itemRef.current && scrollRef.current) {
      const itemHeight = itemRef.current.getBoundingClientRect().height;

      const computedStyles = window.getComputedStyle(scrollRef.current);
      const gap = parseFloat(
        computedStyles.rowGap || computedStyles.gap || "0"
      );

      setItemHeight(itemHeight + gap);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const scrollContent = scrollRef.current;
    if (!itemHeight || !scrollContent) return;

    if (index === total) {
      scrollContent.style.transition = "transform 0.3s ease-in-out";
      scrollContent.style.transform = `translateY(-${index * itemHeight}px)`;

      const timeout = setTimeout(() => {
        scrollContent.style.transition = "none";
        scrollContent.style.transform = "translateY(0)";

        requestAnimationFrame(() => {
          setIndex(0);
        });
      }, 310); // Match transition (300ms) + small buffer

      return () => clearTimeout(timeout);
    }

    scrollContent.style.transition = "transform 0.3s ease-in-out";
    scrollContent.style.transform = `translateY(-${index * itemHeight}px)`;
  }, [index, total, itemHeight]);

  return (
    <section className="hero-section container">
      <h2 className="hero-heading">
        <div className="scroll-wrapper">
          <div className="scroll-content" ref={scrollRef}>
            {words.concat(words[0], words[1]).map((word, i) => {
              const color = colors[i % colors.length];
              return (
                <span
                  key={i}
                  className="scroll-item"
                  ref={i === 0 ? itemRef : null}
                  style={{ color }}
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>
        <span className="sub-heading">personalized to you</span>
      </h2>
      <p className="subtitle">Customized care starts here</p>
    </section>
  );
}
