import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100svh", background: "var(--cream)", display: "flex", alignItems: "center", padding: "8rem 0" }}>
      <div className="container">
        <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", fontWeight: 600, color: "var(--ink-muted)", textDecoration: "none", marginBottom: "3rem" }}>
          <ArrowLeft size={16} /> Back home
        </Link>
        <p style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>404</p>
        <h1 style={{ fontSize: "clamp(4rem, 12vw, 10rem)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 1, color: "var(--ink)", marginBottom: "1.5rem" }}>Not found.</h1>
        <p style={{ fontSize: "1.1rem", color: "var(--ink-muted)", marginBottom: "2.5rem" }}>
          This page doesn't exist in the 7Level directory.
        </p>
        <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem", fontWeight: 700, color: "var(--white)", background: "var(--ink)", textDecoration: "none", padding: "0.85rem 1.5rem", borderRadius: "100px" }}>
          <ArrowLeft size={16} /> Return to home
        </Link>
      </div>
    </main>
  );
}
