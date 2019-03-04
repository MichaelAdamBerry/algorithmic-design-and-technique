//UNCOMMENT TESTS TO RUN

const { performance } = require("perf_hooks");

//----------------------------naive implementaion with recursion
//with higher values for n calculationg the same numbers many times to get to solution

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibTest() {
  console.log(`fibinacci(10) should return 55 ${fibonacci(10) === 55}`);
  console.log(`fibinacci(11) should return 89 ${fibonacci(11) === 89}`);
  console.log(`fibinacci(8) should return 21 ${fibonacci(8) === 21}`);
}
fibTest();

//--------------- FASTER ----- create each value of fibinacci sequence with a for loop  and an array.

function fasterFib(n) {
  fibArr = [0, 1];
  for (let i = 0; i < n + 1; i++) {
    if (i > 1) {
      let num = fibArr[i - 1] + fibArr[i - 2];
      fibArr.push(num);
    }
  }
  return fibArr[n];
}

function fasterFibTest() {
  console.log(`fasterFib(10) should return 55 -- ${fasterFib(10) === 55}`);
  console.log(`fasterFib(8) should return 21 -- ${fasterFib(8) === 21}`);
  console.log(`fasterFib(12) should return 144 -- ${fasterFib(12) === 144}`);
}

fasterFibTest();

//same idea as above except storing only last digit in array.
function fibLastDigit(n) {
  fibArr = [0, 1];
  for (let i = 0; i < n + 1; i++) {
    if (i > 1) {
      let num = fibArr[i - 1] + fibArr[i - 2];
      fibArr.push(num % 10);
    }
  }
  return fibArr[n];
}

// Performance Tests
function perfTest(vals, funcObj) {
  const name = Object.keys(funcObj)[0];
  const func = funcObj[name];
  vals.forEach(val => {
    let start = performance.now();
    let res = func(val);
    let end = performance.now();
    let time = end - start;
    console.log(`${name}(${val}) returns in ${time} ms`);
  });
}

console.log("..........perf test of fibLastDigit.........");
perfTest([10, 30, 55], { fibLastDigit: fibLastDigit });

console.log("...........perfTest faster fib..........");
perfTest([10, 30, 55], { fasterFib: fasterFib });

console.log("........... perfTest of fibonacci...........");
perfTest([10, 30, 55], { fibonacci: fibonacci });
