import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <section id="privacy" className="privacy">
      <div className="privacy-container">
        <div className="privacy-header">
          <h1 className="page-title">
            <span className="gradient-text">Privacy Policy</span>
          </h1>
          <p className="page-subtitle">
            Last updated: January 2025
          </p>
        </div>

        <div className="privacy-content">
          <div className="policy-section">
            <h2>1. Information We Collect</h2>
            <p>
              Fluwo bot collects the following information to provide its services:
            </p>
            <ul>
              <li><strong>Server Information:</strong> Server ID, server name, and basic server settings</li>
              <li><strong>User Information:</strong> User ID, username, and avatar when interacting with commands</li>
              <li><strong>Command Usage:</strong> Commands used, timestamps, and basic interaction data</li>
              <li><strong>Economy Data:</strong> User balances, transactions, and inventory items</li>
              <li><strong>Game Data:</strong> Game scores, statistics, and progress</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide and maintain the bot's functionality</li>
              <li>Process commands and deliver responses</li>
              <li>Manage economy systems and game features</li>
              <li>Improve bot performance and user experience</li>
              <li>Provide customer support and troubleshoot issues</li>
              <li>Ensure compliance with Discord's Terms of Service</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>3. Data Storage and Security</h2>
            <p>
              All data is stored securely on our servers using industry-standard encryption. 
              We implement appropriate security measures to protect your information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div className="policy-section">
            <h2>4. Data Retention</h2>
            <p>
              We retain your data for as long as necessary to provide our services. 
              You may request deletion of your data at any time by contacting our support team. 
              Data will be automatically deleted if you remove the bot from your server.
            </p>
          </div>

          <div className="policy-section">
            <h2>5. Third-Party Services</h2>
            <p>
              Fluwo bot integrates with Discord's API and may use third-party services for 
              specific features. These services have their own privacy policies, and we 
              encourage you to review them.
            </p>
          </div>

          <div className="policy-section">
            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of certain data collection</li>
              <li>Contact us with privacy concerns</li>
            </ul>
          </div>

          <div className="policy-section">
            <h2>7. Children's Privacy</h2>
            <p>
              Our services are not intended for children under 13 years of age. 
              We do not knowingly collect personal information from children under 13. 
              If you are a parent or guardian and believe your child has provided us 
              with personal information, please contact us.
            </p>
          </div>

          <div className="policy-section">
            <h2>8. Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify users 
              of any material changes through our Discord server or website. 
              Continued use of the bot after changes constitutes acceptance of the new policy.
            </p>
          </div>

          <div className="policy-section">
            <h2>9. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our data practices, 
              please contact us:
            </p>
            <ul>
              <li><strong>Discord:</strong> Join our support server</li>
              <li><strong>Email:</strong> privacy@fluwo-bot.com</li>
            </ul>
          </div>
        </div>

        <div className="privacy-footer">
          <a href="#home" className="btn btn-secondary">
            <span className="btn-icon">🏠</span>
            Back to Home
          </a>
          <a href="#tos" className="btn btn-primary">
            <span className="btn-icon">📋</span>
            Terms of Service
          </a>
        </div>
      </div>
    </section>
  );
};

export default Privacy; 