const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const contactRoute = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API Route
app.use('/contact', contactRoute);

// Serve frontend build (dist folder from Vite)
app.use(express.static(path.join(__dirname, '../portfolio/dist')));

// For all other routes, serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../portfolio/dist/index.html'));
});

// Start server (IMPORTANT for Render)
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
