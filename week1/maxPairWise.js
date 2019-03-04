const { performance } = require("perf_hooks");

// max pairwise product

//nested loops
function naiveAlgorithm(arr) {
  let product = 0;
  for (el of arr) {
    for (i of arr) {
      let val = el * i;
      let test = el !== i && val > product;
      if (test) {
        product = val;
      }
    }
  }
  return product;
}

// two separate loops to find largest and next largest numbers
function maxPairFast(arr) {
  let largest = arr[0];
  let largestInx = 0;
  let large = arr[0];
  arr.forEach((el, inx) => {
    if (el > largest) {
      largest = el;
      largestInx = inx;
    }
  });
  arr.forEach((el, inx) => {
    if (el > large && inx !== largestInx) {
      large = el;
    }
  });
  return large * largest;
}

//reduce method
function maxPairReduce(arr) {
  const data = arr.reduce(
    (acc, cur, inx, arry) => {
      if (cur > acc.largest) {
        acc.largestInx = inx;
        acc.nextLargest = acc.largest;
        acc.largest = cur;
      } else if (cur > acc.nextLargest && cur !== acc.largest) {
        acc.nextLargest = cur;
      }
      return acc;
    },
    { largest: 0, largestInx: 0, nextLargest: 0 }
  );
  return data.largest * data.nextLargest;
}

// returns the amount of time a function takes

function timer(func, testData) {
  const start = performance.now();
  func(testData);
  const end = performance.now();
  return end - start;
}

function logPerformace(funcArr, testData) {
  funcArr.forEach(obj => {
    const name = Object.keys(obj)[0];
    const func = obj[name];
    console.log(`${name} returns in ${timer(func, testData)} `);
  });
}

const funcArr = [
  { maxPairFast: maxPairFast },
  { maxPairReduce: maxPairReduce },
  { naiveAlgorithm: naiveAlgorithm }
];

function generateTest(numberOfTests, maxArrLength) {
  //Each iteration is a test
  for (let i = 0; i < numberOfTests; i++) {
    let testArr = [];
    let length = Math.floor(Math.random() * Math.floor(maxArrLength));
    console.log(`testing functions with an array length ${length}`);
    //build testArr
    for (let j = 0; j < length; j++) {
      testArr.push(Math.floor(Math.random() * Math.floor(5)));
    }
    //run test
    logPerformace(funcArr, testArr);
  }
}
console.log(
  "testing functions with 10 randomly generated arrays with max length 100"
);
generateTest(10, 100);
