// server.mjs
import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cwd } from 'node:process';

// __dirname equivalente para ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');

// Servir archivos desde la carpeta donde está este archivo
const baseDir = __dirname;

// Mapas de tipos MIME básicos
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.txt': 'text/plain'
};

const server = createServer((req, res) => {
  const urlPath = req.url === '/' ? '/index.html' : req.url;
  const filePath = join(baseDir, decodeURIComponent(urlPath));

  try {
    if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = extname(filePath);
    const mimeType = mimeTypes[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': mimeType });
    const fileStream = createReadStream(filePath);
    fileStream.pipe(res);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('500 Internal Server Error');
    console.error(err);
  }
});

server.listen(3000, '127.0.0.1', () => {
  console.log(`Server running at http://127.0.0.1:3000/`);
});