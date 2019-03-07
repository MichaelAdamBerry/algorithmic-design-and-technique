const { performance } = require("perf_hooks");

function get_period(m) {
  let count = 1;
  const seq = [0, 1];
  let found = false;
  while (!found) {
    let num = (seq[count] + seq[count - 1]) % m;
    seq.push(num);
    count++;
    if (seq[count] === 1 && seq[count - 1] === 0) {
      return count - 1;
    }
  }
}

function test_get_period() {
  two = get_period(2);
  three = get_period(3);
  thousand = get_period(1000);
  console.log(two === 3 && "OK");
  console.log(three === 8 && "OK");
  console.log(thousand === 1500 && "OK");
}

function get_fibonacci_huge(n, m) {
  let remainder = n % get_period(m);
  let first = 0;
  let sec = 1;
  let res = remainder;
  while (remainder > 1) {
    res = (first + sec) % m;
    first = sec;
    sec = res;
    remainder = remainder - 1;
  }
  return res % m;
}

function perfTest(n, m) {
  console.log(get_fibonacci_huge(n, m));
  const start = performance.now();
  get_fibonacci_huge(n, m);
  const end = performance.now();
  console.log(end - start);
}

function generateTests() {
  let i = 10;
  while (i > 0) {
    let a = Math.floor(Math.random() * Math.floor(1000000000000000000));
    let b = Math.floor(Math.random() * Math.floor(100000));
    console.log("testing .....", a, b);
    perfTest(a, b);
    i--;
  }
}

generateTests();
