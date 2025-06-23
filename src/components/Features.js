import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🎮',
      title: 'Fun Games',
      description: 'Engage your server with a variety of entertaining games and activities that keep everyone laughing and having fun.',
      color: '#667eea'
    },
    {
      icon: '🎯',
      title: 'Truth or Dare',
      description: 'Classic party game with hundreds of creative questions and challenges to spice up your server conversations.',
      color: '#764ba2'
    },
    {
      icon: '🤔',
      title: 'Would You Rather',
      description: 'Pose intriguing dilemmas to your members and see their choices in real-time polls and discussions.',
      color: '#f093fb'
    },
    {
      icon: '🎲',
      title: 'Mini Games',
      description: 'Quick and exciting mini-games perfect for short breaks and keeping your server active and engaged.',
      color: '#4facfe'
    },
    {
      icon: '💰',
      title: 'Economy System',
      description: 'Complete economy with currency, shops, gambling, and leaderboards to create competition and engagement.',
      color: '#43e97b'
    },
    {
      icon: '⚡',
      title: '24/7 Uptime',
      description: 'Reliable bot that stays online around the clock, ensuring your server always has entertainment available.',
      color: '#fa709a'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="section-title">
            Why Choose <span className="gradient-text">Fluwo</span>?
          </h2>
          <p className="section-subtitle">
            Discover the amazing features that make Fluwo the perfect companion for your Discord server
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ '--feature-color': feature.color }}
            >
              <div className="feature-icon">
                <span>{feature.icon}</span>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-glow"></div>
            </div>
          ))}
        </div>

        <div className="features-cta">
          <h3>Ready to bring the fun to your server?</h3>
          <a href="https://discord.com/oauth2/authorize?client_id=1382719896483401768&scope=bot" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
            <span className="btn-icon">🚀</span>
            Invite Fluwo Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features; 