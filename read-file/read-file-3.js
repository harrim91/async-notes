const fs = require('fs');
const path = require('path');

const filepath = path.join(__dirname, 'hello.txt');

console.log(1);

fs.readFile(filepath, (err, data) => {
  console.log(3);

  fs.writeFile(filepath, `${data} world!`, () => {
    console.log(4);
  });
});

console.log(2);
