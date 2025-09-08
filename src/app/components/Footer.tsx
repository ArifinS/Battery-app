import React from "react";
import './footer.css';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-content">
      <div className="footer-logo">Battery App</div>
      <nav className="footer-nav">
        <a href="/about" className="footer-link">About</a>
        <a href="/contact" className="footer-link">Contact</a>
        <a href="/privacy" className="footer-link">Privacy Policy</a>
      </nav>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} Battery App. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;