import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Globe,
  Mail,
  Layers,
  Contact,
} from "lucide-react";
import "./SevenLevelIoPage.css";

import sevenLevelLogoOutlined from "../assets/imgs/logos/7level_logo_outlined.png";
import speedxLogoOutlined from "../assets/imgs/logos/speedxlogo-outlined.png";
import navkarLogo from "../assets/imgs/logos/navkar-metal_logo.svg";
import greenRocketLogo from "../assets/imgs/logos/greenrockettv_logo.png";

// ─── Products ───
// These are software applications developed by 7level-io.
const PRODUCTS = [
  {
    id: "speedxrental",
    title: "SpeedX Rental",
    domain: "speedxrental.7level.in",
    url: "https://speedxrental.7level.in",
    category: "Electric Bike Rentals",
    type: "7Level Product",
    description: "Platform for booking and managing electric two-wheeler rentals.",
    logo: speedxLogoOutlined,
    accentColor: "#8bb51f",
  },
  {
    id: "clustr-collab",
    title: "Clustr Collab",
    domain: "clustr-collab.7level.in",
    url: "https://clustr-collab.7level.in",
    category: "Team Collaboration",
    type: "7Level Product",
    description: "Workspace for task management, team coordination, and project tracking.",
    logo: null,
    accentColor: "#2840e8",
  },
];

// ─── Websites ───
// Web portals and websites developed by 7level-io for ventures and clients.
const WEBSITES = [
  {
    id: "navkarmetals",
    title: "Navkar Metals",
    domain: "navkarmetals.7level.in",
    url: "https://navkarmetals.7level.in/",
    category: "Steel & Industrial Metals",
    type: "7Level Venture",
    description: "Catalog and supply portal for structural steel, pipes, and fabrication materials.",
    logo: navkarLogo,
    accentColor: "#7a58db",
  },
  {
    id: "greenrockettv",
    title: "GreenRocket TV",
    domain: "greenrockettv.com",
    url: "https://greenrockettv.com/",
    category: "Digital Media & Entertainment",
    type: "7Level Venture",
    description: "Digital broadcasting platform, video productions, and media content.",
    logo: greenRocketLogo,
    accentColor: "#00a775",
  },
  {
    id: "bethelministry",
    title: "Bethel Ministry Mizoram",
    domain: "www.bethelministrymizoram.com",
    url: "https://www.bethelministrymizoram.com/",
    category: "Ministry & Community",
    type: "Client Project",
    description: "Official web portal for Bethel Ministry Mizoram, publications, and outreach.",
    logo: null,
    accentColor: "#d97706",
  },
  {
    id: "7level",
    title: "7Level Group",
    domain: "7level.in",
    url: "https://7level.in",
    category: "Holding & Ventures",
    type: "Group Portal",
    description: "Parent company website connecting 7Level operating ventures.",
    logo: sevenLevelLogoOutlined,
    accentColor: "#2840e8",
  },
  {
    id: "alvin",
    title: "Alvin",
    domain: "alvin.7level.in",
    url: "https://alvin.7level.in",
    category: "Digital Business Card",
    type: "Digital Card",
    description: "Digital business card and personal contact profile.",
    logo: null,
    accentColor: "#06b6d4",
  },
];

