// const os = require('os');

// console.log('OS Architecture:', os.arch());
// console.log('OS Platform:', os.platform());
// console.log('OS Release:', os.release());
// console.log('OS Type:', os.type());
// console.log('OS Uptime (seconds):', os.uptime());
const path = require('path');

function createFilePath(directory, filename) {
	return path.join(directory, filename);
}

const filepath = createFilePath('documents', 'notes.txt');
console.log(filepath);
const filePath = path.join('documents', 'notes.txt');
console.log(filePath);
