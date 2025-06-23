import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Fluwo</h3>
              <p>The ultimate Discord bot for fun and entertainment</p>
            </div>
            <div className="footer-social">
              <a href="#" className="social-link" title="Discord">
                <span className="social-icon">🎮</span>
              </a>
              <a href="#" className="social-link" title="GitHub">
                <span className="social-icon">📚</span>
              </a>
              <a href="#" className="social-link" title="Support">
                <span className="social-icon">💬</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#commands">Commands</a></li>
              <li><a href="https://discord.com/oauth2/authorize?client_id=1382719896483401768&scope=bot" target="_blank" rel="noopener noreferrer">Invite Bot</a></li>
              <li><a href="/privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
              <li><a href="/terms.html" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Features</h4>
            <ul className="footer-links">
              <li><a href="#features">Fun Games</a></li>
              <li><a href="#features">Truth or Dare</a></li>
              <li><a href="#features">Would You Rather</a></li>
              <li><a href="#features">Economy System</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get Started</h4>
            <p>Ready to bring the fun to your server?</p>
            <a href="https://discord.com/oauth2/authorize?client_id=1382719896483401768&scope=bot" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <span className="btn-icon">🚀</span>
              Invite Fluwo
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-info">
            <p>&copy; 2025 Fluwo Bot. All rights reserved.</p>
            <p>Made with ❤️ for the Discord community</p>
          </div>
          <div className="footer-stats">
            <span className="stat">10+ Servers</span>
            <span className="stat">40+ Commands</span>
            <span className="stat">24/7 Uptime</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 