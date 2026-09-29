import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import "./InquiriesSection.css";

gsap.registerPlugin(ScrollTrigger);

export default function InquiriesSection() {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const EMAIL = "contact@7level.in";

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-reveal",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className="contact-inner">
          <div className="contact-left contact-reveal">
            <p className="contact-eyebrow">Direct contact</p>
            <h2 className="contact-heading">
              Have an inquiry or order?<br />
              <span>Talk to our central desk.</span>
            </h2>
            <p className="contact-body">
              Whether you need bulk steel stock from Navkar, commercial e-bikes
              from SpeedX, media production with GreenRocket, custom embroidery from
              LRN Studio, or software from 7level-io, write to our desk and we'll connect you directly.
            </p>
          </div>

          <div className="contact-right contact-reveal">
            <div className="contact-email-block">
              <p className="contact-email-label">Central desk</p>
              <a href={`mailto:${EMAIL}`} className="contact-email-link">
                {EMAIL}
                <ArrowUpRight size={20} strokeWidth={2} />
              </a>
              <button
                className={`contact-copy-btn ${copied ? "copied" : ""}`}
                onClick={handleCopy}
              >
                {copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy email</>}
              </button>
            </div>

            <div className="contact-meta">
              <div className="contact-meta-item">
                <span className="meta-label">Base</span>
                <span className="meta-val">India</span>
              </div>
              <div className="contact-meta-item">
                <span className="meta-label">Scope</span>
                <span className="meta-val">B2B supply, mobility, media & software</span>
              </div>
              <div className="contact-meta-item">
                <span className="meta-label">Routing</span>
                <span className="meta-val">Direct to each venture team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
