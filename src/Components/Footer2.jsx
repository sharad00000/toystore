import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import './Footer2.css';

const Footer2 = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/your-toy-store" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/your-toy-store" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/your-toy-store" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.pinterest.com/your-toy-store" target="_blank" rel="noopener noreferrer">
              <FaPinterest />
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Explore</h3>
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/categories">Categories</a>
          <a href="/brands">Brands</a>
          <a href="/new-arrivals">New Arrivals</a>
        </div>
        <div className="footer-section">
          <h3>Information</h3>
          <a href="/About">About Us</a>
          <a href="/ContactUs">Contact Us</a>
          <a href="/faq">FAQ</a>
          <a href="/blog">Blog</a>
        </div>
        <div className="footer-section">
          <h3>Customer Service</h3>
          <a href="/shipping">Shipping</a>
          <a href="/returns">Returns</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
      <div className="newsletter">
        <h3>Subscribe to Our Newsletter</h3>
        <form>
          <input type="email" placeholder="Your Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Your Toy Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer2;