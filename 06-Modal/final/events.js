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
  // const readable = fs.createReadStream('index.html');
  // const cssStyle = fs.createReadStream('style.css');
  // const jsSctipt = fs.createReadStream('script.js');
  // readable.on('data', chunk => {
  //   res.write(chunk);
  // });
  // readable.on('end', () => {
  //   res.end();
  //   // cssStyle.on('data', chunk => {
  //   //   res.write(chunk);
  //   // });
  // });
  // readable.on('error', err => {
  //   console.log(err);
  //   res.statusCode = 500;
  //   res.end('File not found!');
  // });
  // cssStyle.on('end', () => {
  //   res.end();
  //   // jsSctipt.on('data', chunk => {
  //   //   res.write(chunk);
  //   // });
  // });
  // jsSctipt.on('end', () => {
  //   res.end();
  // });

  // Solution 3: Pipe operator
  const readable = fs.createReadStream('index.html');
  readable.pipe(res);
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening on port 8000');
});
