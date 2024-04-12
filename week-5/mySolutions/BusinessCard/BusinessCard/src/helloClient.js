const http = require('http');

// Create an HTTP server instance
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, client!\n');
});

// Listen for incoming connections on port 3000
server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
