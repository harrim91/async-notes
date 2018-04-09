const fs = require('fs');
const path = require('path');
const request = require('request');

const errorLog = path.join(__dirname, 'error.log');
const reposFile = path.join(__dirname, 'repos.json');

const options = {
  url: 'https://api.github.com/users/harrim91/repos',
  headers: {
    'User-Agent': 'harrim91',
  },
};

request(options, (apiError, data) => {
  if (apiError) {
    fs.writeFile(errorLog, apiError, (writeError) => {
      if (writeError) {
        console.log(writeError);
      } else {
        console.log('Error written to log');
      }
    });
  } else {
    fs.writeFile(reposFile, JSON.stringify(data), (writeError) => {
      if (writeError) {
        console.log(writeError);
      } else {
        console.log('Repo data written to file');
      }
    });
  }
})
