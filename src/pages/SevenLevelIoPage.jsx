import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowUpRight,
  Code2,
  Layers,
  Globe,
  Cpu,
  Database,
  ShieldCheck,
  Terminal,
  CheckCircle2,
  Sparkles,
  Server,
  Mail,
  Workflow,
  Radio,
  Boxes,
} from "lucide-react";
import "./SevenLevelIoPage.css";

import sevenLevelLogoOutlined from "../assets/imgs/logos/7level_logo_outlined.png";
import speedxLogoOutlined from "../assets/imgs/logos/speedxlogo-outlined.png";
import navkarLogo from "../assets/imgs/logos/navkar-metal_logo.svg";
import greenRocketLogo from "../assets/imgs/logos/greenrockettv_logo.png";

// ─── Products Data ───
const PRODUCTS = [
  {
    id: "speedxrental",
    title: "SpeedX Rental",
    domain: "speedxrental.7level.in",
    url: "https://speedxrental.7level.in",
    category: "Clean Mobility & EV Fleet Management",
    badge: "Live SaaS Platform",
    logo: speedxLogoOutlined,
    accentColor: "#8bb51f",
    description:
      "A complete cloud-native rental ecosystem engineering high-efficiency urban mobility. Powers real-time reservation workflows, daily commuter memberships, delivery fleet operations, and automated billing for electric two-wheelers.",
    features: [
      "Real-time EV inventory tracking & booking reservation engine",
      "Seamless rider onboarding, digital KYC verification, and security deposits",
      "Automated rental extension calculations & telematics data integration",
      "Optimized for high-volume gig-economy delivery riders & daily city commuters",
    ],
    techStack: ["React", "Cloud Functions", "Payment Gateway", "Real-Time Telemetry"],
  },
  {
    id: "clustr-collab",
    title: "Clustr Collab",
    domain: "clustr-collab.7level.in",
    url: "https://clustr-collab.7level.in",
    category: "Real-Time Workspace & Collaboration Suite",
    badge: "Live Platform",
    logo: null, // Custom rendered badge
    accentColor: "#2840e8",
    description:
      "A next-generation collaborative workspace engineered for distributed teams and cross-functional operations. Integrates real-time task pipelines, kanban boards, milestone roadmaps, team communication, and automated progress analytics.",
    features: [
      "Real-time synchronized Kanban boards and cross-project sprints",
      "Multi-tenant role permissions, task assignment, and subtask trees",
      "Automated deadline tracking, overdue reminders, and live notifications",
      "Zero-latency state synchronization with offline-ready local persistence",
    ],
    techStack: ["React", "Real-Time DB", "Task Engine", "Cloud Security Rules"],
  },
];

// ─── Websites Data ───
const WEBSITES = [
  {
    id: "navkarmetals",
    title: "Navkar Metals",
    domain: "navkarmetals.7level.in",
    url: "https://navkarmetals.7level.in/",
    category: "Industrial Steel & Metal Distribution",
    tagline: "North-East India's premier structural steel & metal supply portal",
    description:
      "A comprehensive digital inventory catalog and supply-chain portal for structural steel pipes, hollow sections, angles, plates, and fabrication hardware.",
    highlights: [
      "Instant specification lookups & dimension tables",
      "Direct RFQ (Request for Quote) inquiry submission pipeline",
      "Optimized for high-speed mobile loading across industrial yards",
    ],
    logo: navkarLogo,
    accentColor: "#7a58db",
    tags: ["Industrial", "Steel", "React & Vite"],
  },
  {
    id: "greenrockettv",
    title: "GreenRocket TV",
    domain: "greenrockettv.com",
    url: "https://greenrockettv.com/",
    category: "Digital Media, Entertainment & Broadcasting",
    tagline: "Dynamic media broadcasting & original creator productions",
    description:
      "The official web and streaming presence for GreenRocket TV, showcasing video broadcasts, original creator series, news episodes, and creative media entertainment.",
    highlights: [
      "Responsive multimedia streaming and video showcase grids",
      "Dynamic programming schedule and featured video carousels",
      "Sponsor integration and brand collaboration touchpoints",
    ],
    logo: greenRocketLogo,
    accentColor: "#00a775",
    tags: ["Media", "Streaming", "Video Production"],
  },
  {
    id: "bethelministry",
    title: "Bethel Ministry Mizoram",
    domain: "www.bethelministrymizoram.com",
    url: "https://www.bethelministrymizoram.com/",
    category: "Faith, Community & Non-Profit Organization",
    tagline: "Community outreach, publications & devotional resource portal",
    description:
      "Official digital gateway for Bethel Ministry Mizoram, serving congregations and communities worldwide with multilingual sermon archives, prayer requests, publications, and outreach updates.",
    highlights: [
      "Structured archive for sermons, publications, and daily devotionals",
      "Community prayer request submission & ministry event calendars",
      "Accessible typography and smooth reading experience across all screen sizes",
    ],
    logo: null,
    accentColor: "#d97706",
    tags: ["Community", "Ministry", "Non-Profit"],
  },
  {
    id: "7level",
    title: "7Level Group",
    domain: "7level.in",
    url: "https://7level.in",
    category: "Corporate Parent & Multi-Venture Portal",
    tagline: "Flagship holding company digital identity & ventures directory",
    description:
      "The central digital hub representing the 7Level corporate umbrella — presenting independent operations across electric mobility, steel distribution, media broadcasting, custom embroidery, and software engineering.",
    highlights: [
      "Custom GSAP micro-animations & kinetic brand ticker reveals",
      "Dynamic background-luminance detection for adaptive navigation styling",
      "Unified multi-venture index connecting every corporate division",
    ],
    logo: sevenLevelLogoOutlined,
    accentColor: "#2840e8",
    tags: ["Corporate", "Portfolio", "Design System"],
  },
  {
    id: "alvin",
    title: "Alvin",
    domain: "alvin.7level.in",
    url: "https://alvin.7level.in",
    category: "Personal Portfolio & Engineering Showcase",
    tagline: "Creative engineering, design experiments & software architecture",
    description:
      "A minimalist, high-performance personal engineering portfolio presenting technical case studies, design systems, open-source explorations, and full-stack software experiments.",
    highlights: [
      "Minimalist dark-mode aesthetic with ultra-clean typographic hierarchy",
      "Deep technical case studies and architectural breakdowns",
      "Lightweight assets optimized for sub-second page loads",
    ],
    logo: null,
    accentColor: "#06b6d4",
    tags: ["Portfolio", "Creative Engineering", "Minimalist"],
  },
];

