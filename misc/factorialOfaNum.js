// function findFactorial(num) {
//   let fac = 1;
//   // i=2 bcs there is no effect to multiply with 1
//   for (let i = 2; i <= num; i++) {
//     fac = fac * i;
//   }
//   return fac;
// }

// console.log(findFactorial(5));

function factorialOfaNum(n) {
  let sum = 1;
  for (let i = 2; i <= n; i++) {
    sum = sum * i;
  }
  return sum;
}

console.log(factorialOfaNum(5));

function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(5));

// fac of 3 = 1*2*3=6

// fac of 0 = 1
