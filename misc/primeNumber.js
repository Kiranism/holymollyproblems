// 1,3,5,7,
// divisible by a smaller number
// all -ve and 1 should be non prime

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(5));