const WEBSITE_FILTERS = [
  { id: "all", label: "All Websites (5)" },
  { id: "industrial", label: "Industrial & Steel" },
  { id: "media", label: "Media & Streaming" },
  { id: "community", label: "Community & Ministry" },
  { id: "portfolio", label: "Corporate & Portfolios" },
];

// ─── Engineering Capabilities ───
const CAPABILITIES = [
  {
    icon: <Code2 size={22} />,
    title: "Modern Web Architecture",
    description:
      "Building reactive, lightning-fast web applications with React, modern build pipelines, modular design systems, and rigorous accessibility compliance.",
  },
  {
    icon: <Database size={22} />,
    title: "Real-Time Data & Cloud Systems",
    description:
      "Architecting distributed real-time databases, serverless Cloud Functions, synchronized WebSocket connections, and high-throughput REST APIs.",
  },
  {
    icon: <Server size={22} />,
    title: "Cloud Infrastructure & DevOps",
    description:
      "Automated CI/CD pipelines, containerized deployments, edge routing, zero-downtime releases, and comprehensive cloud infrastructure monitoring.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Security & Performance Optimization",
    description:
      "Strict data sanitization, XSS/CSRF mitigation, role-based access security, and aggressive asset bundling targeting 95+ Core Web Vitals.",
  },
];

