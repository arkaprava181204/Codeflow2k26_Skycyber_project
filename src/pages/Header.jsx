import React from "react";
import { Link } from "react-router-dom";
import logo from "../components/logo.png";

export default function Header({ theme, toggleTheme }) {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <Link to="/" className="header-logo-wrap">
          <img src={logo} className="header-logo" alt="I-Cockroach Logo" />
        </Link>

        <h1 className="header-title">BY SKYCYBER</h1>

        <div className="header-actions">
          <button
            type="button"
            onClick={toggleTheme}
            className="theme-toggle-btn"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>

          <Link to="/" className="getting-started-btn">
            Getting Started
          </Link>
        </div>
      </nav>
    </header>
  );
}