const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'hello.txt');
const lorem = path.join(__dirname, 'lorem.txt');

console.log(1);

const data = fs.readFileSync(lorem, 'utf8');

console.log(data);
