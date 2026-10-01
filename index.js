// const os = require('os');

// console.log('OS Architecture:', os.arch());
// console.log('OS Platform:', os.platform());
// console.log('OS Release:', os.release());
// console.log('OS Type:', os.type());
// console.log('OS Uptime (seconds):', os.uptime());
// const path = require('path');

// function createFilePath(directory, filename) {
// 	return path.join(directory, filename);
// }

// const filepath = createFilePath('documents', 'notes.txt');
// console.log(filepath);
// const filePath = path.join('documents', 'notes.txt');
//console.log(filePath);
// const crypto = require('crypto');
// const hash = crypto.createHash('sha256').update('Hello, world!').digest('hex');
// console.log(hash);
// console.log(crypto.randomUUID());
// //Dns module is used to perform DNS lookups and resolve domain names to IP addresses.
// //  It provides methods for resolving hostnames, reverse lookups, and more.
// const dns = require('dns');
// dns.lookup('example.com', (err, address, family) => {
//   if (err) throw err;
//     console.log('Address:', address);
//     console.log('Family:', family);
// });
require('dotenv').config();
const process = require('process');
console.log(process.env.PORT);
console.log(process.argv);
//environment label variable 
//process object is 
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/yes') {
    res.writeHead(204);
    res.end();
    
  } else if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello, world</h1>');
    res.write('<p>This is a simple HTTP server created using Node.js.</p>');
    res.end();
  }else if (req.url === '/about ') {
    const data = {
      message: 'This is some sample data from the API.',    
    };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(data));
  }
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});