#!/bin/bash

# CyberWatch System Setup Script
# This script helps you set up the cybersecurity threat tracking system

echo "🛡️ CyberWatch System Setup"
echo "=========================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Create project structure
echo "📁 Creating project structure..."
mkdir -p cyberwatch-system/{src/{collectors,services,models},public,templates}
cd cyberwatch-system

# Initialize npm project
echo "📦 Initializing npm project..."
npm init -y

# Install dependencies
echo "⬇️ Installing dependencies..."
npm install express axios cheerio node-cron nodemailer handlebars mongoose dotenv cors helmet rss-parser
npm install --save-dev nodemon

# Create .env file
echo "⚙️ Creating environment configuration..."
cat > .env << EOL
# Email Configuration (Update with your credentials)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password

# Database Configuration
DATABASE_URL=mongodb://localhost:27017/cyberwatch

# Application Configuration
BASE_URL=http://localhost:3000
PORT=3000
NODE_ENV=development

# Optional API Keys
NEWS_API_KEY=your-news-api-key
VIRUSTOTAL_API_KEY=your-virustotal-key
EOL

# Create basic server file
echo "🖥️ Creating server file..."
cat > server.js << EOL
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API Routes
app.get('/api/incidents', (req, res) => {
    // Return sample incident data
    res.json({ incidents: [] });
});

app.listen(PORT, () => {
    console.log(\`🛡️ CyberWatch server running on http://localhost:\${PORT}\`);
});
EOL

# Update package.json scripts
echo "📝 Updating package.json scripts..."
npm pkg set scripts.start="node server.js"
npm pkg set scripts.dev="nodemon server.js"

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Copy your HTML, CSS, and JS files to the 'public' folder"
echo "2. Update .env file with your email credentials"
echo "3. Run 'npm run dev' to start development server"
echo ""
echo "For production deployment:"
echo "- Install PM2: npm install -g pm2"
echo "- Start with: pm2 start server.js --name cyberwatch"
echo ""
echo "📖 Check the implementation guide for detailed instructions!"