import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Wrench, Zap, MonitorSmartphone } from "lucide-react";
import "./AboutSection.css";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: "5", suffix: "", label: "Independent businesses" },
  { value: "4", suffix: "", label: "Different trades" },
  { value: "1", suffix: "", label: "Central desk in India" },
];

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Statement text reveal
      gsap.fromTo(
        ".about-statement-word",
        { y: "110%", opacity: 0 },
        {
          y: "0%",
          opacity: 1,
          duration: 0.75,
          stagger: 0.04,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-statement",
            start: "top 78%",
          },
        }
      );

      // Stats count up
      STATS.forEach((stat, i) => {
        const el = document.querySelector(`.stat-value-${i}`);
        if (!el) return;
        const target = parseInt(stat.value);
        ScrollTrigger.create({
          trigger: el,
          start: "top 85%",
          once: true,
          onEnter: () => {
            gsap.fromTo(
              { val: 0 },
              { val: target, duration: 1.4, ease: "power2.out",
                onUpdate: function () {
                  el.textContent = Math.round(this.targets()[0].val) + stat.suffix;
                },
              }
            );
          },
        });
      });

      // Pillars fade in
      gsap.fromTo(
        ".about-pillar",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-pillars",
            start: "top 78%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const statementWords = "Five businesses. Each built for its own market.".split(" ");

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        {/* Big statement */}
        <div className="about-statement">
          <p className="about-eyebrow">About 7Level</p>
          <h2 className="about-statement-text">
            {statementWords.map((word, i) => (
              <span className="about-word-wrap" key={i}>
                <span className="about-statement-word">{word}&nbsp;</span>
              </span>
            ))}
          </h2>
        </div>

        {/* Stats row */}
        <div className="about-stats">
          {STATS.map((stat, i) => (
            <div className="about-stat" key={i}>
              <span className={`about-stat-value stat-value-${i}`}>
                {stat.value}{stat.suffix}
              </span>
              <span className="about-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Body + pillars */}
        <div className="about-body-grid">
          <div className="about-body-text">
            <p>
              7Level is the home for our five companies. Rather than running an unfocused
              group, each business operates with its own pricing, inventory, and team.
            </p>
            <p>
              Navkar distributes structural steel pipes and fabrication metal. SpeedX rents
              electric two-wheelers to commuters and delivery riders. GreenRocket produces
              broadcast media. LRN Studio digitizes custom embroidery. And 7level-io engineers
              web and software platforms.
            </p>
          </div>

          <div className="about-pillars">
            {[
              {
                icon: <Wrench size={18} strokeWidth={1.75} />,
                title: "Metals & Embroidery",
                text: "Navkar Metal supplies steel pipes and fabrication sheets. LRN Studio handles custom embroidery digitizing.",
              },
              {
                icon: <Zap size={18} strokeWidth={1.75} />,
                title: "Electric Mobility",
                text: "SpeedX rents affordable e-bikes to daily commuters and delivery partners.",
              },
              {
                icon: <MonitorSmartphone size={18} strokeWidth={1.75} />,
                title: "Software & Media",
                text: "7level-io builds web and software systems. GreenRocket TV produces digital video and broadcasts.",
              },
            ].map((p) => (
              <div className="about-pillar" key={p.title}>
                <span className="pillar-icon">{p.icon}</span>
                <div>
                  <h4 className="pillar-title">{p.title}</h4>
                  <p className="pillar-text">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
