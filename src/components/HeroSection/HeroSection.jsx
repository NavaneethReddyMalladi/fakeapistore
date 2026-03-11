import React from "react";
import { NavLink } from "react-router-dom";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Big Sale – Up to <span className="highlight">50% Off</span>
        </h1>

        <p className="subtitle">
          Discover Latest Trends. Shop Smart. Live Better.
        </p>

        <div className="hero-buttons">
          <NavLink to="/products" className="btn primary">
            Shop Now
          </NavLink>

          <NavLink to="/products" className="btn secondary">
            Explore Deals
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;