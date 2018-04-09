const delayedLogger = (value) => {
  setTimeout(() => {
    console.log(value);
  }, Math.random() * 5000);
};

delayedLogger(1);
delayedLogger(2);
delayedLogger(3);
