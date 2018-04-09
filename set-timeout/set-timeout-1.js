const delayedLogger = (value) => {
  setTimeout(() => {
    console.log(value);
  }, 1000);
};

delayedLogger(1);
delayedLogger(2);
delayedLogger(3);
