import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import "./DevelopmentPage.css";
import NotFound from "./NotFound";

const BRANDS = {
  "7level-io": {
    name: "7level-io",
    category: "Software & Digital Platforms",
    description:
      "The engineering arm of 7Level — building websites, software systems, and digital infrastructure.",
    color: "#2840e8",
  },
  "lrn-studio": {
    name: "LRN Studio",
    category: "Custom Embroidery & Digitizing",
    description:
      "Quality embroidery and digitizing delivered with care, precision, and honest workmanship.",
    color: "#58799e",
  },
};

export default function DevelopmentPage() {
  const { brand } = useParams();
  const data = BRANDS[brand];

  if (!data) return <NotFound />;

  return (
    <main className="dev-page">
      <div className="container dev-page__inner">
        <Link to="/" className="dev-back">
          <ArrowLeft size={16} /> Back to 7Level
        </Link>

        <div className="dev-content">
          <span className="dev-pill">Coming soon</span>
          <p className="dev-cat">{data.category}</p>
          <h1 className="dev-title" style={{ "--brand-color": data.color }}>
            {data.name}
          </h1>
          <p className="dev-desc">{data.description}</p>
        </div>

        <div className="dev-contact">
          <p>In the meantime, reach out directly.</p>
          <a href="mailto:contact@7level.in" className="dev-email-btn">
            <Mail size={16} /> contact@7level.in
          </a>
        </div>
      </div>
    </main>
  );
}
