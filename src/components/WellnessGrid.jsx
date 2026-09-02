import "./WellnessGrid.css";

import { Link } from "react-router-dom";

import { RightArrow } from "./RightArrow";

export default function WellnessGrid({ items }) {
  return (
    <section className="wellness-grid container">
      {items.map((item, index) => (
        <Link to={item.path} key={index} style={{ textDecoration: "none" }}>
          <div
            className={`wellness-card ${item.cardClass || ""}`}
            style={{
              "--highlight-color": item.color,
              "--gradient-bg": item.gradient,
            }}
          >
            <div className="text">
              {item.text}
              <span>{item.highlight}</span>
            </div>
            <div className="card-rhs">
              <div className={`logo-frame ${item.logoClass || ""}`}>
                <img src={item.img} alt={`${item.text}${item.highlight}`} />
              </div>
              <div className="arrow">
                <RightArrow />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
