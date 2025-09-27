import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./footer.css";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      {/* Logo */}
      <div className="footer-logo">Vehicle App</div>

      {/* Navigation */}
      <nav className="footer-nav">
        <a href="/about" className="footer-link">About</a>
        <a href="/contact" className="footer-link">Contact</a>
        <a href="/privacy" className="footer-link">Privacy Policy</a>
      </nav>

      {/* Social Media */}
      <div className="footer-social flex justify-center">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
      </div>

      {/* Copyright */}
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Battery App. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
