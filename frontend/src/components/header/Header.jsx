// // src/components/Header/Header.jsx
import React, { useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo">TrendyFash</div>
      <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
        <Link
          className={`${location.pathname === "/" ? "active-link" : "link"}`}
          to="/"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          className={`${location.pathname === "/products" ? "active-link" : "link"}`}
          to="/products"
          onClick={() => setMenuOpen(false)}
        >
          Products
        </Link>
        <Link
          className={`${location.pathname === "/addproduct" ? "active-link" : "link"}`}
          to="/addproduct"
          onClick={() => setMenuOpen(false)}
        >
          Add Product
        </Link>
      </nav>
      <div className="user-section">
        <div className="user-avatar"></div>
        <span className="username">Akshitha</span>
      </div>
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </header>
  );
}
