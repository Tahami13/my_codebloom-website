const express = require('express');
const path = require('path');
const fs = require('fs');
const { minify } = require('html-minifier');

const app = express();
const PORT = 3002;

// ✅ Force allow indexing for all pages
app.use((req, res, next) => {
  res.setHeader("X-Robots-Tag", "index, follow");
  next();
});

// Minify HTML before serving
app.get('/', (req, res) => {
  let html = fs.readFileSync(path.join(__dirname, 'public/index.html'), 'utf8');
  html = minify(html, {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true
  });
  res.send(html);
});

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Site running at http://localhost:${PORT}`);
});
