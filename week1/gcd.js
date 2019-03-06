// Given 2 numbers, find the greatest common divisor

function naiveSolution(a, b) {
  let divisor = 0;
  //smaller number
  const count = a < b ? a : b;
  for (let i = 0; i <= count; i++) {
    if (a % i === 0 && b % i === 0) {
      divisor = i;
    }
  }
  return divisor;
}

function naiveTests() {
  const testA = naiveSolution(10, 12);
  const testB = naiveSolution(20, 25);
  console.log(`naiveSolutioni(10,12) should return 2 ${testA === 2}`);
  console.log(`naiveSolution(20, 25) should return 5 ${testB === 5}`);
}
naiveTests();

function euclidean(a, b) {
  while (b !== 0) {
    let t = b;
    b = a % b;
    a = t;
  }
  return a;
}

function euclideanTests() {
  const testA = euclidean(28, 16);
  const testB = euclidean(18, 35);
  const testC = euclidean(28851538, 1183019);

  console.log(`testA ${testA === 4}`);
  console.log(`testB ${testB === 1}`);
  console.log(`testC ${testC === 17657}`);
}

euclideanTests();
