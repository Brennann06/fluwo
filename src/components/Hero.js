import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to <span className="gradient-text">Fluwo</span>
            </h1>
            <p className="hero-subtitle">
              The ultimate Discord bot for fun, games, and entertainment! 
              From truth or dare to mini-games and economy features, 
              Fluwo brings excitement to your server.
            </p>
            <div className="hero-buttons">
              <a href="https://discord.com/oauth2/authorize?client_id=1382719896483401768&scope=bot" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                <span className="btn-icon">🎮</span>
                Invite to Server
              </a>
              <a href="#commands" className="btn btn-secondary">
                <span className="btn-icon">📋</span>
                View Commands
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Servers</span>
              </div>
              <div className="stat">
                <span className="stat-number">40+</span>
                <span className="stat-label">Commands</span>
              </div>
              <div className="stat">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Uptime</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="bot-avatar">
              <div className="avatar-circle">
                <span className="avatar-text">F</span>
              </div>
              <div className="status-indicator online"></div>
            </div>
            <div className="floating-elements">
              <div className="floating-icon">🎲</div>
              <div className="floating-icon">💎</div>
              <div className="floating-icon">🎯</div>
              <div className="floating-icon">⚡</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
    </section>
  );
};

export default Hero; 