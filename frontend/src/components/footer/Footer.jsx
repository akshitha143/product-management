// src/components/Footer/Footer.jsx
import React from "react";
import { LuInstagram } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="logo">TrendyFash</h2>
          <p>
            Discover the latest trends in fashion.  
            Style meets comfort in every piece we create.
          </p>
          <div className="social-icons">
            <a className="icon" href="#instagram" aria-label="Instagram"><LuInstagram /></a>
            <a className="icon" href="#facebook" aria-label="Facebook"><FaFacebookF /></a>
            <a className="icon" href="#twitter" aria-label="Twitter"><FaXTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/addproduct">Add Product</a>
          
        </div>

        <div className="footer-subscribe">
          <h4>Stay Connected</h4>
          <p>Get the latest updates on new arrivals and exclusive offers.</p>
          <form className="subscribe-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} TrendyFash. All rights reserved.</p>
      </div>
    </footer>
  );
}
