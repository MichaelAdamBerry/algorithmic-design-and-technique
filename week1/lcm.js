const { performance } = require("perf_hooks");

function lcm(a, b) {
  //check for either a or b being a multiple
  if (a % b === 0) {
    return b;
  }
  if (b % a === 0) {
    return a;
  }
  let v = 1;
  //count starts at the smaller of the two nums
  let c = a < b ? a : b;
  let r = false;
  const aMults = [a];
  const bMults = [b];
  const check = (l, lArr, jArr) => {
    if (jArr.includes(l * c)) {
      v = l * c;
      r = true;
    } else {
      lArr.push(l * c);
    }
  };

  while (!r && (a < b ? a : b)) {
    check(b, bMults, aMults);
    check(a, aMults, bMults);
    c++;
  }
  return v;
}

const perfTest = pair => {
  const start = performance.now();
  const val = lcm(...pair);
  const end = performance.now();
  console.log(`lcm(${pair}) returns ${val} in ${end - start} ms`);
};

const generateTests = () => {
  for (let i = 0; i < 10; i++) {
    let pair = [];
    for (let i = 0; i < 2; i++) {
      pair.push(Math.floor(Math.random() * Math.floor(30)));
    }
    console.log("testing pair ", pair);
    perfTest(pair);
  }
};

generateTests();
