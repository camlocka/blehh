const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the kemstock.com directory
app.use(express.static(path.join(__dirname, 'niggerhunters.cc')));

// Redirect root to index.html
app.get('/', (req, res) => {
  res.redirect('/index.html');
});

// Handle 404s
app.use((req, res) => {
  res.status(404).send('Page not found');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log(`Open your browser and navigate to http://localhost:${port}/`);
});