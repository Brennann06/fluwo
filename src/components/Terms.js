import React from 'react';
import './Terms.css';

const Terms = () => {
  return (
    <section id="tos" className="terms">
      <div className="terms-container">
        <div className="terms-header">
          <h1 className="page-title">
            <span className="gradient-text">Terms of Service</span>
          </h1>
          <p className="page-subtitle">
            Last updated: January 2025
          </p>
        </div>

        <div className="terms-content">
          <div className="terms-section">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By using Fluwo bot ("the Bot"), you agree to be bound by these Terms of Service. 
              If you do not agree to these terms, please do not use the Bot. These terms apply 
              to all users of the Bot, including server administrators and individual users.
            </p>
          </div>

          <div className="terms-section">
            <h2>2. Description of Service</h2>
            <p>
              Fluwo is a Discord bot that provides entertainment features including games, 
              economy systems, truth or dare, would you rather questions, and various 
              interactive commands. The Bot is designed to enhance Discord server experiences 
              through fun and engaging activities.
            </p>
          </div>

          <div className="terms-section">
            <h2>3. User Conduct</h2>
            <p>When using the Bot, you agree not to:</p>
            <ul>
              <li>Use the Bot for any illegal or unauthorized purpose</li>
              <li>Attempt to exploit bugs or vulnerabilities in the Bot</li>
              <li>Use the Bot to harass, abuse, or harm other users</li>
              <li>Attempt to gain unauthorized access to the Bot's systems</li>
              <li>Use the Bot to spam or send excessive messages</li>
              <li>Violate Discord's Terms of Service or Community Guidelines</li>
              <li>Use the Bot to distribute malware or harmful content</li>
            </ul>
          </div>

          <div className="terms-section">
            <h2>4. Bot Usage and Limitations</h2>
            <p>
              The Bot is provided "as is" and we reserve the right to modify, suspend, 
              or discontinue the service at any time. We may implement rate limits, 
              usage restrictions, or other measures to ensure fair usage for all users.
            </p>
          </div>

          <div className="terms-section">
            <h2>5. Economy System</h2>
            <p>
              The Bot includes a virtual economy system with in-game currency. 
              These virtual currencies and items have no real-world value and cannot 
              be exchanged for real money or goods. We reserve the right to reset, 
              modify, or remove economy data at any time.
            </p>
          </div>

          <div className="terms-section">
            <h2>6. Privacy and Data</h2>
            <p>
              Your privacy is important to us. Please review our Privacy Policy to 
              understand how we collect, use, and protect your information. By using 
              the Bot, you consent to the collection and use of data as described in 
              our Privacy Policy.
            </p>
          </div>

          <div className="terms-section">
            <h2>7. Intellectual Property</h2>
            <p>
              The Bot and its content, including but not limited to code, graphics, 
              text, and features, are owned by us and protected by intellectual property 
              laws. You may not copy, modify, distribute, or create derivative works 
              without our express permission.
            </p>
          </div>

          <div className="terms-section">
            <h2>8. Disclaimers</h2>
            <p>
              The Bot is provided without warranties of any kind. We do not guarantee 
              that the Bot will be error-free, secure, or available at all times. 
              We are not responsible for any damages or losses resulting from the use 
              of the Bot.
            </p>
          </div>

          <div className="terms-section">
            <h2>9. Limitation of Liability</h2>
            <p>
              In no event shall we be liable for any indirect, incidental, special, 
              consequential, or punitive damages arising from your use of the Bot. 
              Our total liability shall not exceed the amount paid by you, if any, 
              for using the Bot.
            </p>
          </div>

          <div className="terms-section">
            <h2>10. Termination</h2>
            <p>
              We may terminate or suspend your access to the Bot at any time, with 
              or without cause, with or without notice. You may also stop using the 
              Bot at any time by removing it from your Discord server.
            </p>
          </div>

          <div className="terms-section">
            <h2>11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. We will notify 
              users of significant changes through our Discord server or website. 
              Continued use of the Bot after changes constitutes acceptance of the new terms.
            </p>
          </div>

          <div className="terms-section">
            <h2>12. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the 
              laws of the jurisdiction where the Bot is operated. Any disputes arising 
              from these terms shall be resolved through appropriate legal channels.
            </p>
          </div>

          <div className="terms-section">
            <h2>13. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <ul>
              <li><strong>Discord:</strong> Join our support server</li>
              <li><strong>Email:</strong> legal@fluwo-bot.com</li>
            </ul>
          </div>
        </div>

        <div className="terms-footer">
          <a href="#home" className="btn btn-secondary">
            <span className="btn-icon">🏠</span>
            Back to Home
          </a>
          <a href="#privacy" className="btn btn-primary">
            <span className="btn-icon">🔒</span>
            Privacy Policy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Terms; 