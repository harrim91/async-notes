const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'hello.txt');

console.log(1);

fs.readFile(filepath, (err, data) => {
  console.log(2);

  fs.writeFile(filepath, `${data} world!`, () => {
    console.log(3);
  });
});