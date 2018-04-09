const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'hello.txt');

console.log(1);

const data = fs.readFileSync(filepath, 'utf8');

console.log(data);
