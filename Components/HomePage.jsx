import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import workingAnimation from "../assets/working.json";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="home-card">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-text-group">
            <span className="logo-text-intelli">Intelli</span>
            <span className="logo-text-shop">Shop</span>
          </div>
          <Lottie animationData={workingAnimation} className="logo-lottie" />
        </div>

        {/* Tagline */}
        <h2 className="hero-title">
          Smart, simple shop management at your fingertips
        </h2>

        {/* Subtitle */}
        <h4 className="hero-subtitle">
          Welcome to IntelliShop – Your one stop solution for all your shop
          management needs.
        </h4>

        {/* Features */}
        <ul className="features-list">
          <li>🛒 Manage inventory in real-time</li>
          <li>📊 Track sales and performance</li>
          <li>👥 Manage customers and staff easily</li>
          <li>📈 Get Analysis of the shop</li>
        </ul>

        {/* CTA */}
        <h4 className="cta-text">Login or Register to get started.</h4>

        {/* Buttons */}
        <div className="cta-buttons">
          <Link to="/logintype" className="login-button">
  <span role="img" aria-label="lock">🔐</span> <span style={{ marginLeft: "8px" }}>Login</span>
</Link>
          <Link to="/registertype" className="login-button">
  <span role="img" aria-label="write">✍️</span> <span style={{ marginLeft: "8px" }}>Register</span>
</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
