import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Instagram,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  Scissors,
  FileCode,
  ShieldCheck,
  Compass,
} from "lucide-react";
import "./LrnStudioPage.css";

import heroMachineImg from "../assets/imgs/lrn_embroidery_hero.jpg";
import workInstitutionalImg from "../assets/imgs/lrn_work_institutional.jpg";
import workCreativeImg from "../assets/imgs/lrn_work_creative.jpg";
import lrnLogo from "../assets/imgs/logos/lrn-studio_logo.jpeg";

const FILE_FORMATS = [
  { ext: ".EMB", label: "Wilcom Native Object File" },
  { ext: ".DST", label: "Tajima Industrial Standard" },
  { ext: ".EXP", label: "Melco Commercial Format" },
  { ext: ".DBS", label: "Barudan Stitch Protocol" },
  { ext: ".TAP", label: "Happy Industrial Stitch Format" },
];

export default function LrnStudioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="lrn-page">
      {/* ─── Top Utility Sub-Bar ─── */}
      <nav className="lrn-subnav" aria-label="Breadcrumb navigation">
        <div className="container lrn-subnav__inner">
          <Link to="/" className="lrn-subnav__back">
            <ArrowLeft size={15} />
            <span>Back to 7Level Group</span>
          </Link>
          <div className="lrn-subnav__pills">
            <a href="#about">Studio Profile</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#ledger">Works Ledger</a>
            <a
              href="https://instagram.com/lrnstudio.in"
              target="_blank"
              rel="noopener noreferrer"
              className="lrn-subnav__insta"
            >
              <Instagram size={13} />
              <span>@lrnstudio.in</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ─── 1. Header & Studio Intro ─── */}
      <header className="lrn-hero" id="top">
        <div className="container lrn-hero__inner">
          {/* Studio Meta Badge */}
          <div className="lrn-meta-badge">
            <span className="lrn-meta-badge__dot" />
            <span className="lrn-meta-badge__text">Est. 2007 • Aizawl, Mizoram</span>
          </div>

          {/* Main Title & Branding */}
          <div className="lrn-hero__brand-row">
            <div className="lrn-hero__logo-wrapper">
              <img
                src={lrnLogo}
                alt="LRN Studio Emblem"
                className="lrn-hero__logo-img"
              />
            </div>
            <h1 className="lrn-hero__title">LRN STUDIO</h1>
          </div>

          {/* Brief Summary Line */}
          <p className="lrn-hero__summary">
            Professional embroidery, technical file digitizing, and graphic design engineered for industrial-grade precision.
          </p>

          {/* Hero Quick Highlights Strip */}
          <div className="lrn-hero__spec-strip">
            <div className="lrn-spec-pill">
              <Scissors size={14} />
              <span>Heavy-Duty Thread Engineering</span>
            </div>
            <div className="lrn-spec-pill">
              <Cpu size={14} />
              <span>Hardware-Calibrated Digitizing</span>
            </div>
            <div className="lrn-spec-pill">
              <ShieldCheck size={14} />
              <span>Zero-Break Commercial Pathing</span>
            </div>
            <div className="lrn-spec-pill">
              <Compass size={14} />
              <span>Hills of Aizawl to Global Production</span>
            </div>
          </div>

          {/* Hero Media Showcase / Video Placeholder */}
          <div className="lrn-media-frame">
            <div className="lrn-media-frame__header">
              <div className="lrn-media-frame__status">
                <span className="lrn-pulse-indicator" />
                <span className="lrn-status-text">INDUSTRIAL EMBROIDERY SYSTEM // MULTI-NEEDLE LIVE SEQUENCE</span>
              </div>
              <div className="lrn-media-frame__tags">
                <span className="lrn-tag">15-NEEDLE HEAD</span>
                <span className="lrn-tag">1,000 SPM RATED</span>
                <span className="lrn-tag">MACRO CAM 01</span>
              </div>
            </div>

            <div className="lrn-media-frame__viewport">
              <img
                src={heroMachineImg}
                alt="Multi-needle industrial embroidery machine closely tracking a complex design"
                className="lrn-media-frame__image"
              />
              <div className="lrn-media-frame__overlay">
                <div className="lrn-overlay-badge">
                  <Sparkles size={14} />
                  <span>Multi-Needle Industrial Precision Tracking</span>
                </div>
                <p className="lrn-overlay-caption">
                  High-speed commercial embroidery station tracking high-density floral and structural stitch contours.
                </p>
              </div>
            </div>

            <div className="lrn-media-frame__footer">
              <span className="lrn-frame-footnote">
                Engineered for industrial-grade precision • Wilcom ES & commercial hardware synchronization
              </span>
              <a
                href="https://instagram.com/lrnstudio.in"
                target="_blank"
                rel="noopener noreferrer"
                className="lrn-frame-link"
              >
                Watch live machine reels on IG <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ─── 2. Core Studio Profile (About Us) ─── */}
      <section className="lrn-section lrn-about" id="about">
        <div className="container lrn-about__inner">
          <div className="lrn-section__header">
            <span className="lrn-section__label">CORE STUDIO PROFILE</span>
            <h2 className="lrn-section__title">
              Crafting in the Hills of Aizawl Since 2007
            </h2>
          </div>

          <div className="lrn-about__grid">
            <div className="lrn-about__text-col">
              <p className="lrn-lead-paragraph">
                Based in the hills of Aizawl, Mizoram, LRN Studio has been a dedicated hub for professional embroidery, file digitizing, and graphic design since 2007. Over the last 15 years, the studio has built a reputation for blending local creative artistry with industrial-grade precision.
              </p>
              <p>
                The studio’s work operates across two distinct pillars: physical custom production and technical digital file engineering. Locally, LRN Studio provides high-density apparel decoration and official branding assets for prominent institutions—including Zoram Medical College (ZMC) Falkawn, ICFAI University Mizoram, and the Mizoram Amateur Taekwondo Association.
              </p>
              <p>
                Globally, the studio engineers production-ready digital stitch paths. These files are optimized for commercial machinery to ensure flawless execution and zero thread breaks, exported natively across industry-standard formats including .EMB, .DST, .EXP, .DBS, and .TAP.
              </p>
              <p>
                From intricate pop-culture art—like their highly detailed One Piece anime series—to clean corporate crests, LRN Studio remains focused on honest workmanship, technical accuracy, and the enduring craft of thread engineering.
              </p>
            </div>

            <div className="lrn-about__stats-col">
              <div className="lrn-stat-card">
                <span className="lrn-stat-number">15+</span>
                <span className="lrn-stat-unit">Years Established</span>
                <p className="lrn-stat-desc">
                  Continuous operation in Aizawl, Mizoram since 2007, serving local institutions and international digitizing clients.
                </p>
              </div>

              <div className="lrn-stat-card">
                <span className="lrn-stat-number">0</span>
                <span className="lrn-stat-unit">Thread Break Target</span>
                <p className="lrn-stat-desc">
                  Mathematically planned stitch paths engineered with pull compensation and stress-relieved travel lines.
                </p>
              </div>

              <div className="lrn-stat-card lrn-stat-card--formats">
                <div className="lrn-stat-card__title-row">
                  <FileCode size={18} />
                  <span>Native Machine Formats</span>
                </div>
                <p className="lrn-stat-desc">
                  Calibrated for Tajima, Barudan, SWF, Melco, and Happy commercial systems:
                </p>
                <div className="lrn-format-pills">
                  {FILE_FORMATS.map((f) => (
                    <span key={f.ext} className="lrn-format-chip" title={f.label}>
                      {f.ext}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. Capabilities & Technical Specifications ─── */}
      <section className="lrn-section lrn-capabilities" id="capabilities">
        <div className="container">
          <div className="lrn-section__header lrn-section__header--center">
            <span className="lrn-section__label">CORE PILLARS</span>
            <h2 className="lrn-section__title">
              Capabilities & Technical Specifications
            </h2>
            <p className="lrn-section__sub">
              Dual-engine expertise spanning physical production lines and digital stitch engineering.
            </p>
          </div>

          <div className="lrn-pillars-grid">
            {/* Pillar 1: Physical Production */}
            <div className="lrn-pillar-card">
              <div className="lrn-pillar-card__top">
                <div className="lrn-pillar-card__icon-wrap">
                  <Layers size={24} />
                </div>
                <span className="lrn-pillar-card__number">PILLAR 01</span>
              </div>
              <h3 className="lrn-pillar-card__title">Heavy-Duty Custom Apparel</h3>
              <p className="lrn-pillar-card__desc">
                Specializing in uniform decoration, custom streetwear merchandise, and heavy-duty patch fabrication. Every run is engineered with strict attention to optimal thread density, balancing crisp visual clarity with long-lasting structural durability.
              </p>
              <div className="lrn-pillar-card__list">
                <div className="lrn-pillar-item">
                  <CheckCircle2 size={16} className="lrn-check" />
                  <span>Uniform decoration with commercial durability</span>
                </div>
                <div className="lrn-pillar-item">
                  <CheckCircle2 size={16} className="lrn-check" />
                  <span>Custom streetwear merchandise & artistic drops</span>
                </div>
                <div className="lrn-pillar-item">
                  <CheckCircle2 size={16} className="lrn-check" />
                  <span>Heavy-duty merrowed & satin patch fabrication</span>
                </div>
                <div className="lrn-pillar-item">
                  <CheckCircle2 size={16} className="lrn-check" />
                  <span>Strict density formulas to avoid puckering or stiffness</span>
                </div>
              </div>
            </div>

            {/* Pillar 2: File Digitizing */}
            <div className="lrn-pillar-card">
              <div className="lrn-pillar-card__top">
                <div className="lrn-pillar-card__icon-wrap">
                  <Cpu size={24} />
                </div>
                <span className="lrn-pillar-card__number">PILLAR 02</span>
              </div>
              <h3 className="lrn-pillar-card__title">Commercial Design Digitizing</h3>
              <p className="lrn-pillar-card__desc">
                Vector-to-stitch transformations built directly for modern hardware configurations. Clean pathing eliminates looping bugs, reduces machine run-times, and prevents tension snaps on busy production floors.
              </p>
              <div className="lrn-pillar-card__list">
                <div className="lrn-pillar-item">
                  <CheckCircle2 size={16} className="lrn-check" />
                  <span>Clean pathing eliminating loops, snags, and bird-nesting</span>
                </div>
                <div className="lrn-pillar-item">
                  <CheckCircle2 size={16} className="lrn-check" />
                  <span>Reduced machine cycle times & thread cut optimizations</span>
                </div>
                <div className="lrn-pillar-item">
                  <CheckCircle2 size={16} className="lrn-check" />
                  <span>Direct hardware calibration for leading industrial multi-needles</span>
                </div>
                <div className="lrn-pillar-item">
                  <CheckCircle2 size={16} className="lrn-check" />
                  <span>Multi-format exports: .EMB, .DST, .EXP, .DBS, and .TAP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. Selected Works Ledger (The Portfolio Descriptions) ─── */}
      <section className="lrn-section lrn-ledger" id="ledger">
        <div className="container">
          <div className="lrn-section__header">
            <span className="lrn-section__label">PORTFOLIO ARCHIVE</span>
            <h2 className="lrn-section__title">Selected Works Ledger</h2>
            <p className="lrn-section__sub">
              A visual archive of core corporate and artistic releases.
            </p>
          </div>

          <div className="lrn-ledger-grid">
            {/* Item 1 */}
            <article className="lrn-work-card">
              <div className="lrn-work-card__media">
                <img
                  src={workInstitutionalImg}
                  alt="Institutional & Corporate Identity embroidery badge"
                  className="lrn-work-card__img"
                />
                <div className="lrn-work-card__chip">LEDGER ITEM // 01</div>
              </div>
              <div className="lrn-work-card__content">
                <div className="lrn-work-card__category">Corporate & Institutional</div>
                <h3 className="lrn-work-card__title">
                  Institutional & Corporate Identity
                </h3>
                <p className="lrn-work-card__desc">
                  Official high-precision embroidered insignia and crests created for ZMC Falkawn, ICFAI University Mizoram, and the Mizoram Amateur Taekwondo Association.
                </p>
                <div className="lrn-work-card__clients">
                  <span className="lrn-client-tag">ZMC Falkawn</span>
                  <span className="lrn-client-tag">ICFAI University</span>
                  <span className="lrn-client-tag">Mizoram Amateur Taekwondo</span>
                </div>
              </div>
            </article>

            {/* Item 2 */}
            <article className="lrn-work-card">
              <div className="lrn-work-card__media">
                <img
                  src={workCreativeImg}
                  alt="Creative & Pop-Culture Compositions high stitch count anime embroidery patch"
                  className="lrn-work-card__img"
                />
                <div className="lrn-work-card__chip">LEDGER ITEM // 02</div>
              </div>
              <div className="lrn-work-card__content">
                <div className="lrn-work-card__category">Creative & Pop-Culture</div>
                <h3 className="lrn-work-card__title">
                  Creative & Pop-Culture Compositions
                </h3>
                <p className="lrn-work-card__desc">
                  High-stitch-count artistic projects, including specialized Ghost Apparel cap lines and detailed One Piece "Bounty Wanted" poster designs.
                </p>
                <div className="lrn-work-card__clients">
                  <span className="lrn-client-tag">Ghost Apparel Cap Line</span>
                  <span className="lrn-client-tag">One Piece "Bounty Wanted" Series</span>
                  <span className="lrn-client-tag">Streetwear Art</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ─── 5. Minimalist Showcase Footer ─── */}
      <footer className="lrn-footer">
        <div className="container lrn-footer__inner">
          <div className="lrn-footer__top">
            <div className="lrn-footer__brand-block">
              <div className="lrn-footer__title-row">
                <img
                  src={lrnLogo}
                  alt="LRN Studio Icon"
                  className="lrn-footer__logo-img"
                />
                <span className="lrn-footer__name">LRN STUDIO</span>
              </div>
              <p className="lrn-footer__tagline">
                Engineered thread geometry, custom heavy-duty apparel, and commercial stitch file digitizing.
              </p>
            </div>

            <div className="lrn-footer__catalog-card">
              <div className="lrn-footer__catalog-header">
                <Instagram size={20} className="lrn-footer__insta-icon" />
                <span className="lrn-footer__catalog-label">Active Studio Feed</span>
              </div>
              <p className="lrn-footer__catalog-text">
                To browse the active catalog, behind-the-scenes production reels, and real-time project updates, visit the official LRN Studio Instagram Profile (
                <a
                  href="https://instagram.com/lrnstudio.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lrn-inline-link"
                >
                  @lrnstudio.in
                </a>
                ).
              </p>
              <a
                href="https://instagram.com/lrnstudio.in"
                target="_blank"
                rel="noopener noreferrer"
                className="lrn-insta-btn"
              >
                <span>Follow @lrnstudio.in</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div className="lrn-footer__bottom">
            <p className="lrn-footer__copy">
              © LRN Studio. Crafting from Aizawl, Mizoram.
            </p>
            <div className="lrn-footer__links">
              <Link to="/">7Level Home</Link>
              <span className="lrn-footer__dot">•</span>
              <a href="mailto:contact@7level.in">Direct Inquiries</a>
              <span className="lrn-footer__dot">•</span>
              <a href="#top">Back to top</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
