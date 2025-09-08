const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

module.exports = app;
