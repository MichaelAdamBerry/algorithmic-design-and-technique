module.exports = {
  timer: function(func, testData) {
    const start = performance.now();
    func(testData);
    const end = performance.now();
    return end - start;
  },
  logPerformace: function(funcArr, testData) {
    funcArr.forEach(func => {
      console.log(`${func} takes ${timer(func, testData)} ms`);
    });
  }
};
