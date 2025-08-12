import "./WellnessGrid.css";

import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { RightArrow } from "./RightArrow";

export default function WellnessGrid({items}) {
  return (
    <section className="wellness-grid container">
      {items.map((item, index) => (
        <Link to={item.path} key={index} style={{ textDecoration: "none" }}>
          <div
            className="wellness-card"
            key={index}
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
              <img src={item.img} alt="" className="img-default" />
              <img src={item.imgHover} alt="" className="img-hover" />
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
