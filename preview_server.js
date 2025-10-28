const http = require('http');
const fs = require('fs');
const path = require('path');

const baseDir = __dirname;
const mime = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain',
};

const server = http.createServer((req, res) => {
  const urlPath = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(baseDir, decodeURIComponent(urlPath));
  try {
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      res.writeHead(403);
      return res.end('Directory listing is forbidden');
    }
    const ext = path.extname(filePath);
    res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } catch (e) {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log('Preview server at http://127.0.0.1:3000/');
});