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
const crypto = require('crypto');
const hash = crypto.createHash('sha256').update('Hello, world!').digest('hex');
console.log(hash);
console.log(crypto.randomUUID());
//Dns module is used to perform DNS lookups and resolve domain names to IP addresses.
//  It provides methods for resolving hostnames, reverse lookups, and more.
const dns = require('dns');
dns.lookup('example.com', (err, address, family) => {
  if (err) throw err;
    console.log('Address:', address);
    console.log('Family:', family);
});