export default function SevenLevelIoPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredWebsites =
    activeFilter === "all"
      ? WEBSITES
      : WEBSITES.filter((w) =>
          w.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()))
        );

  return (
    <div className="io-page" data-nav-theme="light">
      {/* ─── Sticky Sub-Navigation ─── */}
      <nav className="io-subnav" aria-label="7level-io page navigation">
        <div className="container io-subnav__inner">
          <Link to="/" className="io-subnav__back">
            <ArrowLeft size={15} />
            <span>Back to 7Level Group</span>
          </Link>

          <div className="io-subnav__pills">
            <a href="#products">Products</a>
            <a href="#websites">Websites</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#stack">Tech Stack</a>
            <a href="mailto:contact@7level.in" className="io-subnav__cta">
              <Mail size={13} />
              <span>contact@7level.in</span>
            </a>
          </div>
        </div>
      </nav>

      {/* ─── Hero Section ─── */}
      <section className="io-hero" id="top">
        <div className="container">
          <div className="io-hero__content">
            <div className="io-badge">
              <span className="io-badge__pulse" />
              <Terminal size={14} />
              <span>7level-io // Software & Digital Platforms</span>
            </div>

            <h1 className="io-hero__title">
              Engineering Resilient <br />
              <span className="io-highlight">Web Systems & Digital Products</span>
            </h1>

            <p className="io-hero__desc">
              The dedicated software and engineering wing of 7Level. We design, build,
              and operate high-velocity cloud products — like <strong>SpeedX Rental</strong> and{" "}
              <strong>Clustr Collab</strong> — along with mission-critical web portals for
              enterprises, media broadcast networks, and community institutions.
            </p>

            <div className="io-hero__actions">
              <a href="#products" className="io-btn io-btn--primary">
                <span>View Products</span>
                <Boxes size={16} />
              </a>
              <a href="#websites" className="io-btn io-btn--secondary">
                <span>Explore Websites</span>
                <Globe size={16} />
              </a>
              <a href="mailto:contact@7level.in" className="io-btn io-btn--ghost">
                <span>Direct Inquiry</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="io-metrics">
              <div className="io-metric-item">
                <span className="io-metric-number">7+</span>
                <span className="io-metric-label">Live Deployments</span>
              </div>
              <div className="io-metric-divider" />
              <div className="io-metric-item">
                <span className="io-metric-number">100%</span>
                <span className="io-metric-label">In-House Engineering</span>
              </div>
              <div className="io-metric-divider" />
              <div className="io-metric-item">
                <span className="io-metric-number">99.9%</span>
                <span className="io-metric-label">Cloud Uptime Reliability</span>
              </div>
              <div className="io-metric-divider" />
              <div className="io-metric-item">
                <span className="io-metric-number">Full-Stack</span>
                <span className="io-metric-label">SaaS & Custom Portals</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 1: Flagship Products ─── */}
      <section className="io-section io-products-section" id="products">
        <div className="container">
          <div className="io-section__header">
            <span className="io-section__eyebrow">
              <Boxes size={15} /> PROPRIETARY PLATFORMS
            </span>
            <h2 className="io-section__title">Products Engineered by 7level-io</h2>
            <p className="io-section__sub">
              Cloud-native software systems built from scratch to automate operations,
              streamline team collaboration, and power modern mobility.
            </p>
          </div>

          <div className="io-products-grid">
            {PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="io-product-card"
                style={{ "--product-accent": prod.accentColor }}
              >
                <div className="io-product-card__header">
                  <div className="io-product-brand">
                    {prod.logo ? (
                      <div className="io-product-logo-box">
                        <img
                          src={prod.logo}
                          alt={`${prod.title} Logo`}
                          className="io-product-logo"
                        />
                      </div>
                    ) : (
                      <div className="io-product-logo-placeholder">
                        <Workflow size={24} />
                      </div>
                    )}
                    <div>
                      <span className="io-product-cat">{prod.category}</span>
                      <h3 className="io-product-name">{prod.title}</h3>
                    </div>
                  </div>

                  <div className="io-product-status">
                    <span className="io-status-dot" />
                    <span>{prod.badge}</span>
                  </div>
                </div>

                <p className="io-product-desc">{prod.description}</p>

                <div className="io-product-features">
                  <span className="io-features-title">Core Architecture & Capabilities:</span>
                  <ul>
                    {prod.features.map((feat, i) => (
                      <li key={i}>
                        <CheckCircle2 size={15} className="io-feature-check" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="io-product-footer">
                  <div className="io-product-tags">
                    {prod.techStack.map((tech) => (
                      <span key={tech} className="io-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href={prod.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="io-product-link-btn"
                  >
                    <span>Launch {prod.title}</span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 2: Websites & Digital Portals ─── */}
      <section className="io-section io-websites-section" id="websites">
        <div className="container">
          <div className="io-section__header">
            <span className="io-section__eyebrow">
              <Globe size={15} /> WEB PORTFOLIO
            </span>
            <h2 className="io-section__title">Websites & Digital Portals</h2>
            <p className="io-section__sub">
              High-performance, bespoke web platforms developed for industrial ventures,
              digital broadcasting, faith ministries, and executive portfolios.
            </p>
          </div>

          {/* Website Category Filters */}
          <div className="io-filter-pills" role="tablist" aria-label="Website categories">
            {WEBSITE_FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === f.id}
                className={`io-filter-btn ${activeFilter === f.id ? "active" : ""}`}
                onClick={() => setActiveFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="io-websites-grid">
            {filteredWebsites.map((site) => (
              <article
                key={site.id}
                className="io-site-card"
                style={{ "--site-accent": site.accentColor }}
              >
                <div className="io-site-card__top">
                  <div className="io-site-identity">
                    {site.logo ? (
                      <div className="io-site-icon-box">
                        <img
                          src={site.logo}
                          alt={`${site.title} logo`}
                          className="io-site-logo"
                        />
                      </div>
                    ) : (
                      <div className="io-site-icon-box io-site-icon--generic">
                        <Globe size={22} />
                      </div>
                    )}
                    <div>
                      <span className="io-site-cat">{site.category}</span>
                      <h3 className="io-site-title">{site.title}</h3>
                    </div>
                  </div>

                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="io-site-external-icon"
                    aria-label={`Visit ${site.title} (${site.domain})`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                </div>

                <div className="io-site-card__body">
                  <div className="io-site-domain-pill">
                    <Radio size={12} className="io-domain-pulse" />
                    <span>{site.domain}</span>
                  </div>

                  <p className="io-site-tagline">{site.tagline}</p>
                  <p className="io-site-desc">{site.description}</p>

                  <div className="io-site-highlights">
                    {site.highlights.map((h, i) => (
                      <div key={i} className="io-site-highlight-item">
                        <span className="io-site-bullet">▸</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="io-site-card__footer">
                  <div className="io-site-tags">
                    {site.tags.map((tag) => (
                      <span key={tag} className="io-site-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="io-site-visit-link"
                  >
                    <span>Visit Website</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 3: Engineering Capabilities ─── */}
      <section className="io-section io-capabilities-section" id="capabilities">
        <div className="container">
          <div className="io-section__header">
            <span className="io-section__eyebrow">
              <Cpu size={15} /> ENGINEERING SPECS
            </span>
            <h2 className="io-section__title">Our Technical Capabilities</h2>
            <p className="io-section__sub">
              How we approach software development, systems engineering, and web performance.
            </p>
          </div>

          <div className="io-capabilities-grid">
            {CAPABILITIES.map((cap, i) => (
              <div key={i} className="io-capability-card">
                <div className="io-capability-icon">{cap.icon}</div>
                <h3 className="io-capability-title">{cap.title}</h3>
                <p className="io-capability-desc">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4: Tech Stack Index ─── */}
      <section className="io-section io-stack-section" id="stack">
        <div className="container">
          <div className="io-stack-box">
            <div className="io-stack-box__info">
              <span className="io-section__eyebrow">
                <Layers size={15} /> TECHNOLOGY STACK
              </span>
              <h2 className="io-stack-title">Built with Precision & Modern Tools</h2>
              <p className="io-stack-desc">
                We select robust, battle-tested technologies that deliver peak performance,
                instant load speeds, and maintainable software architecture.
              </p>
            </div>

            <div className="io-stack-groups">
              <div className="io-stack-group">
                <h4 className="io-stack-group__label">Frontend & Interfaces</h4>
                <div className="io-stack-pills">
                  <span>React 19</span>
                  <span>Vite</span>
                  <span>TypeScript</span>
                  <span>GSAP Animations</span>
                  <span>Modern Responsive CSS</span>
                  <span>Lucide Icons</span>
                </div>
              </div>

              <div className="io-stack-group">
                <h4 className="io-stack-group__label">Backend & Realtime</h4>
                <div className="io-stack-pills">
                  <span>Node.js</span>
                  <span>Cloud Functions</span>
                  <span>Firestore Real-Time DB</span>
                  <span>RESTful APIs</span>
                  <span>WebSockets</span>
                </div>
              </div>

              <div className="io-stack-group">
                <h4 className="io-stack-group__label">Infrastructure & Delivery</h4>
                <div className="io-stack-pills">
                  <span>Edge CDN</span>
                  <span>Automated CI/CD</span>
                  <span>SSL & HTTPS</span>
                  <span>DNS & Multi-Domain Routing</span>
                  <span>Performance Telemetry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Contact & Inquiries CTA ─── */}
      <section className="io-cta-section" id="contact">
        <div className="container">
          <div className="io-cta-box">
            <div className="io-cta-badge">
              <Sparkles size={14} />
              <span>Let's Build Together</span>
            </div>
            <h2 className="io-cta-title">
              Have a software idea or web platform to develop?
            </h2>
            <p className="io-cta-desc">
              Whether you need a full-scale web product, custom operational software, or a
              high-performance digital website, the 7level-io engineering desk is ready.
            </p>
            <div className="io-cta-actions">
              <a href="mailto:contact@7level.in" className="io-cta-email-btn">
                <Mail size={16} />
                <span>contact@7level.in</span>
              </a>
              <Link to="/" className="io-cta-home-btn">
                <span>Explore 7Level Group</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="io-footer">
        <div className="container io-footer__inner">
          <div className="io-footer__brand">
            <Link to="/" className="io-footer__logo">
              7level-io
            </Link>
            <p className="io-footer__tagline">
              Software engineering & digital platform division of 7Level Group.
            </p>
          </div>

          <div className="io-footer__links">
            <Link to="/">7Level Home</Link>
            <span>•</span>
            <Link to="/lrn-studio">LRN Studio</Link>
            <span>•</span>
            <a href="https://speedxrental.7level.in" target="_blank" rel="noopener noreferrer">
              SpeedX Rental
            </a>
            <span>•</span>
            <a href="https://navkarmetals.7level.in/" target="_blank" rel="noopener noreferrer">
              Navkar Metal
            </a>
            <span>•</span>
            <a href="https://greenrockettv.com/" target="_blank" rel="noopener noreferrer">
              GreenRocket TV
            </a>
          </div>

          <div className="io-footer__copy">
            <p>© {new Date().getFullYear()} 7level-io / 7Level Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
