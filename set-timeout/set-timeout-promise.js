const delayedLogger = (value) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (value === 5) {
      reject('You can\'t log 5!');
    } else {
      console.log(value);
      resolve();
    }
  }, 1000);
});

delayedLogger(1)
  .then(() => delayedLogger(2))
  .then(() => delayedLogger(3))
  .then(() => delayedLogger(4))
  .then(() => delayedLogger(5))
  .then(() => delayedLogger(6))
  .then(() => delayedLogger(7))
  .then(() => delayedLogger(8))
  .catch((error) => {
    console.log(error);
  });
