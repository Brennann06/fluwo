import React, { useState } from 'react';
import './Commands.css';

const Commands = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const commandCategories = [
    { id: 'all', name: 'All Commands', icon: '📋' },
    { id: 'economy', name: 'Economy', icon: '💰' },
    { id: 'fun', name: 'Fun', icon: '🎮' },
    { id: 'util', name: 'Util', icon: '🛠️' }
  ];

  const commands = [
    // Economy
    { name: 'apply', description: 'Apply for a job to earn money', category: 'economy', usage: '/apply' },
    { name: 'bal', description: 'Check your coin balance', category: 'economy', usage: '/bal [@user]' },
    { name: 'beg', description: 'Beg for coins from other users', category: 'economy', usage: '/beg' },
    { name: 'daily', description: 'Collect your daily coins', category: 'economy', usage: '/daily' },
    { name: 'deposit', description: 'Deposit coins into your bank account', category: 'economy', usage: '/deposit <amount>' },
    { name: 'gameble', description: 'Gamble your coins', category: 'economy', usage: '/gameble <amount>' },
    { name: 'inventory', description: 'View your inventory', category: 'economy', usage: '/inventory [@user]' },
    { name: 'jobs', description: 'View available jobs', category: 'economy', usage: '/jobs' },
    { name: 'leaderboard', description: 'View the richest users', category: 'economy', usage: '/leaderboard' },
    { name: 'profile', description: 'View your profile and stats', category: 'economy', usage: '/profile [@user]' },
    { name: 'quit', description: 'Quit your current job', category: 'economy', usage: '/quit' },
    { name: 'rob', description: 'Attempt to rob another user', category: 'economy', usage: '/rob @user' },
    { name: 'shop', description: 'View the item shop', category: 'economy', usage: '/shop' },
    { name: 'start', description: 'Start your economy journey', category: 'economy', usage: '/start' },
    { name: 'withdrawl', description: 'Withdraw coins from your bank account', category: 'economy', usage: '/withdrawl <amount>' },
    { name: 'work', description: 'Work to earn coins', category: 'economy', usage: '/work' },
    
    // Fun
    { name: '8ball', description: 'Ask the magic 8-ball a question', category: 'fun', usage: '/8ball <question>' },
    { name: 'actions', description: 'Perform fun actions like kiss, hug, etc.', category: 'fun', usage: '/actions <action> [@user]' },
    { name: 'anime', description: 'Get random anime recommendations', category: 'fun', usage: '/anime' },
    { name: 'avatar', description: 'View user avatar', category: 'fun', usage: '/avatar [@user]' },
    { name: 'bubblerap', description: 'Generate bubble rap lyrics', category: 'fun', usage: '/bubblerap' },
    { name: 'coinflip', description: 'Flip a coin', category: 'fun', usage: '/coinflip' },
    { name: 'covid', description: 'Get COVID-19 statistics', category: 'fun', usage: '/covid [country]' },
    { name: 'crypto', description: 'Get cryptocurrency prices', category: 'fun', usage: '/crypto <coin>' },
    { name: 'dare', description: 'Get a random dare', category: 'fun', usage: '/dare' },
    { name: 'fact', description: 'Get a random interesting fact', category: 'fun', usage: '/fact' },
    { name: 'fakeban', description: 'Fake ban a user (for fun)', category: 'fun', usage: '/fakeban @user' },
    { name: 'guess', description: 'Play a guessing game', category: 'fun', usage: '/guess' },
    { name: 'hangman', description: 'Play hangman game', category: 'fun', usage: '/hangman' },
    { name: 'math', description: 'Solve math problems', category: 'fun', usage: '/math <expression>' },
    { name: 'rate', description: 'Rate something or someone', category: 'fun', usage: '/rate <thing>' },
    { name: 'reverse', description: 'Reverse text', category: 'fun', usage: '/reverse <text>' },
    { name: 'roast', description: 'Get roasted or roast someone', category: 'fun', usage: '/roast [@user]' },
    { name: 'scramble', description: 'Play word scramble game', category: 'fun', usage: '/scramble' },
    { name: 'tictactoe', description: 'Play tic-tac-toe', category: 'fun', usage: '/tictactoe [@user]' },
    { name: 'trivia', description: 'Play trivia game', category: 'fun', usage: '/trivia' },
    { name: 'weather', description: 'Get weather information', category: 'fun', usage: '/weather <city>' },
    { name: 'wish', description: 'Make a wish', category: 'fun', usage: '/wish <wish>' },
    { name: 'wyr', description: 'Would you rather question', category: 'fun', usage: '/wyr' },
    
    // Util
    { name: 'botstats', description: 'View bot statistics and information', category: 'util', usage: '/botstats' },
    { name: 'help', description: 'Get help with commands', category: 'util', usage: '/help [command]' },
    { name: 'invite', description: 'Get the bot invite link', category: 'util', usage: '/invite' },
    { name: 'privacy', description: 'View privacy policy and data usage', category: 'util', usage: '/privacy' }
  ];

  const filteredCommands = activeCategory === 'all' 
    ? commands 
    : commands.filter(cmd => cmd.category === activeCategory);

  return (
    <section id="commands" className="commands">
      <div className="commands-container">
        <div className="commands-header">
          <h2 className="section-title">
            <span className="gradient-text">Fluwo</span> Commands
          </h2>
          <p className="section-subtitle">
            Explore all the amazing commands that Fluwo has to offer
          </p>
        </div>

        <div className="category-tabs">
          {commandCategories.map(category => (
            <button
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="tab-icon">{category.icon}</span>
              <span className="tab-name">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="commands-grid">
          {filteredCommands.map((command, index) => (
            <div key={index} className="command-card">
              <div className="command-header">
                <h3 className="command-name">/{command.name}</h3>
                <span className="command-category">{command.category.replace('-', ' ')}</span>
              </div>
              <p className="command-description">{command.description}</p>
              <div className="command-usage">
                <span className="usage-label">Usage:</span>
                <code className="usage-code">{command.usage}</code>
              </div>
            </div>
          ))}
        </div>

        <div className="commands-footer">
          <p>Use <code>/help</code> in Discord to see all commands</p>
          <a href="#invite" className="btn btn-primary">
            <span className="btn-icon">🎮</span>
            Try Commands Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Commands;