export default function SevenLevelIoPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="io-page" data-nav-theme="light">
      {/* ─── Sub-Bar ─── */}
      <nav className="io-subnav" aria-label="Breadcrumb navigation">
        <div className="container io-subnav__inner">
          <Link to="/" className="io-subnav__back">
            <ArrowLeft size={15} />
            <span>Back to 7Level Group</span>
          </Link>

          <div className="io-subnav__links">
            <a href="#products">Products</a>
            <a href="#websites">Websites</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <header className="io-hero">
        <div className="container">
          <p className="io-hero__cat">Software & Digital Platforms</p>
          <h1 className="io-hero__title">7level-io</h1>
          <p className="io-hero__lead">
            The software engineering wing of 7Level. We build web platforms and internal products for 7Level businesses and client partners.
          </p>

          <div className="io-hero__nav-jump">
            <a href="#products" className="io-pill-jump">
              Products ({PRODUCTS.length})
            </a>
            <a href="#websites" className="io-pill-jump">
              Websites ({WEBSITES.length})
            </a>
          </div>
        </div>
      </header>

      {/* ─── Products Section ─── */}
      <section className="io-section" id="products">
        <div className="container">
          <div className="io-section__header">
            <p className="io-section__label">Products</p>
            <h2 className="io-section__title">Software Applications</h2>
            <p className="io-section__sub">
              Platforms developed and maintained by 7level-io.
            </p>
          </div>

          <div className="io-cards-grid io-cards-grid--products">
            {PRODUCTS.map((prod) => (
              <a
                key={prod.id}
                href={prod.url}
                target="_blank"
                rel="noopener noreferrer"
                className="io-card io-card--product"
                style={{ "--accent": prod.accentColor }}
              >
                <div className="io-card__top">
                  <div className="io-card__icon-box">
                    {prod.logo ? (
                      <img
                        src={prod.logo}
                        alt={`${prod.title} logo`}
                        className="io-card__logo"
                        loading="lazy"
                        decoding="async"
                        width="36"
                        height="36"
                      />
                    ) : (
                      <Layers size={22} className="io-card__icon" />
                    )}
                  </div>
                  <span className="io-card__arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <div className="io-card__body">
                  <div className="io-card__meta">
                    <span className="io-card__category">{prod.category}</span>
                    <span className="io-card__tag">{prod.type}</span>
                  </div>
                  <h3 className="io-card__title">{prod.title}</h3>
                  <p className="io-card__domain">{prod.domain}</p>
                  <p className="io-card__desc">{prod.description}</p>
                </div>

                <div className="io-card__footer">
                  <span className="io-card__cta">
                    Open platform <ArrowUpRight size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Websites Section ─── */}
      <section className="io-section io-section--alt" id="websites">
        <div className="container">
          <div className="io-section__header">
            <p className="io-section__label">Websites</p>
            <h2 className="io-section__title">Web Portals & Sites</h2>
            <p className="io-section__sub">
              Web platforms built for 7Level group ventures and external client work.
            </p>
          </div>

          <div className="io-cards-grid io-cards-grid--websites">
            {WEBSITES.map((site) => (
              <a
                key={site.id}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="io-card io-card--website"
                style={{ "--accent": site.accentColor }}
              >
                <div className="io-card__top">
                  <div className="io-card__icon-box">
                    {site.logo ? (
                      <img
                        src={site.logo}
                        alt={`${site.title} logo`}
                        className="io-card__logo"
                        loading="lazy"
                        decoding="async"
                        width="36"
                        height="36"
                      />
                    ) : site.id === "alvin" ? (
                      <Contact size={22} className="io-card__icon" />
                    ) : (
                      <Globe size={22} className="io-card__icon" />
                    )}
                  </div>
                  <span className="io-card__arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                <div className="io-card__body">
                  <div className="io-card__meta">
                    <span className="io-card__category">{site.category}</span>
                    <span
                      className={`io-card__tag ${
                        site.type === "Client Project" ? "io-card__tag--client" : ""
                      }`}
                    >
                      {site.type}
                    </span>
                  </div>
                  <h3 className="io-card__title">{site.title}</h3>
                  <p className="io-card__domain">{site.domain}</p>
                  <p className="io-card__desc">{site.description}</p>
                </div>

                <div className="io-card__footer">
                  <span className="io-card__cta">
                    Visit website <ArrowUpRight size={14} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact ─── */}
      <section className="io-section io-contact" id="contact">
        <div className="container">
          <div className="io-contact__box">
            <p className="io-section__label">Direct Inquiries</p>
            <h2 className="io-contact__title">Get in touch with 7level-io</h2>
            <p className="io-contact__text">
              For web development, software systems, or project questions, email us directly.
            </p>
            <a href="mailto:contact@7level.in" className="io-contact__btn">
              <Mail size={16} />
              <span>contact@7level.in</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="io-footer">
        <div className="container io-footer__inner">
          <p className="io-footer__brand">
            7level-io <span>•</span> Software arm of 7Level Group
          </p>
          <div className="io-footer__links">
            <Link to="/">7Level Home</Link>
            <Link to="/lrn-studio">LRN Studio</Link>
            <a href="mailto:contact@7level.in">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
