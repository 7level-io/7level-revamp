import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WellnessGrid.css";

gsap.registerPlugin(ScrollTrigger);

export default function VentureGrid({ items }) {
  const gridRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header reveal
      gsap.fromTo(
        headerRef.current.querySelectorAll(".vg-header-line"),
        { y: "100%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        }
      );

      // Cards stagger
      gsap.fromTo(
        gridRef.current.querySelectorAll(".venture-card"),
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="ventures" className="venture-section">
      <div className="container">
        {/* Section header */}
        <div className="vg-header" ref={headerRef}>
          <div className="vg-header-overflow">
            <span className="vg-header-eyebrow vg-header-line">Our Ventures</span>
          </div>
          <div className="vg-header-overflow">
            <h2 className="vg-header-title vg-header-line">
              Five operating companies.<br />Pick a venture below.
            </h2>
          </div>
        </div>

        {/* Grid */}
        <div className="venture-grid" ref={gridRef}>
          {items.map((item) => {
            const CardBody = (
              <div
                className={`venture-card ${item.status === "In Development" ? "venture-card--dev" : ""}`}
                style={{ "--brand-color": item.color }}
              >
                <div className="venture-card__top">
                  <div className="venture-card__logo">
                    <img src={item.img} alt={`${item.text}${item.highlight}`} />
                  </div>
                  <span className={`venture-card__status ${item.status === "Live Platform" ? "status--live" : "status--dev"}`}>
                    {item.status === "Live Platform" ? (
                      <><span className="status-dot" />Live</>
                    ) : (
                      "Soon"
                    )}
                  </span>
                </div>

                <div className="venture-card__body">
                  <p className="venture-card__cat">{item.category}</p>
                  <h3 className="venture-card__name">
                    {item.text}<span>{item.highlight}</span>
                  </h3>
                  <p className="venture-card__desc">{item.description}</p>
                </div>

                <div className="venture-card__footer">
                  <span className="venture-card__action">
                    {item.isExternal ? "Visit" : "Preview"}
                    {item.isExternal ? <ArrowUpRight size={14} /> : <ArrowRight size={14} />}
                  </span>
                </div>

                {/* Accent line on hover */}
                <div className="venture-card__accent" />
              </div>
            );

            return item.isExternal ? (
              <a
                key={item.index}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="venture-card-link"
              >
                {CardBody}
              </a>
            ) : (
              <Link key={item.index} to={item.path} className="venture-card-link">
                {CardBody}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
