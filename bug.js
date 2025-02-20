const http = require('http');

const server = http.createServer((req, res) => {
  // Error handling missing here
  res.end('Hello World!');
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});