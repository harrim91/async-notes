const delayedLogger = (value, callback) => {
  setTimeout(() => {
    console.log(value);
    if (callback) {
      callback();
    }
  }, 1000);
};

delayedLogger(1, () => {
  delayedLogger(2, () => {
    delayedLogger(3, () => {
      delayedLogger(4, () => {
        delayedLogger(5, () => {
          delayedLogger(6, () => {
            delayedLogger(7, () => {
              delayedLogger(8);
            });
          });
        });
      });
    });
  });
});
