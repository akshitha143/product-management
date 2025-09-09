// src/components/Header/Header.jsx
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();
    console.log(location.pathname);
    return (
        <header className="header">

        <div className="logo">TrendyFash</div>
        <nav className="nav">
            <Link className={`${location.pathname === "/" ? "active-link" : "link"}`}  to="/">Home</Link>
            <Link className={`${location.pathname === "/products" ? "active-link" : "link"}`} to="/products">Products</Link>
            <Link className={`${location.pathname === "/addproduct" ? "active-link" : "link"}`} to="/addproduct">Add Product</Link>
        </nav>
        <div className="user-section">
            <div className="user-avatar"></div>
            <span className="username">John Doe</span>
        </div>
        </header>
    );
}
