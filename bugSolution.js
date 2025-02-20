const http = require('http');

const server = http.createServer((req, res) => {
  res.on('error', err => {
    console.error('Response Error:', err);
  });
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

server.on('error', err => {
  console.error('Server Error:', err);
  if (err.code === 'EADDRINUSE') {
    console.error('Port already in use.');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});