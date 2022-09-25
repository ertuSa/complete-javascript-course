const fs = require('fs');
// const http = require('http');
const server = require('http').createServer();

// const server = http.createServer((req, res) => {
//   res.end('Hello from the server!');
// });

server.on('request', (req, res) => {
  // Solution 1: good for light application
  // fs.readFile('index.html', (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  // Solution 2: Streams
  const readable = fs.createReadStream('index.html');
  const cssStyle = fs.createReadStream('style.css');
  const jsSctipt = fs.createReadStream('script.js');

  readable.on('data', chunk => {
    res.write(chunk);
  });

  readable.on('end', () => {
    cssStyle.on('data', chunk => {
      res.write(chunk);
    });
  });

  cssStyle.on('end', () => {
    jsSctipt.on('data', chunk => {
      res.write(chunk);
    });
  });

  jsSctipt.on('end', () => {
    res.end();
  });
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening on port 8000');
});
