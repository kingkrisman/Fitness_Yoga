
import React from 'react';
import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-row">
          <div className="brand-logo">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fe1affca2661699c44f12bb1fea50472eda70eb6c120fb3ef8df08b1b1d70c2?placeholderIfAbsent=true&apiKey=2b6e8b961c0f4ec68177e45379ef793c"
              className="brand-image"
              alt="Great Fitness Yoga Studio Logo"
            />
            <div className="brand-text">
              <div className="brand-title">
                Great <span className="brand-highlight">Fitness</span>
              </div>
              <div className="brand-subtitle">Yoga Studio</div>
            </div>
          </div>
          <nav className="nav-menu" role="navigation" aria-label="Footer Navigation">
            <a href="#" className="nav-link nav-link-active" tabIndex="0">Home</a>
            <a href="#" className="nav-link" tabIndex="0">Services</a>
            <a href="#" className="nav-link" tabIndex="0">Our Facility</a>
            <a href="#" className="nav-link" tabIndex="0">About</a>
            <a href="#" className="nav-link" tabIndex="0">Contact</a>
          </nav>
        </div>
      </div>
      <div className="divider-container">
        <div className="divider-row">
          <hr className="divider" aria-hidden="true" />
        </div>
      </div>
      <div className="social-container">
        <div className="footer-row">
          <div className="social-links">
            <a href="#" aria-label="Visit our Facebook page">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/59dddb6854ec99a2bc94c16e04f059f1d69d2d08d1c85a92c44692e1e071fe71?placeholderIfAbsent=true&apiKey=2b6e8b961c0f4ec68177e45379ef793c"
                className="social-icon"
                alt=""
              />
            </a>
            <a href="#" aria-label="Visit our Twitter page">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6d659ec5c588a24325e1fb353cee1d71c37bd55a10830dda779541f87a9d9a5?placeholderIfAbsent=true&apiKey=2b6e8b961c0f4ec68177e45379ef793c"
                className="social-icon"
                alt=""
              />
            </a>
            <a href="#" aria-label="Visit our Instagram page">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c5c961be2cef6506fa6c093d0e4b4f0ed7e07e7cda72edbbd914e178857a534e?placeholderIfAbsent=true&apiKey=2b6e8b961c0f4ec68177e45379ef793c"
                className="social-icon"
                alt=""
              />
            </a>
            <a href="#" aria-label="Visit our YouTube channel">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3916d41e94dcdc16627abb5fcfe355545ed8881b3f1e2078b8eab91a496e887e?placeholderIfAbsent=true&apiKey=2b6e8b961c0f4ec68177e45379ef793c"
                className="social-icon social-icon-youtube"
                alt=""
              />
            </a>
          </div>
          <div className="copyright">
            Copyright 2024 | All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
