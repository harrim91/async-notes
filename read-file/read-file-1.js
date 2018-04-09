const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'hello.txt');

console.log(1);

fs.readFile(filepath, () => {
  console.log(2);
});

console.log(3);
